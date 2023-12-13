const firebaseConfig = { 
      apiKey: "AIzaSyDVrvlvkfuCvU3D2kIogxRNXLpJx1jD9CQ", 
      authDomain: "kwitter-dhev.firebaseapp.com", 
      databaseURL:"https://kwitter-dhev-default-rtdb.firebaseio.com",
      projectId: "kwitter-dhev", 
      storageBucket: "kwitter-dhev.appspot.com", 
      messagingSenderId: "907459341939",
       appId: "1:907459341939:web:43519fe29a532610a4c406", 
       measurementId: "G-MWLP6KD73V" }

 firebase.initializeApp(firebaseConfig);

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      }
      );
      document.getElementById("msg").value="";
}
function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
