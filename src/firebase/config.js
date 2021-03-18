import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAqMwPT_bPKLLPLKewOkTcn519zl2ubOLo",
  authDomain: "test-a413e.firebaseapp.com",
  projectId: "test-a413e",
  storageBucket: "test-a413e.appspot.com",
  messagingSenderId: "237953598904",
  appId: "1:237953598904:web:8282e1a63440d53c843b4d",
  measurementId: "G-ZYFT97LVZ8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };