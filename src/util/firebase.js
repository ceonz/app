import * as firebase from 'firebase';
import Rebase from 're-base';
require('firebase/firestore');
require('dotenv');

const {
  FIREBASE_apiKey,
  FIREBASE_authDomain,
  FIREBASE_databaseURL,
  FIREBASE_projectId,
  FIREBASE_storageBucket,
  FIREBASE_messagingSenderId
} = process.env;

const config = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: `${FIREBASE_authDomain}`,
  databaseURL: `${FIREBASE_databaseURL}`,
  projectId: `${FIREBASE_projectId}`,
  storageBucket: `${FIREBASE_storageBucket}`,
  messagingSenderId: FIREBASE_messagingSenderId,
};

const app = firebase.initializeApp(config);

console.log(config);

let firestore = app.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const base = Rebase.createClass(firestore);
export default base;