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
  postProducts,
} from "@/app/queryhooks/products";
import { toast } from "sonner";
import {
  loginSchema,
  TLoginSchema,
} from "../(dashboard)/dashboard/login/_schema/login.types";

export function AddTodoModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
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
  const queryclient = useQueryClient();

  const todoListMutation = useMutation({
    mutationFn: (data: IPostProductsParameter) => postProducts(data),
    onSuccess() {
      queryclient.invalidateQueries({ queryKey: "products" });
      toast.success("Todo Added");
    },
    onError() {
      toast.error("post has an error");
    },
  });

  const loginOnSubmit = (data: TLoginSchema) => {
    todoListMutation.mutate(data);
    onClose();
    reset();

    // alert(JSON.stringify(data));
    // router.replace(AppRoutes.DASHBOARD + AppRoutes.PRODUCTS);
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
                  isDisabled={todoListMutation.isLoading}
                  isLoading={todoListMutation.isLoading}
                  className="w-full"
                  color="primary"
                  type="submit"
                >
                  Add
                </Button>
              </Form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
