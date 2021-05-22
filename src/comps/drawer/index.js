import { FiMenu } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/hooks";

import {
  Drawer,
  DrawerBody,
  //   DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Box,
  //   DrawerCloseButton,
} from "@chakra-ui/react";

const DrawerComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box hover={{ bg: "var(--primary)" }}>
        <IconButton icon={<FiMenu />} color="var(--secondary)" onClick={onOpen}>
          Open
        </IconButton>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComp;
