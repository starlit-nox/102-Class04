

function login() {
    confirm("You're already at home.")
  }

  function signup() {
    confirm("Sign ups aren't open right now. Check again later.")
  }

function Home() {
  confirm("You're already at home.")
}

function People() {
    confirm("Private. Please login to view.")
  }

  function Groups() {
    confirm("Private. Please login to view.")
  }

  function Contact() {
    confirm("Please don't.")
  }

  function signupPage() {
    location.replace("https://www.https://mock-website.scandinavian-cl.repl.co/.com")
  }

  function signUp() {
    if (document.getElementById("password2").value == document.getElementById("cfmpassword2").value) {
        var users = new Object();
        users.firstName = document.getElementById("firstName").value;
        users.lastName = document.getElementById("lastName").value;
        users.username2 = document.getElementById("username2").value;
        users.email = document.getElementById("email").value;
        users.password2 = document.getElementById("password2").value;


        var postUser = new XMLHttpRequest(); // new HttpRequest instance to send user details

        postUser.open("POST", "/users", true); //Use the HTTP POST method to send data to server

        postUser.setRequestHeader("Content-Type", "application/json");

        // Convert the data in "users" object to JSON format before sending to the server.
        postUser.send(JSON.stringify(users));
    }
    else {
        alert("Password column and Confirm Password column doesn't match!")
    }
}