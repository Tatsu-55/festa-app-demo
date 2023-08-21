import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getApp, getApps } from 'firebase/app';

export const firebaseConfig = {
  
  apiKey: "AIzaSyCK-UiRmNhj2umU9VmaUREV2hkPUGh13dI",
  authDomain: "festa-app-voting-system.firebaseapp.com",
  projectId: "festa-app-voting-system",
  storageBucket: "festa-app-voting-system.appspot.com",
  messagingSenderId: "471875150213",
  appId: "1:471875150213:web:5f42dc02d511a26b3864ec",
  measurementId: "G-KHC339WWT2"
};




// Initialize Firebase
 const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
 const db = getFirestore(app);
 const firebaseAuth = getAuth(app)

export { app, db, firebaseAuth };