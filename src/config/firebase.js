import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD4cuphmH3PoMI0vEie0avKrNpm8LIbllI",
    authDomain: "file-management-system-d49c6.firebaseapp.com",
    projectId: "file-management-system-d49c6",
    storageBucket: "file-management-system-d49c6.appspot.com",
    messagingSenderId: "621512684713",
    appId: "1:621512684713:web:5bc54c6be51269bf2165b8"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;