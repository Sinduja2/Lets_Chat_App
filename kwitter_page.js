var firebaseConfig = { apiKey: "AIzaSyCLGpxZs2pD9mqZCrFwuOI0gYPdRWN5Ksw", authDomain: "kwitter-6abca.firebaseapp.com", databaseURL: "https://kwitter-6abca-default-rtdb.firebaseio.com", projectId: "kwitter-6abca", storageBucket: "kwitter-6abca.appspot.com", messagingSenderId: "231606977400", appId: "1:231606977400:web:d2d2878892c4b97584fe8d" }; firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({name:user_name,message:msg,like:0});
    document.getElementById("msg").value="";
}