import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, CollectionReference, getDocs as getDocsFirebase } from "firebase/firestore";

export const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
})

const firebaseDb = getFirestore(app)

export const firebaseHelpers = {
  getDb: () => firebaseDb,
  getCollection: (collectionName: string) => {
    return collection(firebaseDb, collectionName)
  },
  getDocs: async (collectionRef: CollectionReference) => {
    try {
      const snapshot = await getDocsFirebase(collectionRef)

      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      console.error('Error getting documents:', error)
      throw error
    }
  }
}

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const signinPopup = signInWithPopup
export const firestore = getFirestore
export const signout = signOut