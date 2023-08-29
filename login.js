var password="trustme";
var username="ludwig";

function usercheck() {
    if(document.getElementById("pass").value != password) {
        alert("Wrong username or password! Try again.");
        return false;
    }
    if(document.getElementById("user").value != username) {
        alert("Wrong username or password! Try again.");
        return false;
    }
    if(document.getElementById("pass").value == password) {
        if(document.getElementById("user").value == username) {
            return true;
        }
    }
}