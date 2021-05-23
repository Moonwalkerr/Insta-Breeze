import { Button } from "@chakra-ui/button";
import { FcGoogle } from "react-icons/fc";
import auth, { provider } from "../../services/firebaseConfig";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Flex, Spacer, useMediaQuery } from "@chakra-ui/react";

const SignInBtn = () => {
  const setUser = useContext(AppContext).user[1];
  // For responsiveness
  const [isLargerThan650, isLargerThan540, isLargerThan450, isLargerThan340] =
    useMediaQuery([
      "(min-width:650px)",
      "(min-width:540px)",
      "(min-width:450px)",
      "(min-width:340px)",
    ]);

  const getFontSize = () => {
    if (isLargerThan650) {
      return "0.8rem";
    }
    if (isLargerThan540) {
      return "0.6rem";
    }
    if (isLargerThan450) {
      return "0.5rem";
    }
    if (isLargerThan340) {
      return "0.5rem";
    } else {
      return "0.44rem";
    }
  };

  const getButtonWidth = () => {
    if (isLargerThan650) {
      return "180px";
    }
    if (isLargerThan540) {
      return "140px";
    }
    if (isLargerThan450) {
      return "130px";
    }
    if (isLargerThan340) {
      return "40px";
    } else {
      return "20px";
    }
  };

  const signInWithGoogle = async () => {
    await auth
      .signInWithPopup(provider)
      .then((response) => setUser(response.user));
  };
  return (
    <Button
      p={isLargerThan650 ? "10px 20px" : "2px 26px"}
      width={getButtonWidth()}
      onClick={signInWithGoogle}
      fontSize={getFontSize()}
      letterSpacing={1}
      color="var(--secondary)"
      // leftIcon={ />}
      variant="solid"
    >
      <Flex
        fontFamily="Merriweather, sans-serif"
        alignItems="center"
        justifyContent="space-between"
      >
        {<FcGoogle fontSize={isLargerThan450 ? "20px" : "22px"} />}
        <Spacer width="8px" />
        {isLargerThan450 && <span>Sign In With Google</span>}
      </Flex>
    </Button>
  );
};

export default SignInBtn;
