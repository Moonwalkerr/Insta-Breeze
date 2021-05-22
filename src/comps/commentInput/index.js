import { Input } from "@chakra-ui/input";

const CommentInput = ({ comments, id }) => {
  return (
    <Input
      border="1px solid lightgrey"
      _focus={{
        border: "none",
        outline: "none",
      }}
      placeholder="Leave a comment ..."
      size="xs"
    />
  );
};

export default CommentInput;
