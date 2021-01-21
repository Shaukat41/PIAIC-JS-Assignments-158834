newFunction();
function newFunction(){
var students, text, sLen, i;
students = ["Mujahida", "Jameel", "Tasneem"]; //Changed student's names for a reason.
marks = [320, 230, 480];
results = [((marks[i])*100/500)];
sLen = students.length;
mLen = marks.length;
rLen = results.length
text = "<ul>";
for ( i= 0; i < sLen; i++) {
    text += "<li>" + "Score of" +  " " + (students[i]) + " " + "is" + " " + (marks[i]) + " " + "Percentage" + " " + (results[i])  + "</li>";
}
text +="</ul>"
document.getElementById("demo").innerHTML = text;
}

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_loop