import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { AvatarImg, Comment } from "..";
import "./styles.css";
import { GrLike } from "react-icons/gr";
import { firestore } from "../../services/firebaseConfig";
import CommentInput from "../commentInput";
import { useContext } from "react";
import { AppContext } from "../../context/context";
const Post = ({
  id,
  caption,
  userName,
  photoUrL,
  imageUrl,
  comments,
  likes,
  timestamp,
}) => {
  // fetcing user's state from context layer

  const user = useContext(AppContext).user[0];
  // Adding like method
  const addLike = (postId) => {
    firestore
      .collection("posts")
      .doc(postId)
      .update({
        likes: likes + 1,
      });
  };

  return (
    <Box
      p={2}
      key={id}
      mb={5}
      bg="#fafafa"
      _hover={{ boxShadow: "1px 2px 2px 6px rgba(0, 0, 0, 0.28)" }}
      boxShadow="1px 1px 3px 5px rgba(0, 0, 0, 0.18)"
      transition="box-shadow 0.3s"
      minW="700px"
      maxW="700px"
      borderRadius="6"
    >
      <Flex width="100%" borderRadius="6" align="center" bg="#49275B" p={1}>
        <AvatarImg name={userName} src={photoUrL} />
        <Text ml={2} fontSize="sm" fontWeight="bold" color="#fafafa">
          {userName}
        </Text>
        <Text
          float="right"
          ml={340}
          fontSize="10"
          fontWeight="bold"
          color="#fafafa"
        >
          {/* Firebase timestamp to Date() and removing time part */}
        </Text>
      </Flex>
      {imageUrl ? (
        <Image
          mt="1"
          height="50vh"
          width="100%"
          objectFit="cover"
          borderRadius="md"
          src={imageUrl}
        />
      ) : (
        <Spacer mt={4} />
      )}
      <Flex
        borderBottom="1px solid lightgrey"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          mt={2}
          ml={2}
          color="purple.700"
          fontSize="lg"
          fontWeight="bold"
          lineHeight="short"
        >
          {caption}
          {/* <p style={{ fontSize: "10px" }}>
            {new Date(timestamp?.toDate()).toDateString()}
          </p> */}
        </Text>
        {user && (
          <Button
            onClick={() => addLike(id)}
            _focus={{
              border: "none",
              outline: "none",
            }}
            color="var(--secondary)"
            leftIcon={<GrLike />}
            variant="solid"
            mt={2}
          >
            {likes}
          </Button>
        )}
      </Flex>
      <Flex flexDirection="column" mt={3} align="center">
        {comments ? (
          comments.map((comment) => (
            <Comment username={comment.userName} comment={comment.comment} />
          ))
        ) : (
          <></>
        )}
      </Flex>
      {user ? <CommentInput key={id} comments={comments} id={id} /> : <></>}
    </Box>
  );
};

export default Post;
