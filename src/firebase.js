import firebase from 'firebase';

//AIzaSyBkPJUAYuYzERVwpkNboXpPuGrA88S2PVs
const firebaseConfig = {
  apiKey: 'AIzaSyBkPJUAYuYzERVwpkNboXpPuGrA88S2PVs',
  authDomain: 'my-slack-version.firebaseapp.com',
  projectId: 'my-slack-version',
  storageBucket: 'my-slack-version.appspot.com',
  messagingSenderId: '243822036198',
  appId: '1:243822036198:web:6f94d399283cec7bfce727',
  measurementId: 'G-RKLLRJ2EV3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};
