import { Flex, Heading } from "@chakra-ui/react";
import { AvatarImg, DrawerComp, SignInBtn } from "../../comps/";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { GiWindSlap } from "react-icons/gi";
import { useMediaQuery } from "@chakra-ui/react";

const Navbar = () => {
  const user = useContext(AppContext).user[0];

  // For responsiveness
  const [isLargerThan528, isLargerThan400, isLargerThan340] = useMediaQuery([
    "(min-width:528px)",
    "(min-width:400px)",
    "(min-width:340px)",
  ]);

  const getHeadingFontSize = () => {
    if (isLargerThan528) {
      return "1.8rem";
    }
    if (isLargerThan400) {
      return "1.4rem";
    }
    if (isLargerThan340) {
      return "1rem";
    } else {
      return "0.89rem";
    }
  };

  return (
    <header>
      <Flex
        width="100vw"
        // width={isLargerThan700 ? "100vw" : "120vw"}
        boxShadow="2px 3px 2px 5px rgba(0, 0, 0, 0.2)"
        color="#fafafafa"
        flex-direction
        p={4}
        justifyContent="space-between"
        bg="var(--secondary)"
        // bg={isLargerThan528 ? "green" : "red"}
      >
        <DrawerComp />
        <Heading
          fontStyle="italic"
          fontFamily="'Lora', serif"
          letterSpacing={6}
          mt={2}
          fontSize={getHeadingFontSize()}
        >
          <Flex>
            Insta-Breeze
            <GiWindSlap />
          </Flex>
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
