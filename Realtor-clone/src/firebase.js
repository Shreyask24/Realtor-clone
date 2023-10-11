// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhQ3cMG8r9GW7XwH7HfbHtSMwH5QyHa7g",
    authDomain: "realtor-clone-df2ca.firebaseapp.com",
    projectId: "realtor-clone-df2ca",
    storageBucket: "realtor-clone-df2ca.appspot.com",
    messagingSenderId: "193042248232",
    appId: "1:193042248232:web:faf78889dc163f59c6fb1d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();