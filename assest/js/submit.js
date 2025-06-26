import { db, auth } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("You must be logged in to submit a product.");
    window.location.href = "login.html";
  }
});

document.getElementById("submitForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;

  try {
    await addDoc(collection(db, "products"), {
      title,
      price,
      description,
      createdAt: serverTimestamp()
    });
    alert("✅ Product added successfully!");
    window.location.href = "index.html";
  } catch (error) {
    alert("❌ Failed to submit product: " + error.message);
  }
});