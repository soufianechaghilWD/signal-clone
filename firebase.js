// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase  from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyD9YKr3wWZPSfHPPyCfC0DNDb6XH4qBPCI",
    authDomain: "signal-clone-450d4.firebaseapp.com",
    projectId: "signal-clone-450d4",
    storageBucket: "signal-clone-450d4.appspot.com",
    messagingSenderId: "621182475473",
    appId: "1:621182475473:web:0942fca5b8ec51330979f0",
    measurementId: "G-1YYF0BYCGH"
};
let app;
if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
}else{
  app = firebase.app()
}
const db = app.firestore()
const auth = firebase.auth()

export { db, auth }