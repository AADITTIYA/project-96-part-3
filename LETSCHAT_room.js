user_name = localStorage.getItem("user_name");
document.getElementById("user-name").innerHTML = "Wellcome - " + user_name;

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "Adding_Room_Name",
          name:"AADITTIYA",
          age:13
    });

    localStorage.setItem("room_name",room_name);
    window.location = "LETSCHAT_page.html";
}

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("room name - " + Room_names);
       row = '<div class="room_name" id=' + Room_names + ' onclick="redirectToRoom_Name(this.id)">#' + Room_names + '</div> <hr>';
       document.getElementById("output").innerHTML += row;
      });});}
      getData();
      


function redirectToRoom_Name(name){
      console.log(name);
localStorage.setItem("room_name",room_name);
window.location = "LETSCHAT_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
}
