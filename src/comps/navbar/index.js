import { Flex, Heading, Text } from "@chakra-ui/react";
import { DrawerComp, SignInBtn } from "..";
import "./styles.css";
const Navbar = () => {
  return (
    <header styles={{ width: "100vw" }}>
      <Flex
        color="#fafafafa"
        flex-direction
        p={4}
        justifyContent="space-between"
        bg="var(--secondary)"
      >
        <DrawerComp />
        <Heading letterSpacing={4} fontSize={20}>
          Insta-Breeze
        </Heading>
        <SignInBtn />
      </Flex>
    </header>
  );
};

export default Navbar;
