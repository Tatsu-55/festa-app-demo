import { db } from "./firebase";
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Firestoreの新しいAPIをインポート

export async function getLastRunDate(uid) {
  const userDocRef = doc(db, 'users', uid); // 'users' コレクション内の uid に対応するドキュメントを参照
  const userDocSnapshot = await getDoc(userDocRef);
  return userDocSnapshot.exists() ? userDocSnapshot.data().lastRunDate : null;
}

export async function setLastRunDate(uid, date) {
  const userDocRef = doc(db, 'users', uid); // 'users' コレクション内の uid に対応するドキュメントを参照
  await setDoc(userDocRef, { lastRunDate: date }); // ドキュメントにデータを設定
}

