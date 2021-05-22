import "./styles.css";
import { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import { firestore } from "../../services/firebaseConfig";
const CommentInput = ({ comments, id }) => {
  const [comment, setComment] = useState("");
  const user = useContext(AppContext).user[0];

  //   This function adds new comments to the comment array from firebase and updates the data on firebase simultaneously
  const addComment = (e) => {
    e.preventDefault();
    if (comment !== "") {
      comments.push({ userName: user.displayName, comment: comment });

      // Updating to firestore's doc
      firestore.collection("posts").doc(id).update({
        comments: comments,
      });
      setComment("");
    } else {
      alert("Please Enter a comment !");
    }
  };

  return (
    <form onSubmit={addComment}>
      <input
        value={comment}
        className="comment_input"
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment ..."
        size="xs"
      />
      <button type="submit" display="none" />
    </form>
  );
};

export default CommentInput;
