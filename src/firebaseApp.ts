import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAdoKBxPzrsDkCP2__vdZvah6te5NlKHWk",
  authDomain: "jabetestprojekt.firebaseapp.com",
  databaseURL: "https://jabetestprojekt.firebaseio.com",
  projectId: "jabetestprojekt",
  storageBucket: "jabetestprojekt.appspot.com",
  messagingSenderId: "1023696517083"
};

let app = firebase.initializeApp(config);
const db = app.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;
