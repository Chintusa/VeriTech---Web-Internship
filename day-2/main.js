// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyAKYcvW1Ip9ceHEy46NNlrKVvoRzwpDLO4",
  authDomain: "final-alambana.firebaseapp.com",
  databaseURL: "https://final-alambana-default-rtdb.firebaseio.com",
  projectId: "final-alambana",
  storageBucket: "final-alambana.appspot.com",
      messagingSenderId: "361090802828",
      appId: "1:361090802828:web:aaac21bf1d18040da547a9",

  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}