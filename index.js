/** owner: Pareekshith.P */
/**this is the js part of the calculator code */
/** you can modify this code accordingly  */
/** remove these commands while rewriting the codes */


// Get references to the elements
const numberDisplay = document.getElementById("number");
const buttons = document.querySelectorAll("button[id]");

let currentInput = ""; // Store the current input
let previousInput = ""; // Store the previous input
let operator = ""; // Store the operator (+, -, *, /)

// Function to update the number display
function updateDisplay() {
    numberDisplay.textContent = currentInput;
}

// Function to handle number button clicks
function handleNumberClick(event) {
    const clickedNumber = event.target.textContent;
    currentInput += clickedNumber;
    updateDisplay();
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
    if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = event.target.textContent;
    }
}

// Function to handle equal button click
function handleEqualClick() {
    if (currentInput !== "" && previousInput !== "" && operator !== "") {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case "+":
                currentInput = (num1 + num2).toString();
                break;
            case "-":
                currentInput = (num1 - num2).toString();
                break;
            case "*":
                currentInput = (num1 * num2).toString();
                break;
            case "/":
                currentInput = (num1 / num2).toString();
                break;
        }

        updateDisplay();
        previousInput = "";
        operator = "";
    }
}

// Function to clear the screen
function clear_screen() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

// Add event listeners to the number buttons
buttons.forEach(button => {
    if (button.id !== "=" && button.id !== "C") {
        button.addEventListener("click", handleNumberClick);
    }
});

// Add event listeners to the operator buttons
document.getElementById("+").addEventListener("click", handleOperatorClick);
document.getElementById("-").addEventListener("click", handleOperatorClick);
document.getElementById("*").addEventListener("click", handleOperatorClick);
document.getElementById("/").addEventListener("click", handleOperatorClick);

// Add event listener to the equal button
document.getElementById("=").addEventListener("click", handleEqualClick);


//slider mover
var x = 0;
var slider_Button = document.getElementById("slider-button");
const slider_background = document.getElementById("slider");
var body = document.getElementById("bod");
var icons = document.querySelectorAll(".bar");

function mover() {
  if (x === 0) {
    // Move forwards
    slider_Button.style.position = "relative";
    slider_Button.style.left = "65px";
    slider_background.style.backgroundColor = "#333";
    slider_Button.style.backgroundColor = "#FFFFF0";
    body.style.backgroundColor = "white";
    
    // Loop through the icons NodeList and set background color for each element
    icons.forEach(function(icon) {
      icon.style.backgroundColor = "#333";
    });
    
    x = 65; // Set x to the new position value
  } else if (x === 65) {
    // Move backwards
    slider_Button.style.position = "relative";
    slider_Button.style.left = "5px"; // Set the left position to return to the original position
    slider_background.style.backgroundColor = "white";
    slider_Button.style.backgroundColor = "black";
    body.style.backgroundColor = "#333";

    // Loop through the icons NodeList and set background color for each element
    icons.forEach(function(icon) {
      icon.style.backgroundColor = "white";
    });

    x = 0; // Reset x to the starting position value
  }
}

/* for the menu bar*/

var opacity_setter=0;
function hideandseek_menubar(){

    menu=document.getElementById("menu");   
    rotator = document.getElementById("icon") 

    /* defining the condition*/

    if (opacity_setter == 0){

        rotator.style.transform="rotate(90deg)";
        menu.style.opacity=1;
        opacity_setter ++;

    }

    else if(opacity_setter ==1){
        rotator.style.transform="rotate(0deg)";
        menu.style.opacity=0;
        opacity_setter --;
        div_closer();
    }
}


/* changing the color of the number keys */

var num_buttons = document.querySelectorAll(".mainnum");

function color_changer(button) {
    var color = button.getAttribute("data-color");
    
    num_buttons.forEach(function(numButton) {
        numButton.style.backgroundColor = color;
    });
}

/* change the display color */

var displayer = document.getElementById("display-div");

function color_changer2(button){
    var color = button.getAttribute("data-color");

    displayer.style.backgroundColor = color;
}


/*  change the calc color */

var calc_background= document.getElementById("main-div");

function color_changer3(button){
    var color = button.getAttribute("data-color");
    calc_background.style.backgroundColor=color;
}

/* change the original background */

var original_background=document.getElementById("bod");

function color_changer4(button){
    var color=button.getAttribute("data-color");
    body.style.backgroundColor=color;
}

/*  to change the result ont color */

var result_color= document.getElementById("number");

function color_changer5(button){
    var color = button.getAttribute("data-color");
    result_color.style.color=color;
}

/*  setting the var */


function customizerdiv_setter() {
    var custom_div = document.getElementById("customization-div");
    
    var computedStyle = window.getComputedStyle(custom_div);
    var display = computedStyle.getPropertyValue("display");

    if (display === 'none') {
        custom_div.style.display = 'block';
    } else if (display === 'block') {
        custom_div.style.display = 'none';
    }
}


/* function to close the customize div even when the menu bar is clicked*/

function div_closer(){

    var closer= document.getElementById("customization-div");

    var computedStyle = window.getComputedStyle(closer);
    var display = computedStyle.getPropertyValue("display");

    if(display == 'block'){
        closer.style.display = 'none';
    }
}


/* to restore default settings */

function restore_settings(){

    location.reload();
}

/** to clear the history  */

function clear_history(){

    alert("The History Will Be Cleared");
}