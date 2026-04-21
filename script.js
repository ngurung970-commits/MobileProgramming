import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIaa8AOeRtHrTQappPAlLoYwHL06SHwAs",
  authDomain: "myapp-4b932.firebaseapp.com",
  databaseURL: "https://myapp-4b932-default-rtdb.firebaseio.com",
  projectId: "myapp-4b932",
  storageBucket: "myapp-4b932.firebasestorage.app",
  messagingSenderId: "174828203725",
  appId: "1:174828203725:web:0c03bd322d9a3a674f8384"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values
  const id = document.getElementById("id").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Save data to Firebase
  set(ref(db, "users/" + id), {
    firstName: firstName,
    lastName: lastName,
    address: address,
    phone: phone,
    message: message
  })
  .then(() => {
    alert("Data saved successfully!");
    document.getElementById("userForm").reset();
  })
  .catch((error) => {
    alert("Error: " + error);
  });

});


