import firebase from 'firebase'
require ('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyA1fQsJNSX5Ksr63JJC8DDzFzWvQQaHHdw",
  authDomain: "storyhub-2082b.firebaseapp.com",
  projectId: "storyhub-2082b",
  storageBucket: "storyhub-2082b.appspot.com",
  messagingSenderId: "216946034763",
  appId: "1:216946034763:web:adc5c7325e9c6e568465ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
