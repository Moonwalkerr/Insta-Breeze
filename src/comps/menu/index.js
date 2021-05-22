import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneDelete } from "react-icons/ai";
import { firestore } from "../../services/firebaseConfig";
import { useToast } from "@chakra-ui/react";

const PostMenu = ({ id }) => {
  // toast for showing delete success display
  const toast = useToast();
  const deletePost = () => {
    let userConfirmation = window.confirm(
      "Do you really want to delete this image from your gallery?"
    );
    if (userConfirmation) {
      firestore
        .collection("posts")
        .doc(id)
        .delete()
        .then(() =>
          toast({
            title: "Successfuly deleted.",
            position: "top",
            description: "The Post has been deleted from your storage",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        );
    }
  };
  return (
    <Menu fontSize="sm" key={id}>
      <MenuButton
        _hover={{ bg: "var(--primary)" }}
        fontSize="sm"
        bg="#fafafa"
        _focus={{
          border: "none",
          outline: "none",
        }}
        as={IconButton}
        aria-label="Options"
        icon={<GiHamburgerMenu />}
        variant="outline"
      />
      <MenuList>
        <MenuItem fontSize="sm" onClick={deletePost} icon={<AiTwotoneDelete />}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PostMenu;
