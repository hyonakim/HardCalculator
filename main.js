//Grabbing the elements
var num0 = document.querySelector('#num0');
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var num3 = document.querySelector('#num3');
var num4 = document.querySelector('#num4');
var num5 = document.querySelector('#num5');
var num6 = document.querySelector('#num6');
var num7 = document.querySelector('#num7');
var num8 = document.querySelector('#num8');
var num9 = document.querySelector('#num9');
var numDash = document.querySelector('#numDash');
var numSlash = document.querySelector('#numSlash');
var numPeriod = document.querySelector('#numperiod');
var numEquals = document.querySelector('#numEquals');
var numAdd = document.querySelector('#numPlus');
var numX = document.querySelector('#numX');
var express = document.querySelector('#valueArea');
var clearButton = document.querySelector('#clear');


//Variable Declaration
var itemNumber, clickedOn, Operator;

//Function to show number when clicked on
var showZero = function () {
 itemNumber = num0.textContent;
 express.textContent = itemNumber;
};

var showOne = function () {
  itemNumber = num1.textContent;
  express.textContent = itemNumber;
};

var showTwo = function () {
  itemNumber = num2.textContent;
  express.textContent = itemNumber;
};

var showThree = function () {
  itemNumber = num3.textContent;
  express.textContent = itemNumber;
};

var showFour = function () {
  itemNumber = num4.textContent;
  express.textContent = itemNumber;
};

var showFive = function () {
  itemNumber = num5.textContent;
  express.textContent = itemNumber;
};

var showSix = function () {
  itemNumber = num6.textContent;
  express.textContent = itemNumber;
};

var showSeven = function () {
  itemNumber = num7.textContent;
  express.textContent = itemNumber;
};

var showEight = function () {
  itemNumber = num8.textContent;
  express.textContent = itemNumber;
};

var showNine = function () {
  itemNumber = num9.textContent;
  express.textContent = itemNumber;
};


//Function to Add Numbers
var addNums = function () {
  Operator = numAdd.textContent;
  express.textContent = Operator;
};

//Function to Subtract Numbers
var subNums = function () {
  Operator = numDash.textContent;
  express.textContent = Operator;
};

//Function to Multiply Numbers
var multiNums = function () {
  Operator = numX.textContent;
  express.textContent = Operator;
};

//Function to Divide Numbers
var divideNums = function () {
  Operator = numSlash.textContent;
  express.textContent = Operator;
};

//When C button is clicked
var clearClicked = function () {
  clickedOn = clearButton.textContent;
  express.textContent = null;
};


//Button Click Action for Numbers
num0.addEventListener('click', showZero);
num1.addEventListener('click', showOne);
num2.addEventListener('click', showTwo);
num3.addEventListener('click', showThree);
num4.addEventListener('click', showFour);
num5.addEventListener('click', showFive);
num6.addEventListener('click', showSix);
num7.addEventListener('click', showSeven);
num8.addEventListener('click', showEight);
num9.addEventListener('click', showNine);

//Button Click Action for Clear
clearButton.addEventListener('click', clearClicked);

//Button Click for Operations
numAdd.addEventListener('click', addNums);
numDash.addEventListener('click', subNums);
numX.addEventListener('click', multiNums);
numSlash.addEventListener('click', divideNums);
