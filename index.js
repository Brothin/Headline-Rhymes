//Rules button
function Show(id) {
  if (document.getElementById(id).style.display == "none") {
    document.getElementById(id).style.display = "block";
  } else {
    document.getElementById(id).style.display = "none";
  }
}

//Submit Button
function Verify() {
  var userRef = "user";
  var passRef = "password";
  var emailRef = "user@gmail.com";

  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  if (user == userRef || pass == passRef || email == emailRef) {
  } else {
    alert("Invalid Credentials");
  }
}
