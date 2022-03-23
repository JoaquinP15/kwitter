
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAaeyIdv9AumaWPZqM6PdWW4_1BHpgxTAw",
      authDomain: "kwitter-9b5f4.firebaseapp.com",
      databaseURL: "https://kwitter-9b5f4-default-rtdb.firebaseio.com",
      projectId: "kwitter-9b5f4",
      storageBucket: "kwitter-9b5f4.appspot.com",
      messagingSenderId: "491485700736",
      appId: "1:491485700736:web:831eb3e5e611cd1a91fc65"
    };
    
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

function addroom()
{
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose:"adding roomname",
     });
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-" + Room_names);
row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 function redirectToRoomName(name)
 {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
 }

 function logout()
 {
       localStorage.removeItem("username");
       localStorage.removeItem("room_name");

       window.location = "index.html";
 }