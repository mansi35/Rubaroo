import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUIB-7E78dC-nPQiIumn4pRY29Y_CtLTA",
    authDomain: "rubaroo-968a3.firebaseapp.com",
    projectId: "rubaroo-968a3",
    storageBucket: "rubaroo-968a3.appspot.com",
    messagingSenderId: "884444368357",
    appId: "1:884444368357:web:7e339a9bc47a74754b330c",
    measurementId: "G-FFV18YD32M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
