import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Text } from "@chakra-ui/layout";

const Post = ({
  id,
  caption,
  userName,
  photoUrL,
  imageUrL,
  //   comments,
  //   likes,
  timestamp,
}) => {
  return (
    <Box
      key={id}
      mb={5}
      className="post_container"
      bg="#fafafa"
      // p="1"
      maxW="48vw"
      borderRadius="4"
    >
      <Flex
        align="center"
        borderRadius="4"
        bg="#49275B"
        p={1}
        borderBottom="1px solid lightgrey"
      >
        <img className="avatar feed-avatar" src={photoUrL} alt="" />
        {/* <Badge colorScheme="pink">{userName}</Badge> */}
        <Text ml={2} fontSize="sm" fontWeight="bold" color="#fafafa">
          {userName}
        </Text>
        <Text ml={260} fontSize="10" fontWeight="bold" color="#fafafa">
          {/* Firebase timestamp to Date() and removing time part */}
          {new Date(timestamp?.toDate()).toDateString()}
        </Text>
      </Flex>
      {imageUrL ? (
        <Image
          mt="1"
          height="50vh"
          width="100%"
          objectFit="cover"
          borderRadius="md"
          src={imageUrL}
        />
      ) : (
        <></>
      )}
      <Text
        mt={2}
        ml={2}
        color="purple.700"
        fontSize="xl"
        fontWeight="bold"
        lineHeight="short"
      >
        {caption}
      </Text>
      <Text mt={2}>$119/night</Text>
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
