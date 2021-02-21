import firebase from './Fire';
import 'firebase/database';

export const storage = firebase.storage();
export  const property =  firebase.database().ref().child("properties");
