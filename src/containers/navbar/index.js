import { Flex, Heading } from "@chakra-ui/react";
import { AvatarImg, DrawerComp, SignInBtn } from "../../comps/";
import { useContext } from "react";
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
          ml={20}
          fontStyle="italic"
          fontFamily="'Lora', serif"
          letterSpacing={6}
          fontSize={"2rem"}
        >
          Insta-Breeze
        </Heading>
        {user ? (
          <AvatarImg name={user.displayName} src={user.photoURL} />
        ) : (
          <SignInBtn />
        )}
      </Flex>
    </header>
  );
};

export default Navbar;
