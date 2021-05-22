import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { FcGoogle } from "react-icons/fc";
import auth, { provider } from "../../services/firebaseConfig";
import { useContext } from "react";
import { AppContext } from "../../context/context";
const SignInBtn = () => {
  const setUser = useContext(AppContext).user[1];

  const signInWithGoogle = async () => {
    await auth
      .signInWithPopup(provider)
      .then((response) => setUser(response.user));
  };
  return (
    <Box borderRadius="14px" _hover={{ bg: "var(--primary)" }}>
      <Button
        onClick={signInWithGoogle}
        fontSize={14}
        letterSpacing={1}
        color="var(--secondary)"
        //   bg="#fafafa"
        leftIcon={<FcGoogle />}
        variant="solid"
      >
        Sign In With Google
      </Button>
    </Box>
  );
};

export default SignInBtn;
