import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { FcGoogle } from "react-icons/fc";

const SignInBtn = () => {
  return (
    <Box borderRadius="14px" _hover={{ bg: "var(--primary)" }}>
      <Button
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
