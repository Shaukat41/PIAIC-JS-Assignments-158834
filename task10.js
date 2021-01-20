function pass_validation()
{  
var password=document.myform.password.value;  

if (password==null || password=="")
{  
alert("password can't be blank. Please enter your password.");  
return false;
}
else if(password.length<8)
{  
alert("Password must be at least 8 characters long.");  
return false;  
}  
}  