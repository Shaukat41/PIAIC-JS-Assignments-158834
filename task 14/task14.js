var a = 2;
b = 1;
--a;
--b;
++b;
b--;
var result = --a - --b + ++b + b--;
document.write(`--a equal (${--a}) <br>
--a - --b equals (${--a - --b}) <br>
--a - --b + ++b equals (${--a - --b + ++b}) <br>
--a - --b + ++b equals (${--a - --b + ++b + b--}) <br>
a is ${a} <br>
b is ${b} <br>
result is ${result}`)