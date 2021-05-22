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

  function getPosts() {
    let docs = [];
    firestore
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => docs.push({ id: doc.id, post: doc.data() }))
      );
    setPosts(docs);
  }

  useEffect(() => {
    getPosts();
    console.log("mapped");
  }, []);

  return (
    <AppContext.Provider
      // These values can be used whenever and wherver the component lies if AuthContext Provider has the parent consumer within itself
      value={{
        user: [user, setUser],
        posts: [posts, setPosts],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvder;
