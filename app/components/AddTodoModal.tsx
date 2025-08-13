import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Form,
  Input,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { AppRoutes } from "@/configs/Route";
import { useMutation, useQueryClient } from "react-query";
import {
  IPostProductsParameter,
  patchProducts,
  postProducts,
} from "@/app/queryhooks/products";
import { toast } from "sonner";
import {
  loginSchema,
  TLoginSchema,
} from "../(dashboard)/dashboard/login/_schema/login.types";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { useEffect } from "react";
import { productAction } from "../lib/features/editProductSlice";

export function AddTodoModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const queryclient = useQueryClient();
  const { product } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("description", product.description);
      onOpen();
      
    }
   
  }
  , [product]);
  

  const todoListMutation = useMutation({
    mutationFn: (data: IPostProductsParameter) => postProducts(data),
    onSuccess() {
      queryclient.invalidateQueries({ queryKey: "products" });
      toast.success("Todo Added");
    },
    onError() {
      toast.error("post has an error");
    },
    onSettled() {
      onClose();
      reset();
    },
  });
  const todoListPatchMutation = useMutation({
    mutationFn: (data: IPostProductsParameter) =>
      patchProducts({ body: data, id: product?.id as string }),
    onSuccess() {
      queryclient.invalidateQueries({ queryKey: "products" });
      toast.success("Todo Edited");
    },
    onError() {
      toast.error("patch has an error");
    },
    onSettled() {
      dispatch(productAction.setProductId(null));
      onClose();
      reset();
    },
  });

  const loginOnSubmit = (data: TLoginSchema) => {
    if (product) {
      todoListPatchMutation.mutate(data);
    } else {
      todoListMutation.mutate(data);
    }
  };

  return (
    <>
      <Button onPress={onOpen}>Add Todo </Button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Todo
              </ModalHeader>

              <Form
                onSubmit={handleSubmit(loginOnSubmit)}
                className="w-full justify-center items-center space-y-4"
              >
                <div className="flex flex-col gap-4 max-w-md">
                  <Input
                    {...register("title")}
                    label="Title"
                    labelPlacement="outside"
                    name="title"
                    placeholder="Enter your title"
                  />
                  {errors.title && (
                    <span className="text-danger text-small">
                      {errors.title.message}
                    </span>
                  )}

                  <Input
                    {...register("description")}
                    label="Description"
                    labelPlacement="outside"
                    name="description"
                    placeholder="Enter your Description"
                    type="text"
                  />
                  {errors.description && (
                    <span className="text-danger text-small">
                      {errors.description.message}
                    </span>
                  )}

                  {/* {errors.terms && (
          <span className="text-danger text-small">{errors.terms}</span>
        )} */}

                  <div className="flex gap-4"></div>
                </div>

                <Button type="reset" variant="bordered" onClick={onClose}>
                  Reset
                </Button>
                <Button
                  isDisabled={
                    todoListMutation.isLoading ||
                    todoListPatchMutation.isLoading
                  }
                  isLoading={
                    todoListMutation.isLoading ||
                    todoListPatchMutation.isLoading
                  }
                  className="w-full"
                  color="primary"
                  type="submit"
                >
                  {product ? "edit" : "Add"}
                </Button>
              </Form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
