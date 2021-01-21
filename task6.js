newFunction();
function newFunction() {
var aCities, text, aLen, oLen, i;
aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
o = ["th","st","nd","rd"];
o.shift();
seq = [1, 2, 3]
aLen = aCities.length;
oLen = o.length
text = "<ul>";
for (i = 0; i < oLen; i++) {
    text += "<li>"  + (seq[i]) + (o[i]) + " " + "Choice is" + " " + (aCities[i]) + "</li>";
}

text +="</ul"
document.getElementById("demo").innerHTML = text;
}