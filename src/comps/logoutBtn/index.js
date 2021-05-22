import { Button } from "@chakra-ui/button";
import { FaSignOutAlt } from "react-icons/fa";
import auth from "../../services/firebaseConfig";

const LogoutBtn = () => {
  const handleLogout = async () => {
    await auth.signOut();
  };
  return (
    <Button
      onClick={handleLogout}
      leftIcon={<FaSignOutAlt />}
      colorScheme="purple"
      variant="outline"
    >
      Logout
    </Button>
  );
};

export default LogoutBtn;
