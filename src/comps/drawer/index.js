import { FiMenu } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/hooks";
import { MdBuild, MdCall } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
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
          <DrawerHeader
            bg="var(--secondary)"
            color="#fafafa"
            borderBottomWidth="1px"
          >
            <Text fontSize="24px">Abhishek Mishra</Text>
            <Text fontSize={12}> abhisk.mhra@gmail.com</Text>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Button
                leftIcon={<RiDashboardLine />}
                colorScheme="purple"
                variant="outline"
              >
                Dashboard
              </Button>
              <Button
                leftIcon={<MdBuild />}
                colorScheme="purple"
                variant="outline"
              >
                Settings
              </Button>
              <Button
                leftIcon={<RiDashboardLine />}
                colorScheme="purple"
                variant="outline"
              >
                Call us
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComp;
