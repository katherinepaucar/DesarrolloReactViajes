import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBj5uNnGn5ZU5U-HxE6P5obh3od2J38pYI",
  authDomain: "katherine-ps.firebaseapp.com",
  projectId: "katherine-ps",
  storageBucket: "katherine-ps.appspot.com",
  messagingSenderId: "913050735397",
  appId: "1:913050735397:web:9130cb94d5c33e38ac00cc",
  measurementId: "G-D6D35J1Q9L"
  };

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;