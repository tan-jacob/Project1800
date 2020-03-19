//---------------------------------------------------------------------
// Your web app's Firebase configuration (9 lines of code)
// Replace the configuration with YOUR project's API information
// copied from the firebase console (settings) of your project.
//---------------------------------------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAFnaMK8hl5_eE5gmevP_aBM2MMTePs6uI",
    authDomain: "comp1800.firebaseapp.com",
    databaseURL: "https://comp1800.firebaseio.com/",
    projectId: "comp1800",
    storageBucket: "comp1800.appspot.com",
    messagingSenderId: "862084023488",
    appId: "1:862084023488:web:5ab3d8be1b36f27235d925",
};
//------------------------------------------------
// Initialize Firebase and Firestore reference
// Do not delete!
//------------------------------------------------
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();