import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyB2JnbJvQ0chZ-WvQvDYaGG24pVvWNS-_c',
    authDomain: 'chat-7d43e.firebaseapp.com',
    databaseURL: 'https://chat-7d43e.firebaseio.com',
    projectId: 'chat-7d43e',
    storageBucket: 'chat-7d43e.appspot.com',
    messagingSenderId: '11622477468',
    appId: '1:11622477468:web:586a0e302289c825344759'
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
export { fireDb }
