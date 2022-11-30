import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC4SqQJ3yDTFHwseaZz8xELhiOMPBRuN0I",
	authDomain: "clone-ec463.firebaseapp.com",
	projectId: "clone-ec463",
	storageBucket: "clone-ec463.appspot.com",
	messagingSenderId: "755315694202",
	appId: "1:755315694202:web:8d1a7ade5b685be9bdf9c3",
	measurementId: "G-K754CDLPWZ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };

// const formatPrice = (price) => {
// 	let formattedPrice = new Intl.NumberFormat("en-US", {
// 		style: "currency",
// 		currency: "ETB",
// 	}).format(price.toFixed(2));
// 	return formattedPrice;
// };

// npm install @mui/material @emotion/react @emotion/styled
//   npm install @mui/icons-material

//   npm i react-bootstrap
//   npm install firebase
//   npm i @stripe/stripe-js
//   npm i @stripe/react-stripe-js
//   npm i moment
//   npm i axios
//   npm install react-currency-format

// backend

// npm i express
// npm i cors
// npm i stripe

// firebase functions:log
