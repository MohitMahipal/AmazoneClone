import { initializeApp } from 'firebase/app';
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged,signOut } from "firebase/auth";
import { getFirestore,doc,setDoc,collection, getDocs ,query, orderBy} from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGxRAu2UCqIQwEe3w--QiUr8biZ8-O8DM",
  authDomain: "clone-3789a.firebaseapp.com",
  projectId: "clone-3789a",
  storageBucket: "clone-3789a.appspot.com",
  messagingSenderId: "717988183553",
  appId: "1:717988183553:web:db2f1b41cf6aff96128a00",
  measurementId: "G-5V9DR6WC4C"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged ,signOut,doc,setDoc,collection, getDocs,query, orderBy };