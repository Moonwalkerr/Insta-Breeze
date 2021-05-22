import { Flex } from "@chakra-ui/layout";
import { CreatePost } from "..";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Post } from "../../comps";
import { useState, useEffect } from "react";
import { firestore } from "../../services/firebaseConfig";

const PostFeeds = () => {
  const [posts, setPosts] = useContext(AppContext).posts;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unSubscribe = firestore
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        snapshot.forEach((docs) => {
          if (docs.data().userName) {
            console.log(docs.data().userName);
            setLoading(false);
            posts.push({ ...docs.data() });
          }
        });
      });
    setPosts(posts);
    return () => unSubscribe(); // cleanup function
  }, [posts]);

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
      {posts.length > 0 &&
        posts.map((post) => {
          console.log(post);
          return (
            <Post
              key={post.id}
              id={post.id}
              userName={post.userName}
              timestamp={post.timestamp}
              photoUrL={post.photoUrl}
              imageUrL={post.imageUrl}
              caption={post.caption}
              // likes={post.likes}
            />
          );
        })}
    </Flex>
  );
};

export default PostFeeds;
