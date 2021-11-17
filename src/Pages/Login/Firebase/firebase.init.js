import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initailizeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initailizeFirebase;