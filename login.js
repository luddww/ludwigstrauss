function usercheck() {
    if (document.getElementById("user").value == "ludwig") {
        if (document.getElementById("pass").value != "asdfghjkl") {
            alert("Wrong username or password! Try again.");
            return false;
        }
        if (document.getElementById("pass").value == "trustme") {
            return true;
        }
    }
    if (document.getElementById("user").value == "joshua") {
        if (document.getElementById("pass").value != "66") {
            alert("Wrong username or password! Try again.");
            return false;
        }
        if (document.getElementById("pass").value == "66") {
            return true;
        }
    }
}