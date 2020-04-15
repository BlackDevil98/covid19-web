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
var lat, long, k;

const dbRefObject = firebase.database().ref().child('Location');
var size = 0;
var output = "";
getdata = () => {
  dbRefObject.on('value', snap => {
    console.log(snap.val())

    if (snap.val() == null) {
      output = `
      <div class="col-md-4">
      <h3>Data not found</h3>
      </div>
      `;
      document.getElementById("output").innerHTML = output;
    }
    else {

      var datas = snap.val();
      var keys = Object.keys(datas);

      for (var i = 0; i < keys.length; i++) {
        k = keys[i];
        lat = datas[k].lat;
        long = datas[k].long;

        output += `
        <div class="col-sm" style="margin: 2%;">
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${datas[k].name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${datas[k].address}</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Food Packets : ${datas[k].packets}</li>
    <li class="list-group-item">Number : ${datas[k].number}</li>
    <li class="list-group-item">lat, long : ${datas[k].lat} , ${datas[k].long}</li>
    <li class="list-group-item">${k}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link" onclick="delete_row()">Packets Accept</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</div>
    `;

        document.getElementById("output").innerHTML = output;
      }
    }
  });

}
getdata();

// deletedata = () => {
//   let userRef = firebase.database.ref().child('Location').child(k);
//     userRef.remove()
// };

// var deletekey;



function delete_row() {
  let deleteid = prompt('Enter Order id..');
  firebase.database().ref().child('Location').child(deleteid).remove();
}


// const dbRefObject = firebase.database().ref().child('Location');

// dbRefObject.on('value',snap => {
//   // console.log(snap.val());
//   var datas = snap.val();
//   var keys = Object.keys(datas);
//   // console.log(keys);
//   size = keys.length;
//   for(var i=0; i< keys.length;i++){
//     var k = keys[i];
//     lati = datas[k].lat;
//     long = datas[k].long;
//     var marks = "{lat: "+parseFloat(lat)+","+"long: "+parseFloat(long)+"}";
//     size++;
//     console.log(marks);
//   }  
// });