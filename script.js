let myname = '';

function whodat() {
    myname = prompt("Are you a robot? Yes or no");
    let name = (myname);
    if(myname != 'No'){
        alert('Confirmed');
    } else{
      location.replace("https://crazyballadventure.github.io/mock-website/")
    }
    }


whodat();


function userLogin() {
  location.replace("https://crazyballadventure.github.io/mock-website/")
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
    confirm("Please don't. Have a problem? Too bad.")
  }

function signUp() {
  if (document.getElementById("password2").value == document.getElementById("cfmpassword2").value) {
      var users = new Object();
      users.firstName = document.getElementById("firstName").value;
      users.lastName = document.getElementById("lastName").value;
      users.username2 = document.getElementById("username2").value;
      users.password2 = document.getElementById("password2").value;


      var postUser = new XMLHttpRequest(); // new HttpRequest instance to send user details

      postUser.open('GET', "https://crazyballadventure.github.io/mock-website/"); //Use the HTTP POST method to send data to server

      postUser.setRequestHeader("Content-Type", "application/json");

      // Convert the data in "users" object to JSON format before sending to the server.
      postUser.send();
  }
  else {
      alert("Password and Confirm Password doesn't match!")
  }
}


let userAns = "";

function rating(){
  let userAns = prompt("How would you rate my webpage 1-5?");
  for(let x = 0; x < userAns; x++){
    document.getElementById("thisPar").innerHTML += "<img src = https://cdn.discordapp.com/attachments/1069674123128733858/1075153523710361652/image.png>"
  }
}