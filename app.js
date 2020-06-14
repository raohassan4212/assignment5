//                                      chapter: 1
//#1
alert("Welcome");
//#2
alert("Error! Please enter a valid password"); 
//#3
var v1 = "Welcome to JS Land... \n Happy Codding!";
alert(v1);
//#4
alert("Welcome to JS Land... ");
alert("Happy Coding! \n \v Prevent this page from creating addional dialogs.")
//#5 do in console

//#6
alert("New alert");
//#7



//                                   chapter: 2
//#1
var message;
//# 
var myName = "Rao Hasan";
//#3
var message;
message = "Hello World";
alert(message);
//#4
var studentBioData = ["Rao Hassan","17","Certified Mobile Application Development"];
alert(studentBioData[0]);
alert(studentBioData[1]);
alert(studentBioData[2]);
//#5
var x = "PIZZA";
alert(x + "\n" + x[0] + x[1] + x[2] + x[3] + "\n"
+ x[0] + x[1] + x[2] + "\n" + x[0] + x[1] + "\n"
+ x[0]);
//#6
var email = "example@gmail.com";
alert("My email adddress is" + " " + email);  
//#7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + " " + book);
//#8
document.write("Yah! I can write HTML content through JavaScript")
//#9
var a = "“ ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ”";
alert(a);






//                                   chapter: 3

//#1
var age = 17;
alert("I am" + " " + age + " " + "year old");
//#2
var track = +prompt("How many time you visit this site");
alert("You have visited this site" + " " + track + " " + "times");
//#3
var birthYear = 2002;
document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declared varaible is number");
//#4
var visiterName = "<b>Rao Hassan</b>";
var productTitle = "<b>T-shirt</b>";
var productQuantity = "<b>5</b>";
document.write("<br>" + visiterName + " " + "ordered" + " " + productQuantity + " " + productTitle + " " + "on XYZ clothing store");




//                                       chapter: 4


//#1
//var [variable1, variable2, variable3];
//#2                                        Legal
var  nameLegal;
var ageLegal;
var emailLegsl;
var passwordLegal;
var varaibleLegal;

//                                           illegal


// var 1name;
// var &age;
// var @book;
// var #email;
// var *passwordLegal;


//#3

document.write("<br> <br> <b>Rules for naming JS variables</b> <br> <br> Variable names can only contain , number, $ and _, For examlpe: $my_1stVariable <br> Variables must begin with a letter,$ or _, For example $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keyword <br>") 








//                                           chapter: 5 

//#1


var num1 = 3;
var num2 = 5;
var result = num1 + num2;
document.write(" <br> Sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result); 
var result = num1 - num2;
document.write(" <br> Sub of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result); 
var result = num1 * num2;
document.write(" <br> Multi of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result); 
var result = num1 / num2;
document.write(" <br> Div of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result); 
var result = num1 % num2;
document.write(" <br> Modules of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + result); 

//#2

var mathematicExpressions;
document.write("<br> <br> Value after variable declaration is " + mathematicExpressions);
mathematicExpressions = 5;
document.write("<br> Initial value: " +  mathematicExpressions);
document.write("<br> Value after increment is: " + (1 + mathematicExpressions));
mathematicExpressions;
document.write("<br> Value after addition is: " + (2 * mathematicExpressions ));
document.write("<br> Value after decrement is: " + (1 - mathematicExpressions));
document.write("<br> The reminder  is: " + (0 % mathematicExpressions));
//#3
var ticketPrice = 600;
document.write("<br> <br> Total cost to buy 5 tickets to a movie is " + (5*ticketPrice) + "PKR <br> <br>" );

//#4
var table = 4;
for  (var i = 1; i <= 10; i++) {
    document.write("4 X " + i + " " + "= " + 4*i + "<br>" )
}

//#5

var celsius = 25;
document.write("<br>" + celsius + "<sup>o</sup>C" + " is " +  ((25*9/5)+32) + "<sup>o</sup>F");
var farhrenheit = 70;
document.write("<br>" + farhrenheit + "<sup>o</sup>F" + " is " + ((70-32)*5/9) + "<sup>o</sup>C");







