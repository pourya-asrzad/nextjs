
import { productAction } from "@/app/lib/features/editProductSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { deleteOneProduct } from "@/app/queryhooks/products";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";


export default function DeleteProductModal() {
  const queryclient = useQueryClient();
    const dispatch = useAppDispatch();
  
  const {isOpen, onOpen, onOpenChange , onClose} = useDisclosure();
    const {productId}=useAppSelector((state)=>state.product)
    useEffect(() => {
    if (productId) {
      onOpen();
      
    }
  }
  , [productId]);
   const deleteListMutation = useMutation({
    mutationFn: () => deleteOneProduct(productId as string),
    onSuccess() {
      queryclient.invalidateQueries({ queryKey: "products" });
      toast.success("Todo Deleted");
    },
    onError() {
      toast.error("post has an error");
    },
    onSettled() {
      dispatch(productAction.setProductIdDelete(null));
      
      onClose();
  
    },
  });
  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        
        
        <ModalContent>
          {(onClose) => (
            
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                محصول خذف شد 
              </ModalBody>
              <ModalFooter>
               
                <Button color="danger" variant="light" onPress={()=>{deleteListMutation.mutate()}}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

