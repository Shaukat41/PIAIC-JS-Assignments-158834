var y = prompt("Please enter you password");
var error = false;
var message = '';
if (y.length < 8) {
    message += "Your password needs a minimum of eight characters. ";
    error = true;
}
if (y.search(/[a-z]/) == -1) {
    message += "Your password needs at least one lower case letter. ";
    error = true;
}
if (y.search(/[A-Z]/) == -1) {
    message += "Your password needs at least one upper case letter. ";
    error = true;
}
if (y.search (/[0-9]/) == -1) {
    message += "Your password needs a number.";
    error = true;
}
if (error) {
    alert(message);
}