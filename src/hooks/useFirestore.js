import { useState, useEffect } from "react";
import { firestore } from "../services/firebaseConfig";

const useFirestore = (collectionName) => {
  const [doc, setDoc] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unSubscribe = firestore
      .collection("posts")
      // ordering our data  in date order in descending order
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        doc.push(
          snapshot.forEach((docs) => {
            if (docs.data().userName) {
              console.log(docs.data().userName);
              setLoading(false);
              setDoc({ ...docs.data() });
            }
          })
        );
      });
    // setDoc(doc);
    return () => unSubscribe(); // cleanup function
  }, [collectionName]);
  // console.log(doc);
  return { doc, loading };
};

export default useFirestore;
