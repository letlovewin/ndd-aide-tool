import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC20zw-ac0BmCXlg8IfiwcdUdNqJKQsoSA",
  authDomain: "brain-gaze.firebaseapp.com",
  projectId: "brain-gaze",
  storageBucket: "brain-gaze.appspot.com",
  messagingSenderId: "59427742471",
  appId: "1:59427742471:web:169793d2e414bb08545ba2",
  measurementId: "G-PHW8RC7KXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById("btn-ocular-track-start").addEventListener("click", function(){
	webgazer.setGazeListener(function(data, elapsedTime) {
		if (data == null) {
			return;
		}
		var xprediction = data.x; //these x coordinates are relative to the viewport
		var yprediction = data.y; //these y coordinates are relative to the viewport
		console.log(elapsedTime); //elapsed time is based on time since begin was called
	}).begin();
})