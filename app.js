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

//#3

var mathematicExpressions;
document.write("<br> <br> Value after variable declaration is " + mathematicExpressions);
mathematicExpressions = 5;
document.write("<br> Initial value: " +  mathematicExpressions);
document.write("<br> Value after increment is: " + (1 + mathematicExpressions));
mathematicExpressions;
document.write("<br> Value after addition is: " + (2 * mathematicExpressions ));
document.write("<br> Value after decrement is: " + (1 - mathematicExpressions));
document.write("<br> The reminder  is: " + (0 % mathematicExpressions));
//#4
var ticketPrice = 600;
document.write("<br> <br> Total cost to buy 5 tickets to a movie is " + (5*ticketPrice) + "PKR <br> <br>" );

//#5
var table = 4;
for  (var i = 1; i <= 10; i++) {
    document.write("4 X " + i + " " + "= " + 4*i + "<br>" )
}

//#6

var celsius = 25;
document.write("<br>" + celsius + "<sup>o</sup>C" + " is " +  ((25*9/5)+32) + "<sup>o</sup>F");
var farhrenheit = 70;
document.write("<br>" + farhrenheit + "<sup>o</sup>F" + " is " + ((70-32)*5/9) + "<sup>o</sup>C");

//#7

var priceOfFirstItem = 650;
var priceOfSecondItem = 100;
var quantityOfFirstItem = 3;
var quantityOfSecondItem = 7;
var shippingCharges = 100;

var totalCost = ((650*3)+(100*7))+100;

document.write("<br> <br> Price of item 1 is " + priceOfFirstItem);
document.write("<br> Quantity of item 1 is " + quantityOfFirstItem);
document.write("<br> Price of item 2 is " + priceOfSecondItem);
document.write("<br> Quantity of item 2 is " + quantityOfSecondItem);
document.write("<br> Shipping charges " + shippingCharges); 


document.write("<br> <br> Total cost of your order is " + totalCost );

//#8

var totalMark = 980;
var markObtained = 804;
var percentage = (809/980)*100;

document.write("<br> <br> <h1>Marks Sheet</h1>");
document.write("<br> Total marks: " + totalMark);
document.write("<br> Marks obtained: " + markObtained);

document.write("<br> Percentage: " + percentage);


//#9

var dollar = 10;
var riyal = 25;
var totalCurrencyInPkr = (10*104.80)+(25*28);
document.write("<br> <br> <h1>Currency in PKR</h1> <br>");
document.write("<br> Total currency in PKR: " + totalCurrencyInPkr);

//#10

var two = 2;
document.write("<br> <br> " + ((two + 5)*10)/2);

//#11

var currentYear = 2020;
var birthYear = 2002;
var age = currentYear - birthYear;

document.write("<br> <br> <h1>Age Calculator</h1> <br>");
document.write("<br> Current Year: " + currentYear);
document.write("<br> Birth Year: " + birthYear);
document.write("<br> Your age is: " + age);

//#12

var radius = 20
var circumference = 2*3.142*radius;
var area = 3.142*radius*radius;


document.write("<br> <br> <h1>Geometrizer</h1> <br>");
document.write("<br> Radius of a circle: " + radius);
document.write("<br> The circumference is: " + circumference);
document.write("<br> The area is: " + area);

//#13

var snack = "Kurkure";
var age1 = 15;
var maxAge = 65;
var snackPerDay = 3;
var lifeCalculationOfSnack = (maxAge-age1)*snackPerDay;

document.write("<br> <br> <h1>The Lifetime Supply Calculator</h1> <br>");
document.write("<br> Favourite Snack: " + snack);
document.write("<br> Current age: " + age1);
document.write("<br> Estimated Maximum Age: " + maxAge);
document.write("<br> Amount of snack per day: " + snackPerDay);
document.write("<br> You will need " + lifeCalculationOfSnack + " " + snack + " to last you until the ripe old age of " + maxAge);




//                              chapter: 6 to 9 

//#1

var a = 10;
document.write("<br> <br> Result: <br> The value of a is: " + a + "<br> ...................................<br>");
document.write("<br> The value of ++a is: " + (++a));
document.write("<br> Now the value of a is: " + a + "<br>");
document.write("<br> The value of a++ is: " + a++);
document.write("<br> Now the value of a is: " + a + "<br>");
document.write("<br> The value of --a is: " + (--a));
document.write("<br> Now the value of a is: " + a + "<br>");
document.write("<br> The value of a-- is: " + a--);
document.write("<br> Now the value of a is: " + a + "<br>");

//#2

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("<br> a is " + a);
document.write("<br> b is " + b);
document.write("<br> result is " + result);

//#3

var name = prompt("Enter your name");
document.write("<br> <br> Welcome " + name + "<br>");

//#4


var inputNumber = +prompt("Enter your table");


    if (inputNumber !== 0) {
     for (var i = 1; i <= 10; ++i) {
        document.write(inputNumber + " x " + i + " = " + inputNumber*i + "<br>");
     } 
    }
    else if  (inputNumber === 0) {
        for (var g = 1; g <=10; ++g) {
            document.write("5 " + "x " + g + " = " + 5*g + "<br>");
        }
    }


//#5 

var math = prompt("Enter subject one");
var english = prompt("Enter subject two");
var urdu = prompt("Enter subject three");

var totalMarkForEachSubject = 100;

