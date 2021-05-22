import { useState, createContext } from "react";
import auth from "../services/firebaseConfig";

export const AppContext = createContext();

const AppContextProvder = (props) => {
  // User's piece of state
  const [user, setUser] = useState(null);

  // Checking if user exists, whenever we reload the tab
  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser.uid) {
      setUser(firebaseUser);
    }
  });
  return (
    <AppContext.Provider
      // These values can be used whenever and wherver the component lies if AuthContext Provider has the parent consumer within itself
      value={{
        user: [user, setUser],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvder;
