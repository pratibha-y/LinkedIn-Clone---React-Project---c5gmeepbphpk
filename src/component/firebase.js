import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBBAfmXpZt7y0PmpArU80AbjGJ4aU6F_3w",
    authDomain: "linkedin-clone-657d6.firebaseapp.com",
    projectId: "linkedin-clone-657d6",
    storageBucket: "linkedin-clone-657d6.appspot.com",
    messagingSenderId: "530766057610",
    appId: "1:530766057610:web:12c6b7a116882a5712dd73"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //get the firebase database

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth }
