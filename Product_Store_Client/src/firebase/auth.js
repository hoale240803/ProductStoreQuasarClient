import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvde9KEQ7o3rBLxQTsVHlMwTEiQch4_4w",
  authDomain: "productstore-323709.firebaseapp.com",
  projectId: "productstore-323709",
  storageBucket: "productstore-323709.appspot.com",
  messagingSenderId: "12256232097",
  appId: "1:12256232097:web:09ce0ffa16cf3fdfba66e0",
  measurementId: "G-276Q5DPDLY",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
