import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const intializeFirebase = () => {
    initializeApp(firebaseConfig);
};

export default intializeFirebase;