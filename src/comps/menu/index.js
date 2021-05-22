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
const PostMenu = (id) => {
  const deletePost = () => {
    let userConfirmation = window.confirm(
      "Do you really want to delete this image from your gallery?"
    );
    if (userConfirmation) {
      firestore
        .collection("posts")
        .doc(id)
        .delete()
        .then(() => {
          alert("Deleted Successfully");
        });
    }
  };
  return (
    <Menu key={id}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<GiHamburgerMenu />}
        variant="outline"
      />
      <MenuList>
        <MenuItem onClick={deletePost} icon={<AiTwotoneDelete />} command="⌘T">
          Delete
        </MenuItem>
        {/* <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
          New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command="⌘O">
          Open File...
        </MenuItem> */}
      </MenuList>
    </Menu>
  );
};

export default PostMenu;
