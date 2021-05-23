import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { AvatarImg, Comment, PostMenu } from "..";
import "./styles.css";
import { GrLike } from "react-icons/gr";
import { firestore } from "../../services/firebaseConfig";
import CommentInput from "../commentInput";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useMediaQuery } from "@chakra-ui/react";

const Post = ({
  userId,
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

  // For responsiveness
  const [isLargerThan600, isLessThan450, isLessThan400] = useMediaQuery([
    "(min-width:600px)",
    "(max-width:450px)",
    "(max-width:400px)",
  ]);

  const getContainerWidth = () => {
    if (isLargerThan600) {
      return "60vw";
    }
    if (isLessThan450) {
      return "85vw";
    } else {
      return "75vw";
    }
  };

  return (
    <Box
      key={id}
      mb={5}
      bg="#fafafa"
      _hover={{ boxShadow: "1px 2px 2px 6px rgba(0, 0, 0, 0.28)" }}
      boxShadow="1px 1px 3px 5px rgba(0, 0, 0, 0.18)"
      transition="box-shadow 0.3s"
      minW={getContainerWidth()}
      maxW={getContainerWidth()}
      borderRadius="6"
    >
      <Flex
        width="100%"
        justifyContent="space-between"
        borderRadius="6"
        align="center"
        bg="#49275B"
        p={1}
      >
        <Flex align="center">
          <AvatarImg name={userName} src={photoUrL} />
          <Text
            ml={2}
            fontSize={isLessThan400 ? "12px" : "sm"}
            fontWeight="bold"
            color="#fafafa"
          >
            {userName}
          </Text>
        </Flex>
        {user && user.uid === userId && <PostMenu key={id} id={id} />}
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
          textAlign="start"
          float="left"
          mt={2}
          ml={2}
          color="purple.700"
          fontSize="sm"
          fontWeight="bold"
          lineHeight="short"
          overflow="scroll"
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
