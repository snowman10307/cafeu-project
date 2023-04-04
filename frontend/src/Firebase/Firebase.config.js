// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBugNq_Y8UZH0c2JoGiv8GDl-yAc5fiDs",
  authDomain: "cafeu-js.firebaseapp.com",
  projectId: "cafeu-js",
  storageBucket: "cafeu-js.appspot.com",
  messagingSenderId: "638105825440",
  appId: "1:638105825440:web:5313a97d1f16458fc6d9c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;