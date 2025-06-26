import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPftk2e1bOQ3CL_KBfEsCHhlBqzzEdmMw",
  authDomain: "zentech-622cf.firebaseapp.com",
  projectId: "zentech-622cf",
  storageBucket: "zentech-622cf.firebasestorage.app",
  messagingSenderId: "916474718097",
  appId: "1:916474718097:web:f8461ad1403030845bdc30",
  measurementId: "G-FVMC4CEQSF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);