import "./styles.css";
import { useContext, useState } from "react";
import { SignInBtn } from "../../comps";
import { AppContext } from "../../context/context";
import { Button, Textarea } from "@chakra-ui/react";
import { RiGalleryFill } from "react-icons/ri";
import { Flex, Spacer } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";
import { firestore, storage, timestamp } from "../../services/firebaseConfig";
import generateID from "../../helpers/functions";
import { useMediaQuery } from "@chakra-ui/react";

const Createpost = () => {
  const user = useContext(AppContext).user[0];

  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(null);
  const [image_upload, setImage_upload] = useState(null);
  const image_prev = document.getElementById("image-prev");

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handle_image_upload = (e) => {
    if (e.target.files[0]) {
      image_prev.src = URL.createObjectURL(e.target.files[0]);
      setImage_upload(e.target.files[0]);
      image_prev.style.display = "block";
    }
  };
  const uploadPost = async () => {
    const img_id = generateID(10);
    const storageRef = storage.ref(`images/${img_id}`);
    if (image_upload) {
      storageRef.put(image_upload).on(
        "state_changed",
        (snapshot) => {
          setProgress(
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          );
        },
        (error) => alert(error.message),
        async () => {
          let image_url = await storageRef.getDownloadURL();
          let data = {
            userId: user.uid,
            userName: user.displayName,
            photoUrl: user.photoURL,
            imageUrl: image_url,
            caption: caption,
            timestamp: timestamp,
            likes: 0,
            comments: [],
          };
          firestore.collection("posts").add(data).then(clearPostContainer);
        }
      );
    } else {
      let data = {
        userId: user.uid,
        userName: user.displayName,
        photoUrl: user.photoURL,
        caption: caption,
        timestamp: timestamp,
        likes: 0,
        comments: [],
      };
      firestore.collection("posts").add(data).then(clearPostContainer);
    }
  };

  function clearPostContainer() {
    image_prev.src = "";
    image_prev.style.display = "none";
    setProgress(null);
    setCaption("");
  }

  // For responsiveness
  const [isLargerThan600, isLessThan450] = useMediaQuery([
    "(min-width:600px)",
    "(max-width:450px)",
  ]);

  const getContainerWidth = () => {
    if (isLargerThan600) {
      return "65vw";
    }
    if (isLessThan450) {
      return "85vw";
    } else {
      return "75vw";
    }
  };

  return (
    <Flex
      margin="2rem 0rem"
      className="create__post"
      borderRadius="10px"
      bg="#fafafa"
      maxWidth={getContainerWidth()}
    >
      {user ? (
        <Flex
          padding="10px"
          flexDirection="column"
          width="700px"
          flexWrap="nowrap"
        >
          <h4
            style={{
              fontFamily: "Merriweather,sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            Create a Post
          </h4>
          <Spacer />
          <Textarea
            value={caption}
            onChange={handleCaptionChange}
            border="none"
            focusBorderColor="#fafafafa"
            height="22vh"
            marginBottom="14px"
            placeholder="Write your caption here..."
          />
          <img id="image-prev" alt="img-prev" />
          <Flex justifyContent="space-between" flexWrap="nowrap" color="purple">
            <label htmlFor="fileInput">
              <RiGalleryFill cursor="pointer" fontSize="2rem" />
            </label>
            <input type="file" onChange={handle_image_upload} id="fileInput" />
            <Button
              isLoading={progress ? true : false}
              onClick={uploadPost}
              variant="outline"
              height="2rem"
              fontSize="1rem"
              colorScheme="purple"
              leftIcon={<FaUpload />}
            >
              Post {progress && progress}
            </Button>
          </Flex>
        </Flex>
      ) : (
        <SignInBtn />
      )}
    </Flex>
  );
};

export default Createpost;
