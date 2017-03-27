import firebase from 'firebase';

const config = {
  apiKey: 'your_api_key',
  authDomain: 'lunchpad-3b4af.firebaseio.com',
  databaseURL: 'https://lunchpad-3b4af.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;