import firebase from 'firebase/app'

require("firebase/messaging");

//** FIREBASE CONFIGURATION **//
const firebaseConfig = {
    apiKey: "AIzaSyDaHICvpPcz8lnpbJvYzqM1MBdDBqP3M1M",
    messagingSenderId: "162668696792",
    // authDomain: "bech-de-pk.firebaseapp.com",
    // databaseURL: "https://bech-de-pk.firebaseio.com",
    // projectId: "bech-de-pk",
    // storageBucket: "bech-de-pk.appspot.com",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onMessage(function (payload) {
    console.log('Message received. ', payload);
    window.notify(payload.notification.title ,'success') 
});