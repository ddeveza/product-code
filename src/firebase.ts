// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL25phmcaXR9KRwGzo3olKQYB0Avga28o",
  authDomain: "code-assessment-515a2.firebaseapp.com",
  projectId: "code-assessment-515a2",
  storageBucket: "code-assessment-515a2.appspot.com",
  messagingSenderId: "858549801608",
  appId: "1:858549801608:web:5581aa4e09bb9c0adcc53d",
  measurementId: "G-2E6KF01V2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
