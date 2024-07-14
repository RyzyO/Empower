 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
        import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
        import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6temr9ml0SgnXGDaqBI6LoQQfnrSr2Ro",
  authDomain: "empower-3cd44.firebaseapp.com",
  projectId: "empower-3cd44",
  storageBucket: "empower-3cd44.appspot.com",
  messagingSenderId: "220227272042",
  appId: "1:220227272042:web:99265ec68be4948863b913",
  measurementId: "G-64B7WRQ49R"
};


     const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const database = getDatabase();

        const auth = getAuth(app);
