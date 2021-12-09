user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send_message(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    console.log(msg);
    document.getElementById("message").value =" ";
    }
 

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
