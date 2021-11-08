import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAnXSBhQoCdEz7VrtYECyaLbU29OT0HGJU",
    authDomain: "ecommerce-e5727.firebaseapp.com",
    projectId: "ecommerce-e5727",
    storageBucket: "ecommerce-e5727.appspot.com",
    messagingSenderId: "674521894089",
    appId: "1:674521894089:web:548d5478047b15b5af9118"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();