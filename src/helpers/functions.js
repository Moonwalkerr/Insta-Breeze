import { firestore } from "../services/firebaseConfig";
const generateID = (length) => {
  var result = "";
  let characters = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export default generateID;

export const getComments = (id, setter) => {
  firestore
    .collection("posts")
    .doc(id)
    .collection("comments")
    .orderBy("timestamp", "desc")
    .onSnapshot((snap) => {
      setter(
        snap.docs.map((doc) => ({ id: doc.id, commentArray: doc.data() }))
      );
    });
};
