import { Flex, Heading } from "@chakra-ui/react";
import { DrawerComp, SignInBtn } from "..";
import { useContext } from "react";
import "./styles.css";
import { AppContext } from "../../context/context";
const Navbar = () => {
  const user = useContext(AppContext).user[0];
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
        <Heading
          fontStyle="italic"
          fontFamily="'Lora', serif"
          letterSpacing={6}
          fontSize={"2rem"}
        >
          Insta-Breeze
        </Heading>

        <SignInBtn />
      </Flex>
    </header>
  );
};

export default Navbar;
