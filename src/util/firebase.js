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

// const config = {
//   apiKey: process.env.FIREBASE_apiKey,
//   authDomain: `${FIREBASE_authDomain}`,
//   databaseURL: `${FIREBASE_databaseURL}`,
//   projectId: `${FIREBASE_projectId}`,
//   storageBucket: `${FIREBASE_storageBucket}`,
//   messagingSenderId: FIREBASE_messagingSenderId,
// };

const config = {
  apiKey: 'AIzaSyDJe7lGdPHpLj8pEKucpyE3mwRl8rs1FXQ',
  authDomain: 'disaster-relief-dev.firebaseapp.com',
  databaseURL: 'https://disaster-relief-dev.firebaseio.com',
  projectId: 'disaster-relief-dev',
  storageBucket: 'disaster-relief-dev.appspot.com',
  messagingSenderId: '852094467386',
};

const app = firebase.initializeApp(config);

console.log(config);

let firestore = app.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const base = Rebase.createClass(firestore);
export default base;