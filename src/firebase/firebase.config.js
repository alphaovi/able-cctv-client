// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCr8BdyLrsS1iFUJaAdMHE1wSklgsooiEM",
  authDomain: "burj-al-arab-dbf90.firebaseapp.com",
  projectId: "burj-al-arab-dbf90",
  storageBucket: "burj-al-arab-dbf90.appspot.com",
  messagingSenderId: "604193088738",
  appId: "1:604193088738:web:a43cf5b8f23f1c09f4eabb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;