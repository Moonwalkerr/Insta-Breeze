import { FiMenu } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/hooks";
import { MdBuild, MdCall } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Flex, useToast } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
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

  // For responsiveness
  const [isLargerThan528, isLessThan450, isLargerThan400, isLargerThan340] =
    useMediaQuery([
      "(min-width:528px)",
      "(max-width:450px)",
      "(min-width:400px)",
      "(min-width:340px)",
    ]);

  const getHeadingFontSize = () => {
    if (isLargerThan528) {
      return "1.5rem";
    }
    if (isLargerThan400) {
      return "1.2rem";
    }
    if (isLargerThan340) {
      return "1rem";
    } else {
      return "0.8rem";
    }
  };

  const getSubHeadingFontSize = () => {
    if (isLargerThan528) {
      return "0.74rem";
    }
    if (isLargerThan400) {
      return "0.68rem";
    }
    if (isLargerThan340) {
      return "0.6rem";
    } else {
      return "0.4rem";
    }
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
      <Drawer size={"xs"} placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            bg="var(--secondary)"
            color="#fafafa"
            borderBottomWidth="1px"
          >
            {user ? (
              <>
                <Text
                  fontFamily="Merriweather , sans-serif"
                  fontSize={getHeadingFontSize()}
                >
                  {user.displayName}
                </Text>
                <Text
                  fontFamily="Lora, sans-serif"
                  fontSize={getSubHeadingFontSize()}
                >
                  {user.email}
                </Text>
              </>
            ) : (
              <Text fontFamily="Lora, sans-serif" fontSize="22px">
                Please Sign in to Continue
              </Text>
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
              <Flex
                fontFamily="Lora, sans-serif"
                align="center"
                justifyContent="space-evenly"
              >
                <SignInBtn />
                {isLessThan450 && <h2>Sign In With Google</h2>}
              </Flex>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComp;
