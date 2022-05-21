import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCGLfHCa3Zvt07GI2JCM4qR288D8qF0BnU",
  authDomain: "react-video-5e661.firebaseapp.com",
  databaseURL: "https://react-video-5e661-default-rtdb.firebaseio.com",
  projectId: "react-video-5e661",
  storageBucket: "react-video-5e661.appspot.com",
  messagingSenderId: "2630409035",
  appId: "1:2630409035:web:bc9ec75b9a2b08165466ce",
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp)
export const provider = new GoogleAuthProvider()
