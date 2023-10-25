import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbh5f3D_otbUvjRfO-mOvewVS8oPY14pw",
  authDomain: "market-2ce44.firebaseapp.com",
  projectId: "market-2ce44",
  storageBucket: "market-2ce44.appspot.com",
  messagingSenderId: "925518292775",
  appId: "1:925518292775:web:e28136d4c3b0b5c00cab02",
  measurementId: "G-SLNJQTSW6F",
};
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
