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
  Button,
  //   DrawerCloseButton,
} from "@chakra-ui/react";

const DrawerComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        _focus={{
          border: "none",
          outline: "none",
        }}
        as="button"
        transition="bg 0.5s cubic-bezier(.08,.52,.52,1)"
        fontWeight="semibold"
        _hover={{ bg: "transparent", color: "var(--primary)", border: "none" }}
      >
        <IconButton
          _hover={{ bg: "transparent" }}
          _focus={{
            border: "none",
            outline: "none",
          }}
          fontSize={26}
          border="none"
          bg="transparent"
          icon={<FiMenu />}
          outline={"none"}
          onClick={onOpen}
        />
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
