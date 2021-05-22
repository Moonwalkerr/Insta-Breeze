import { FiMenu } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/hooks";
import { MdBuild, MdCall } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useToast } from "@chakra-ui/react";
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
  Stack,
  Text,
  //   DrawerCloseButton,
} from "@chakra-ui/react";
import { LogoutBtn, SignInBtn } from "..";

const DrawerComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useContext(AppContext).user[0];
  const toast = useToast();

  const showWIPToast = () => {
    toast({
      title: "Aw snap!",
      position: "top",
      description:
        "Looks like you have cliked a Work in progress feature ! Sorry for the inconvenience",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

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
          <DrawerHeader
            bg="var(--secondary)"
            color="#fafafa"
            borderBottomWidth="1px"
          >
            {user ? (
              <>
                <Text fontSize="24px">Abhishek Mishra</Text>
                <Text fontSize={12}> abhisk.mhra@gmail.com</Text>
              </>
            ) : (
              <Text fontSize="24px">Please Sign in to Continue</Text>
            )}
          </DrawerHeader>
          <DrawerBody>
            {user ? (
              <Stack spacing={4}>
                <LogoutBtn />
                <Button
                  onClick={showWIPToast}
                  leftIcon={<RiDashboardLine />}
                  colorScheme="purple"
                  variant="outline"
                >
                  Dashboard
                </Button>
                <Button
                  onClick={showWIPToast}
                  leftIcon={<MdBuild />}
                  colorScheme="purple"
                  variant="outline"
                >
                  Settings
                </Button>
                <Button
                  onClick={showWIPToast}
                  leftIcon={<MdCall />}
                  colorScheme="purple"
                  variant="outline"
                >
                  Call us
                </Button>
              </Stack>
            ) : (
              <SignInBtn />
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComp;