var obtainedMarkMath = prompt("Enter math mark");
var obtainedMarkEnglish = prompt("Enter English mark");
var obtainedMarkUsdu = prompt("Enter urdu mark");
var percentageOfMath = (obtainedMarkMath/totalMarkForEachSubject)*100 ;
var percentageOfEnglish = (obtainedMarkEnglish/totalMarkForEachSubject)*100 ;
var percentageOfUrdu = (obtainedMarkUsdu/totalMarkForEachSubject)*100 ;

document.write("<br> <br> <h2>Subject &nbsp; Total Marks &nbsp; Obtained Marks &nbsp; Percentage </h2><br>");
document.write("Math" + "\n  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  "  + totalMarkForEachSubject + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarkMath + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " + percentageOfMath + "%");
document.write("<br> English" + "\n  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  "  + totalMarkForEachSubject + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarkEnglish + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + percentageOfEnglish + "%");
document.write("<br> Urdu" + "\n  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  "  + totalMarkForEachSubject + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarkUsdu + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +percentageOfUrdu + "%");





//                                                 chapter: 9 to 11


//#1 

var cityName = prompt("Enter City ");

if (cityName === "karachi") {
    alert("welcome to city of light");
}

//#2

var inputGender = prompt("Enter gender");

if (inputGender === "male") {
    alert("Good Morning Sir");
}
else if (inputGender === "female") {
    alert("Good Morning Ma’am")
}

#3 

var inputSignalColour = prompt("Input Signal Colour");

if (inputSignalColour === "red") {
    alert("Must Stop");
}
else if (inputSignalColour === "yellow") {
    alert("Ready to move");
}
else if (inputSignalColour === "green") {
    alert("Move now");
}

#4
var remainingFuelInCar = prompt("Enter remanining fuel in car ");

if (remainingFuelInCar <= 0.25) {
    alert("Please refill the fuel in your car");
}

#5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}



var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}


if (c === 13){
    alert("condition 2 is true");
    }

    if (++c < 14){
    alert("condition 3 is true");
    }

    if(c === 14){
    alert("condition 4 is true");
    }



    var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }



    if("car" < "cat"){
        alert("car is smaller than cat");
        }


#6

var subjectOne = +prompt("Enter first subject mark");
var subjectTwo = +prompt("Enter second subject mark");
var subjectThree = +prompt("Enter third subject mark");
var totalOptainedMark = subjectOne + subjectTwo + subjectThree ;
var totalMarkOfAllSubject = 300;
var percentageTotal = (totalOptainedMark/totalMarkOfAllSubject)*100 ;


if (percentageTotal >= 80) {
    document.write("<br> <br> <h1>Marks Sheet </h1> <br>");
    document.write("<br> Total marks : " + totalMarkOfAllSubject);
    document.write("<br> Marks obtained : " + totalOptainedMark);
    document.write("<br> Percentage : " + percentageTotal + "%");
    document.write("<br> Grade : A-one");
    document.write("<br> Remarks : Excellent");
}
else if (percentageTotal >= 70) {
    document.write("<br> <br> <h1>Marks Sheet </h1> <br>");
    document.write("<br> Total marks : " + totalMarkOfAllSubject);
    document.write("<br> Marks obtained : " + totalOptainedMark);
    document.write("<br> Percentage : " + percentageTotal + "%");
    document.write("<br> Grade : A");
    document.write("<br> Remarks : Good");
}
else if (percentageTotal >= 60) {
    document.write("<br> <br> <h1>Marks Sheet </h1> <br>");
    document.write("<br> Total marks : " + totalMarkOfAllSubject);
    document.write("<br> Marks obtained : " + totalOptainedMark);
    document.write("<br> Percentage : " + percentageTotal + "%");
    document.write("<br> Grade : B");
    document.write("<br> Remarks : You need to improve");
}
else if (percentageTotal < 70) {
    document.write("<br> <br> <h1>Marks Sheet </h1> <br>");
    document.write("<br> Total marks : " + totalMarkOfAllSubject);
    document.write("<br> Marks obtained : " + totalOptainedMark);
    document.write("<br> Percentage : " + percentageTotal + "%");
    document.write("<br> Grade : Fail");
    document.write("<br> Remarks : Sorry");
}



#7

var guessNumber = +prompt("Enter your guess number between 1 to 10");

if (guessNumber === 5) {
    alert("Bingo!");
}
else if (guessNumber === 4) {
    alert("Close enough to the correct answer");
}
else if (guessNumber === 6) {
    alert("Close enough to the correct answer");
}


#8

var divisibleBy3 = +prompt("Enter number to check divisible by 3");

if (divisibleBy3 / 3 ) {
    alert("The number is divisible by 3");
}


#9

var evenOdd = +prompt("Enter to check even or odd");

if (evenOdd % 2) {
    alert("Number is odd");
}
else {
    alert("Number is even");
}

#10

var temperature = +prompt("Enter temperature");

if (temperature > 40 ) {
    alert("It is too hot outside.");
}
else if (temperature > 30 ) {
    alert("The Weather today is Normal.");
}
else if (temperature > 20 ) {
    alert("Today’s Weather is cool.");
}
else if (temperature > 10 ) {
    alert("OMG! Today’s weather is so Cool.");
}


#11

var firstNumber = +prompt("Enter first number");
var operator = prompt("Enter operator");
var secondNumber = +prompt("Enter second number");

if (operator === "+") {
    alert(firstNumber + secondNumber);
}
else if (operator === "-") {
    alert(firstNumber + secondNumber);
}
else if (operator === "*") {
    alert(firstNumber * secondNumber);
}
else if (operator === "/") {
    alert(firstNumber / secondNumber);
}
else if (operator === "%") {
    alert(firstNumber % secondNumber);
}




//#1


