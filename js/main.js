// Initialize Firebase
var config = {
  apiKey: "AIzaSyA371lEjqN2SQOrfMob6hi0iEjly0n1HU4",
  authDomain: "andrechristoga-84efe.firebaseapp.com",
  databaseURL: "https://andrechristoga-84efe.firebaseio.com",
  projectId: "andrechristoga-84efe",
  storageBucket: "andrechristoga-84efe.appspot.com",
  messagingSenderId: "760661944648"
};
firebase.initializeApp(config);
var ref = firebase.database().ref();

$(function() {
    firebase.database().ref('website/content' + '/header').on('value', function(snapshot) {
    	document.getElementById('header').innerHTML = snapshot.val();
    })
    firebase.database().ref('website/content' + '/desc').on('value', function(snapshot) {
    	document.getElementById('desc').innerHTML = snapshot.val();
    })
});