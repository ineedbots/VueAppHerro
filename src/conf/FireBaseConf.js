import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyD2---DA_kbOxRQKu7NBGkAM51tH40GmKI",
    authDomain: "vuedev-68a43.firebaseapp.com",
    databaseURL: "https://vuedev-68a43.firebaseio.com",
    projectId: "vuedev-68a43",
    storageBucket: "vuedev-68a43.appspot.com",
    messagingSenderId: "730187861020",
})

firebase.firestore().settings({
    timestampsInSnapshots: true
})
