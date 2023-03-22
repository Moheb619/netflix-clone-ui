import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAHl8jxN0xtHOciyftM7KeZpHOVuIoAP6c",
  authDomain: "netflix-clone-ui-2ecab.firebaseapp.com",
  projectId: "netflix-clone-ui-2ecab",
  storageBucket: "netflix-clone-ui-2ecab.appspot.com",
  messagingSenderId: "154416124404",
  appId: "1:154416124404:web:b7b1a4e54dd9a5bf5469a1",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
