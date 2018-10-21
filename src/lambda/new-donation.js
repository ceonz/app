// require('dotenv').config();
// // const firebase = require('firebase/app');
// // require('firebase/firestore');

// const {
//   FIREBASE_apiKey,
//   FIREBASE_authDomain,
//   FIREBASE_databaseURL,
//   FIREBASE_projectId,
//   FIREBASE_storageBucket,
//   FIREBASE_messagingSenderId,
// } = process.env;

const admin = require('firebase-admin');

var serviceAccount = {
  type: 'service_account',
  project_id: 'disaster-relief-dev',
  private_key_id: 'ca5b3c5a9f4d67bb9e263a487fb934ac926b1d9a',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCEXtBflTmYmIml\nzCAWcYg5gpQZjPhG/zueHamncl1ogWJ+7HSgZ5xWOHzMjRHGs0w66VuHDex3a10F\nD/vK9Ty+rsxKonSEGaEi/dFq2G6vKcavbSOuyoERojbS3ghEfJKQ2QolCrPuT593\nDvdfA70MgGqfyXPXO4ZLgjh7fwbb3wzIoKUIPABhkFPGXngJBoAMJ7r+VuWrXXfe\nQEg9w3nWgc1FrQVC4EA7g9clOFKev2dpe2W/0PrN5/42WCwSAnVt9LyTsxXbJPsZ\n6YN5RgpYT8DqvC9G+ZfXltgCX0+/U4bBltyxQX9IECk7IWTbQ0eTt8BhqkaNkMEa\nsmarYBhRAgMBAAECggEAA148ffcggtyMQZPL4/hN8Z0sBqmoqllNl3qMneAuBmYG\n5yD9/3QddS/tJIEJKRG4PIZCLAG/oOMCaBnh07ZpXhZ5aCOBtJgImqjj0Iy65cH5\nzk5IDnc0gSnsDFHmGtSC3/TG0l4XKZbc8VEIHDK+l2Qn2mKcTAdlpZOV23YWKwdk\nuBiVwP7OMUPiK3655xhLfUz4lQ52HHCUUArIJ9LoAEoklv+j/Q1Vc3hHQC7pTXlf\nYjcNjKO5IXgcTEz03ONPUO9dDZxTRJRdYERPfBLohotB4LEBA7veiUGwLIXBhJr8\nPAUiQ64lxWOpF3gb3eA55nYb1CH3rYsr8+dJp2/w4QKBgQC4kWLqhKCoIsOf6+HF\niyHQGe4SIg82CFOfA9J4Wcrs2UD+QcFMAh4XzdX8O0TYHCWFK34G6OrxjjEZNevM\nrFAdlwoc10gDRNHpAJ4W9mDrz74soQLxe+ci0weLcV6qcMvjzvcN90zv2n7IdM4f\nNywKGSrcEbusCclh5HUc8HDXoQKBgQC3mcz21/5zJeOsSFhFj2l1Fhs+JHSQcKVZ\nrwlBrcAkB64JIPUyG9rr9o1/CiBidEwNlARpLpKid9ruHHfmVY92nGiJ9a4D6YBC\ndyRVkZAQnmHd1Kpd1RGNVzHJ8Ey3juklCxx/L1U8XBsunLXf6MGj+vxND3n1mM4U\nSxwSSRPCsQKBgQCsV7XR3v5VggDBd/VeDMkKFOxlKkCh56yNs3f4wX/nIga6ZJQm\ncWPAPogt+voSAlZWv4Hy2dNos6nNLLh+afh1aPAcdjncM4r+04DLWEywZU/jRIYH\nD/eIYR2Oa9JFvQXmNwAinmXNIm14qPk/1LjexRlsXXKs9oaBTl69Ixd7gQKBgA2C\n9RGJbcFdnXa1UEG2PyWNve2B00457AFAn2bE+antIsKrOUA5yo+o8lrSDPYR5vLs\n3LI86i+osGTrlWtPCqLI+eyFNww0p+q8R+FAOCDw9vTTTMJhBsynCRP6ajrr+n5u\nZed6PUSW5q00fTIAOBfwRZcKN4h6eVgG+wbhd+HRAoGBALW6h/sYkje77cLH65Kq\nd+ImdBPeP/dJPmghmoi6goER/g+vlAVgaWfp0C6UPxERw71YqCkD8bY+qM0lj9gG\n50xOAMtcZzKr2NKXt6cwzTMlYvDk7kaJiI2HzgxsNkHOZJR2jkMSHnzHK8TAJ1ul\nFbk7sKccmO33UVKeE/ISmpqi\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-wggjm@disaster-relief-dev.iam.gserviceaccount.com',
  client_id: '100184758163430676489',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wggjm%40disaster-relief-dev.iam.gserviceaccount.com',
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const settings = { timestampsInSnapshots: true };
var db = admin.firestore();
db.settings(settings);

// const app = firebase.initializeApp(config);
// let firestore = app.firestore();
// firestore.settings(settings);

// const base = Rebase.createClass(firestore);

export function handler(event, context, callback) {

  //console.log(config);

  var addDonation = db.collection('donations').add({
    donation_amount: 12.56,
    merchant_name: 'Jack Rogers USA',
    donation_date: '',
    fund_id: '123abc',
  }).then(ref => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: `Added document with ID: ${ref.id}`})
    });
    console.log('Added document with ID: ', ref.id);
  });

  // firebase.initializeApp(config);
  // let db = firebase.firestore;

  // const body = JSON.parse(event.body).payload;

  //const { amount, fundId, merchantId } = event.queryStringParameters;


  // Add a new document in collection "cities" with ID 'LA'
  // var addDonation = db
  //   .collection('donations')
  //   .add({ amount, fundId, merchantId })
  //   .then(ref => {
  //     console.log('Added document with ID: ', ref.id);
  //   });

  // const newPostKey = db
  //   .ref()
  //   .child(`donations`)
  //   .push().key;


  // db.ref(`donations/${newPostKey}`).set(
  //   {
  //     amount,
  //     fundId,
  //     merchantId,
  //   },
  //   error => {
  //     if (error) {
  //       console.log('failed');
  //       return callback(null, {
  //         statusCode: error.status,
  //         body: JSON.stringify({
  //           message: error.message,
  //           error: error,
  //         }),
  //       });
  //     }
  //     console.log('saved');
  //     return callback(null, {
  //       statusCode: 200,
  //       body: 'Beep, boop, you just got serverless.',
  //     });
  //   }
  // );
}