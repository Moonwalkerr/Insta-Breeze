import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { AvatarImg } from "..";
import "./styles.css";
import { GrLike } from "react-icons/gr";

const Post = ({
  id,
  caption,
  userName,
  photoUrL,
  imageUrl,
  //   comments,
  likes,
  timestamp,
}) => {
  return (
    <Box
      key={id}
      mb={5}
      bg="#fafafa"
      // p="1"
      maxW="700px"
      borderRadius="6"
    >
      <Flex
        width="100%"
        borderRadius="6"
        align="center"
        bg="#49275B"
        p={1}
        borderBottom="1px solid lightgrey"
      >
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
          {new Date(timestamp?.toDate()).toDateString()}
        </Text>
      </Flex>
      {imageUrl && (
        <Image
          mt="1"
          height="50vh"
          width="100%"
          objectFit="cover"
          borderRadius="md"
          src={imageUrl}
        />
      )}
      <Text
        float="left"
        mt={2}
        ml={2}
        color="purple.700"
        fontSize="xl"
        fontWeight="bold"
        lineHeight="short"
      >
        {caption}
      </Text>
      <Button
        // onClick={signInWithGoogle}
        // fontSize={14}
        // letterSpacing={1}
        color="var(--secondary)"
        leftIcon={<GrLike />}
        variant="solid"
        float="right"
        mt={2}
      >
        {likes}
      </Button>
      <Flex flexDirection="column" mt={3} align="center">
        {/* {comments.length > 0 ? (
            comments.map((comment, value) => {
              return (
                <Comment
                  key={value}
                  comment={comment.comment}
                  userName={comment.userName}
                />
              );
            })
          ) : (
            <h4>No Comments Yet</h4>
          )} */}
      </Flex>
      {/* {user && <CommentsInputBox id={id} comments={comments} />} */}
    </Box>
  );
};

export default Post;
