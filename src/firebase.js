// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore

const firebaseConfig = {
  apiKey: 'AIzaSyBhQlR8pedVYXNkfTW__Nza6ug9tIkm6HM',
  authDomain: 'messaging-app-mern-hugo.firebaseapp.com',
  projectId: 'messaging-app-mern-hugo',
  storageBucket: 'messaging-app-mern-hugo.appspot.com',
  messagingSenderId: '235568182352',
  appId: '1:235568182352:web:1d7b5738d3a2e3d6e00d55',
  measurementId: 'G-M4J4JLGY6Z',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
