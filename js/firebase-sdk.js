import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCO97He6PYkcZWmuSWSH0kWx6zexXwJ2Jg",
  authDomain: "onedash1-d8ded.firebaseapp.com",
  projectId: "onedash1-d8ded",
  storageBucket: "onedash1-d8ded.appspot.com",
  messagingSenderId: "247077759766",
  appId: "1:247077759766:web:2851b70377c8eac06afe37",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const minhaColecao = collection(db, "administrador");

export async function obterDocumentos() {
  const querySnapshot = await getDocs(minhaColecao);
  return querySnapshot;
}

export function adicionarDocumento(colecao, dados) {
  return addDoc(collection(db, colecao), dados);
}
