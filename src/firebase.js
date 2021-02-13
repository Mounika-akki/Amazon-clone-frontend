import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBj6qWsCSs9-KTGg9jc-Rh-FT7dBXrPqTU",
  authDomain: "clone-ce356.firebaseapp.com",
  projectId: "clone-ce356",
  storageBucket: "clone-ce356.appspot.com",
  messagingSenderId: "38346441052",
  appId: "1:38346441052:web:725f8e39c2c9573fbd4199",
  measurementId: "G-6CJQMMMLJ6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
