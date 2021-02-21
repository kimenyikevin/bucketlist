import firebase from 'firebase';
const DB_CONFIG ={
    apiKey: "AIzaSyDz3Z8rtnf3_0dw_2uKuLQ7-GS-rqcZrds",
    authDomain: "quickhousefrontend.firebaseapp.com",
    databaseURL: "https://quickhousefrontend.firebaseio.com",
    storageBucket: "gs://quickhousefrontend.appspot.com"
  }
firebase.initializeApp(DB_CONFIG)
export default firebase;