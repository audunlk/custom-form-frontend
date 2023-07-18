// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpAruyaN5Dprrgf8bikDwI4LnYTZabw8s",
  authDomain: "form-auth-8127d.firebaseapp.com",
  projectId: "form-auth-8127d",
  storageBucket: "form-auth-8127d.appspot.com",
  messagingSenderId: "358113950595",
  appId: "1:358113950595:web:fde290d988b9a0486b14b6",
  measurementId: "G-TVLBH0V7E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth, app }