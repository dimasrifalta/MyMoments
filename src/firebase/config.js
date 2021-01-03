import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyBC-0nm5ymF8vvpGL0Iwe8uIRBEEnzEMZI',
  authDomain: 'my-momentsx.firebaseapp.com',
  projectId: 'my-momentsx',
  storageBucket: 'my-momentsx.appspot.com',
  messagingSenderId: '471431966372',
  appId: '1:471431966372:web:4592e54bedcac775318031',
  measurementId: 'G-YDKTD6EWXT',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
