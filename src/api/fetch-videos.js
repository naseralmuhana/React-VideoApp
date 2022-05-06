import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../firebase-config"

export const fetchVideos = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "videos"), orderBy("id", "desc"))
  )

  return querySnapshot.docs.map((doc) => doc.data())
}
