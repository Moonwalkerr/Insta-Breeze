import { Flex, Spacer, Text } from "@chakra-ui/react";
import { SignInBtn } from "..";
import "./styles.css";

const Navbar = () => {
  return (
    <header styles={{ width: "100vw" }}>
      <Flex
        width="97%"
        flex-direction
        p={20}
        // justifyContent="space-around"
        bg="var(--primary)"
      >
        <Text letterSpacing={4}>Insta-Breeze</Text>
        <Spacer />
        <Text letterSpacing={4} fontSize={20}>
          Insta-Breeze
        </Text>
        <Spacer />
        <SignInBtn />
        {/* </nav> */}
      </Flex>
    </header>
  );
};

export default Navbar;
