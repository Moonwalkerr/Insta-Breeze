import { Flex } from "@chakra-ui/layout";
import { CreatePost } from "..";

const PostFeeds = () => {
  return (
    <Flex
      width="100vw"
      flexDirection="column"
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="center"
    >
      <CreatePost />
    </Flex>
  );
};

export default PostFeeds;
