import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBJ_78iyU_6zqGYubLvbCiV4pFs00xGr8U",
    authDomain: "davila-react.firebaseapp.com",
    projectId: "davila-react",
    storageBucket: "davila-react.appspot.com",
    messagingSenderId: "148297575220",
    appId: "1:148297575220:web:7428925c48f3a7a3509361",
    measurementId: "G-6BC37WJHMJ"

};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();

