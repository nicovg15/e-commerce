import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD0_tuUVADigOr560d_22ozqnFg17LDFcw",
    authDomain: "acsonsound-d4340.firebaseapp.com",
    databaseURL: "https://acsonsound-d4340.firebaseio.com",
    projectId: "acsonsound-d4340",
    storageBucket: "acsonsound-d4340.appspot.com",
    messagingSenderId: "1096673786412",
    appId: "1:1096673786412:web:45585e0b0ec12464236f89",
    measurementId: "G-P09CJ0C43X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }