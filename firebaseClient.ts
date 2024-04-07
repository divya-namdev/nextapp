// import firebaseClient from "firebase/app";
// import "firebase/auth";

// /*

// Copy/paste your *client-side* Firebase credentials below. 

// To get these, go to the Firebase Console > open your project > Gear Icon >
// Project Settings > General > Your apps. If you haven't created a web app
// already, click the "</>" icon, name your app, and copy/paste the snippet.
// Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
// copy/paste.

// */
// const CLIENT_CONFIG = {
//     apiKey: "AIzaSyBIEiBDNxEo2vm1Rh83DLKqhbUk-yg_JUY",
//     authDomain: "checkssr-6c0ed.firebaseapp.com",
//     projectId: "checkssr-6c0ed",
//     storageBucket: "checkssr-6c0ed.appspot.com",
//     messagingSenderId: "847907968089",
//     appId: "1:847907968089:web:e72fca7d460f31ebfbcd48"
// };

// if (typeof window !== "undefined" ) {
//   firebaseClient.initializeApp(CLIENT_CONFIG);
//   firebaseClient
//     .auth() 
//     .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
//   (window as any).firebase = firebaseClient;
// }

// export { firebaseClient };

// Import the functions you need from the SDKs you need
import { initializeApp, getApps,getApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBIEiBDNxEo2vm1Rh83DLKqhbUk-yg_JUY",
        authDomain: "checkssr-6c0ed.firebaseapp.com",
        projectId: "checkssr-6c0ed",
        storageBucket: "checkssr-6c0ed.appspot.com",
        messagingSenderId: "847907968089",
        appId: "1:847907968089:web:e72fca7d460f31ebfbcd48"
};
  
const app = !getApps().length? initializeApp(firebaseConfig):getApp()
const firebaseClient = getAuth(app)
export {firebaseClient}