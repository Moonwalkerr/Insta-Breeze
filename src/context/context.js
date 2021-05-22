import { useEffect, useState, createContext } from "react";
import auth, { firestore } from "../services/firebaseConfig";

export const AppContext = createContext();

const AppContextProvder = (props) => {
  // User's piece of state
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  // const [comments, setComments] = useState([]);

  // Checking if user exists, whenever we reload the tab
  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser.uid) {
      setUser(firebaseUser);
    }
  });
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   let document = [];
  //   setLoading(true);
  //   const unSubscribe = firestore
  //     .collection("posts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => {
  //       snapshot.forEach((docs) => {
  //         console.log(docs.data().caption);
  //         setLoading(false);
  //         document.push({ post: docs.data(), id: docs.id });
  //       });
  //       setPosts(document);
  //     });
  //   return () => unSubscribe(); // cleanup function
  // }, []);
  return (
    <AppContext.Provider
      // These values can be used whenever and wherver the component lies if AuthContext Provider has the parent consumer within itself
      value={{
        user: [user, setUser],
        posts: [posts, setPosts],
        loading: [loading, setLoading],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvder;
