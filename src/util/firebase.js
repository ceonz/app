import firebase from 'firebase/app';
import Rebase from 're-base';
require('firebase/firestore');
require('dotenv').config();

const {
  FIREBASE_apiKey,
  FIREBASE_authDomain,
  FIREBASE_databaseURL,
  FIREBASE_projectId,
  FIREBASE_storageBucket,
  FIREBASE_messagingSenderId,
} = process.env;

const config = {
  apiKey: FIREBASE_apiKey,
  authDomain: FIREBASE_authDomain,
  databaseURL: FIREBASE_databaseURL,
  projectId: FIREBASE_projectId,
  storageBucket: FIREBASE_storageBucket,
  messagingSenderId: FIREBASE_messagingSenderId,
};

console.log(config)

const settings = { timestampsInSnapshots: true };

const app = firebase.initializeApp(config);
let firestore = app.firestore();
firestore.settings(settings);

const base = Rebase.createClass(firestore);

export default base;