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
    let document = [];
    setLoading(true);
    const unSubscribe = firestore
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        snapshot.forEach((docs) => {
          console.log(docs.data().caption);
          setLoading(false);
          document.push({ post: docs.data(), id: docs.id });
        });
        setPosts(document);
        console.log(posts.length);
      });
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
        posts.map((data) => {
          console.log(data);
          return (
            <Post
              key={data.id}
              id={data.id}
              userName={data.post.userName}
              timestamp={data.post.timestamp}
              photoUrL={data.post.photoUrl}
              imageUrL={data.post.imageUrl}
              caption={data.post.caption}
              // likes={data.post.likes}
            />
          );
        })}
    </Flex>
  );
};

export default PostFeeds;
