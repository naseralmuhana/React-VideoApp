// prettier-ignore
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, where, } from "firebase/firestore"
import { db } from "../firebase-config"

// get all videos from the database
export const getAllVideos = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "videos"), orderBy("id", "desc"))
  )

  return querySnapshot.docs.map((doc) => doc.data())
}

// get videos (based on the same category)
export const getCategoryVideos = async ({ categoryId }) => {
  const videosRef = collection(db, "videos")
  const q = query(
    videosRef,
    where("category", "==", categoryId),
    orderBy("id", "desc")
  )
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data())
}

// get user uploaded videos
export const getUserVideos = async ({ userId }) => {
  const videosRef = collection(db, "videos")
  const q = query(videosRef, where("userId", "==", userId))
  const querySnapshot = await getDocs(q, orderBy("id", "desc"))
  return querySnapshot.docs.map((doc) => doc.data())
}

// get Recommended videos (based on the same category)
export const getRecommendedVideos = async ({ category, videoId }) => {
  const videosRef = collection(db, "videos")
  const q = query(
    videosRef,
    where("category", "==", category),
    where("id", "!=", videoId),
    orderBy("id", "desc")
  )
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data())
}

// get something from database (video details , user info)
export const getInfo = async ({ document, id }) => {
  const docRef = doc(db, document, id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}

// Delete Document
export const deleteInfo = async ({ document = "videos", id }) => {
  await deleteDoc(doc(db, document, id))
}
