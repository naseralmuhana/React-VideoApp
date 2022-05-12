// prettier-ignore
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, } from "firebase/firestore"
import { db } from "../firebase-config"

// Fetch all videos from the database
export const fetchVideos = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "videos"), orderBy("id", "desc"))
  )

  return querySnapshot.docs.map((doc) => doc.data())
}

// fetch the something info from database
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
