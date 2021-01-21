// var colors = ["Yellow" + " "+ "Orange" + " "+ "Purple" + " "+"Black" + " "+ " "];
// document.getElementById("demo").innerHTML = colors;
// function myFunction() {
    // colors.splice(0, 1);
    // document.getElementById("demo").innerHTML = colors;
// }

var colors = ["Yellow" + " "+ "Orange" + " "+ "Purple" + " "+"Black" + " "+ " "];
colors.pop(prompt("What color you wan to add to the end?", ",")
)
document.getElementById("demo").innerHTML = colors;
