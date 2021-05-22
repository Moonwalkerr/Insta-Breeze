import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { FaSignOutAlt } from "react-icons/fa";
import auth from "../../services/firebaseConfig";

const LogoutBtn = () => {
  const handleLogout = async () => {
    await auth.signOut();
  };
  return (
    <Box borderRadius="14px" _hover={{ bg: "var(--primary)" }}>
      <Button
        onClick={handleLogout}
        fontSize={14}
        letterSpacing={1}
        color="var(--secondary)"
        //   bg="#fafafa"
        leftIcon={<FaSignOutAlt />}
        variant="solid"
      >
        Logout
      </Button>
    </Box>
  );
};

export default LogoutBtn;
