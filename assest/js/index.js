import { db } from './firebase-config.js';
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const productsContainer = document.getElementById("products");

const loadProducts = async () => {
  const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const product = doc.data();
    const div = document.createElement("div");
    div.innerHTML = `<h3>${product.title}</h3><p>Rs. ${product.price}</p><p>${product.description}</p><hr>`;
    productsContainer.appendChild(div);
  });
};

loadProducts();