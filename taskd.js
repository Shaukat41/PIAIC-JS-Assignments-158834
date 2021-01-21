var colors = ["Yellow" + " "+ "Orange" + " "+ "Purple" + " "+"Black" + " "+ " "];
document.getElementById("demo").innerHTML = 
"Removing color:" + colors[0];
delete colors[0];
document.getElementById("demo").innerHTML = colors;