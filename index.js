function updateTicker() {
  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();
  var location = "Unknown";
  
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          
          // You can use the lat and lng values to get the location
          // using a reverse geocoding API
          location = "Latitude: " + lat + ", Longitude: " + lng;
          
          document.getElementById("location").innerHTML = location;
      });
  }
  document.getElementById("date").innerHTML = date;
  document.getElementById("time").innerHTML = time;
}
// Update the ticker every second
setInterval(updateTicker, 1000);


var menuItems = document.querySelectorAll('#menu li a');
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    // Remove the active class from all menu items
    for (var j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove('active');
    }
    // Add the active class to the clicked menu item
    this.classList.add('active');
  });
}

function cb(response) {
  document.getElementById('visits').innerText = response.value;
}
