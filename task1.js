newFunction();
function newFunction() {
    var qual, text, qLen, i;
    qual = ["SSC", "HSC", "BSC", "BCOM", "MS", "M. Phil.", "PHD"];
    qLen = qual.length;

    text = "<ol>";
    for (i = 0; i < qLen; i++) {
        text += "<li>" + qual[i] + "</li>";
    }
    text += "</ol>";

    document.getElementById("demo").innerHTML = text;
}

