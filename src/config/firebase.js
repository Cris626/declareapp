import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBd-sYAOY4W-C-J95Lz2tQT2c3wgRMOvzY",
  authDomain: "declare-app-7d7d1.firebaseapp.com",
  databaseURL: "https://declare-app-7d7d1.firebaseio.com",
  projectId: "declare-app-7d7d1",
  storageBucket: "declare-app-7d7d1.appspot.com",
  messagingSenderId: "289585230569",
  appId: "1:289585230569:web:065c859ba80f7dfc33f678",
  measurementId: "G-DD2SQV3466"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();