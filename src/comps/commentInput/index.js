import "./styles.css";
import { useState } from "react";
import { firestore } from "../../services/firebaseConfig";
const CommentInput = ({ comments, id }) => {
  const [comment, setComment] = useState("");

  //   This function adds new comments to the comment array from firebase and updates the data on firebase simultaneously
  const addComment = (e) => {
    e.preventDefault();
    comments.push(comment);

    // Updating to firestore's doc
    firestore.collection("posts").doc(id).update({
      comments: comments,
    });
    setComment("");
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
