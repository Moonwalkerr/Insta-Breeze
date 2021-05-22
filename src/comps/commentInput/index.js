import "./styles.css";
import { useState } from "react";
const CommentInput = ({ comments, id }) => {
  const [comment, setComment] = useState("");

  const addComment = (e) => {
    e.preventDefault();
    let newCommentArray = comments.push(comment);
    console.log(newCommentArray);
    setComment("");
  };

  return (
    <form id="comment_input" onSubmit={addComment}>
      <input
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment ..."
        size="xs"
      />
      <button type="submit" display="none" />
    </form>
  );
};

export default CommentInput;
