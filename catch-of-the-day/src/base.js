import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB4659XYmgA0jd9KmpI5tB2qK14SD3FKVs',
  authDomain: 'stevencatchoftheday.firebaseapp.com',
  databaseURL: 'https://stevencatchoftheday.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
