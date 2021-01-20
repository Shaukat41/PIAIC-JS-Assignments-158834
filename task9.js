var vowels = 'aeiouAEIOU'
const char = prompt('Enter a character : ') 
for (var i = 0; i <= vowels.length; i++){
    if (char != vowels[i]) {
        continue;
    }
    alert(true);
} 
alert(false);


