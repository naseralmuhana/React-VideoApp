import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore"
import { db } from "../firebase-config"

// Fetch all videos from the database
export const fetchVideos = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "videos"), orderBy("id", "desc"))
  )

  return querySnapshot.docs.map((doc) => doc.data())
}

// fetch the user info
export const getUserInfo = async (userId) => {
  const userRef = doc(db, "users", userId)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    return userSnap.data()
  } else {
    return "No such document!"
  }
}
