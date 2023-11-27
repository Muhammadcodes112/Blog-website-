  // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyAafTyZzM-UyhMlcAVNrj1p9C2wMKy806Q",
//     authDomain: "blogging-website-b3cc9.firebaseapp.com",
//     projectId: "blogging-website-b3cc9",
//     storageBucket: "blogging-website-b3cc9.appspot.com",
//     messagingSenderId: "277549331860",
//     appId: "1:277549331860:web:1aa22d3036456069780b81"
//   };

//   // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);


//   var db = firebase.firestore();




// firebase.js
import 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAafTyZzM-UyhMlcAVNrj1p9C2wMKy806Q",
    authDomain: "blogging-website-b3cc9.firebaseapp.com",
    projectId: "blogging-website-b3cc9",
    storageBucket: "blogging-website-b3cc9.appspot.com",
    messagingSenderId: "277549331860",
    appId: "1:277549331860:web:1aa22d3036456069780b81"
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);


// Access Firestore using the exported variable
var db = firebase.firestore();

export { db };
