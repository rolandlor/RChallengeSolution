var users;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    users = JSON.parse(this.responseText);
  }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", false);
xhttp.send();

  export default users;