import { useState, useEffect, createContext } from "react";
import auth from "../services/firebaseConfig";

export const AppContext = createContext();

const ContextProvider = (props) => {
  // declaring pieces of states in the context layer to access globally from anywhere inside the application
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  //   To check if auth / user is logged in already or not
  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser.uid) {
      setUser(firebaseUser);
    }
  });

  //   useEffect(() => {}, []);
  return (
    <AppContext.Provider
      value={{
        user: [user, setUser],
        posts: [posts, setPosts],
      }}
    >
      {props.childern}
    </AppContext.Provider>
  );
};
export default ContextProvider;
