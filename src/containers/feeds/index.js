import { Flex } from "@chakra-ui/layout";
import { CreatePost } from "..";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Post } from "../../comps/";
import { firestore } from "../../services/firebaseConfig";

const PostFeeds = () => {
  const posts = useContext(AppContext).posts[0];
  const loading = useContext(AppContext).loading[0];

  return (
    <Flex
      width="100vw"
      flexDirection="column"
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="center"
    >
      <CreatePost />
      {loading && <h1>Loading</h1>}
      {firestore
        .collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          snapshot.docs.map((docs) => (
            <Post
              key={docs.id}
              id={docs.id}
              caption={docs.data().caption}
              userName={docs.data().userName}
              timestamp={docs.data().timestamp}
              photoUrL={docs.data().photoUrl}
              imageUrL={docs.data().imageUrl}
              likes={docs.data().likes}
            />
          ));
        })}
    </Flex>
  );
};

export default PostFeeds;
