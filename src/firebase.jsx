import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {

    //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    //   appId: process.env.REACT_APP_FIREBASE_APP_ID,  
    //   measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

    apiKey: "AIzaSyBeqKXdmYuDFVq1_xJ5651IjU0oNVoLMF0",
    authDomain: "property-webproject.firebaseapp.com",
    projectId: "property-webproject",
    storageBucket: "property-webproject.appspot.com",
    messagingSenderId: "978588535455",
    appId: "1:978588535455:web:0383cfbbfa240c411a30aa",
    measurementId: "G-SSNCMR3DFY"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// signInWithPopup
const GoogleProvider = new GoogleAuthProvider();
console.log(auth);

export { auth , GoogleProvider };

export default app;
