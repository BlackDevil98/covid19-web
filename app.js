
const firebaseConfig = {
    apiKey: "AIzaSyDdm4RC8P6kJY2YcklArvO9FN-UGOaW2TQ",
    authDomain: "covid-19-dd547.firebaseapp.com",
    databaseURL: "https://covid-19-dd547.firebaseio.com",
    projectId: "covid-19-dd547",
    storageBucket: "covid-19-dd547.appspot.com",
    messagingSenderId: "344346306509",
    appId: "1:344346306509:web:323bd66ebc26537488c684",
    measurementId: "G-Z7MHS2M75D"
  };
  firebase.initializeApp(firebaseConfig);

const preObject = document.getElementById('Location');

const dbRefObject = firebase.database().ref().child('Location');
var size=0;

dbRefObject.on('value',snap => {
  // console.log(snap.val());
  var datas = snap.val();
  var keys = Object.keys(datas);
  // console.log(keys);
  size = keys.length;
  for(var i=0; i< keys.length;i++){
    var k = keys[i];
    var lat = datas[k].lat;
    var long = datas[k].long;
    var marks = "{lat: "+parseFloat(lat)+","+"long: "+parseFloat(long)+"}";
    size++;
    console.log(marks);
  }
  
}); 

console.log(lat+long);

var map;
function initMap(){

map = new google.maps.Map(
    document.getElementById("googleMap"),{
    zoom:13,
    center: {lat: 22.1723, lng: 71.6636},
    });

marker = new google.maps.Marker({
    position: {lat: 22.1723, lng: 71.6636},
    map: map,
});
}

