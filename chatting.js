const firebaseConfig = {
    apiKey: "AIzaSyDldwg9EPXTouQvRg4pyLN8mxfOzKxpGjM",
    authDomain: "infinity-5f7bd.firebaseapp.com",
    projectId: "infinity-5f7bd",
    storageBucket: "infinity-5f7bd.appspot.com",
    messagingSenderId: "554148349153",
    appId: "1:554148349153:web:a557b96c18c49fcc72e3a0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });

        localStorage.setItem("room_name", room_name);
        window.location = "chatting_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}
