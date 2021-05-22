import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//  web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBDc1Mlkn49xS832fNs8xXOeFOXbsVMsts",
  authDomain: "insta-breeze.firebaseapp.com",
  projectId: "insta-breeze",
  storageBucket: "insta-breeze.appspot.com",
  messagingSenderId: "825928596591",
  appId: "1:825928596591:web:72bfa7a17fa94900d4219a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initializing firebase services
// For authentication :
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// For firstore services
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

// For Firebase storage services
const storage = firebase.storage();

export default auth;

export { firestore, storage, timestamp, provider };
