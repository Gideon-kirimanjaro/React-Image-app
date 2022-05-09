// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9dvZiwS7CLzF5TFKYh34g9TfYctzTdrs",
  authDomain: "imageuploadapp-d3a25.firebaseapp.com",
  databaseURL: "https://imageuploadapp-d3a25-default-rtdb.firebaseio.com",
  projectId: "imageuploadapp-d3a25",
  storageBucket: "imageuploadapp-d3a25.appspot.com",
  messagingSenderId: "665339917628",
  appId: "1:665339917628:web:1508bb804b65c6361cda39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
