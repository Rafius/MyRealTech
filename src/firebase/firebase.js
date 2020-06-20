import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyDxkL-8q1Na9xEH2QwUxdQYGkGP2G6dyJU",
	authDomain: "myrealfood-ec381.firebaseapp.com",
	databaseURL: "https://myrealfood-ec381.firebaseio.com",
	projectId: "myrealfood-ec381",
	storageBucket: "myrealfood-ec381.appspot.com",
	messagingSenderId: "497807321358",
	appId: "1:497807321358:web:3be9fb5884e32bf32c0f5f",
	measurementId: "G-CW029RY1EG"
}

firebase.initializeApp(firebaseConfig)

export default firebase
