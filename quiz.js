// variables
var correct = 0;
var wrong   = 0;

// prompt
var ans = prompt("Which city will host the next Olympic games?");

// if statement
if ( ans.toUpperCase() === 'RIO' ) {
 correct += 1;
 document.write("<p style=\"color: green\"> CORRECT!</p>");
} else {
 wrong += 1;
 document.write("<p style=\"color: red\"> WRONG! Correct answer: Rio </p>");
}

ans = prompt("Who is the world best soccer player?");

// if statement
if ( ans.toUpperCase() === 'MESSI' ) {
 correct += 1;
document.write("<p style=\"color: green\"> CORRECT!</p>");
} else { 
 wrong += 1;
 document.write("<p style=\"color: red\"> WRONG! Correct answer: Messi </p>");
}

ans = prompt("Which language is spoken in Brazil?");

// if statement
if ( ans.toUpperCase() === 'PORTUGUESE' ) {
 correct += 1;
 document.write("<p style=\"color: green\"> CORRECT!</p>");
} else {
 wrong += 1;
 document.write("<p style=\"color: red\">WRONG! Correct answer: Portuguese </p>");
}

ans = prompt("Which team won the 2010 soccer world cup?");

// if statement
if ( ans.toUpperCase() === 'SPAIN' ) {
 correct += 1;
document.write("<p style=\"color: green\"> CORRECT!</p>");
} else {
 wrong += 1;
 document.write("<p style=\"color: red\"> WRONG! Correct answer: ALIEN </p>");
}

ans = prompt("Who did score for germany in the 2014 Soccer World Cup final?");

// if statement
if ( ans.toUpperCase() === 'GOTZE' ) {
 correct += 1;
document.write("<p style=\"color: green\"> CORRECT!</p>");
} else {
 wrong += 1;
 document.write("<p style=\"color: red\">WRONG! Correct answer: Gotze </p>");
}

// output results
document.write("<h2 style=\"color: green\"> CORRECT : "+ correct +"</h2>");
document.write("<h2 style=\"color: red\"> WRONG : "+ wrong +"</h2>");