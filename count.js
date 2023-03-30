var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      var count = xhr.responseText;
      document.getElementById("count").innerHTML = count;
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.open("GET", "get-visitor-count.php", true);
xhr.send();