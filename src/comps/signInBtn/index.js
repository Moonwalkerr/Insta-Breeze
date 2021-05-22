import { Button } from "@chakra-ui/button";
import { FcGoogle } from "react-icons/fc";

const SignInBtn = () => {
  return (
    <Button
      fontFamily="Merriweather,sans-serif"
      p={6}
      cursor="pointer"
      leftIcon={<FcGoogle />}
      colorScheme="teal"
      variant="solid"
    >
      Sign In With Google
    </Button>
  );
};

export default SignInBtn;
