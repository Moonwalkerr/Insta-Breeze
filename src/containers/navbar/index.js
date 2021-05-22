import { Flex, Heading } from "@chakra-ui/react";
import { AvatarImg, DrawerComp, SignInBtn } from "../../comps/";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const Navbar = () => {
  const user = useContext(AppContext).user[0];
  return (
    <header
      styles={{
        width: "100vw",
      }}
    >
      <Flex
        width="100%"
        boxShadow="2px 3px 2px 5px rgba(0, 0, 0, 0.2)"
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
