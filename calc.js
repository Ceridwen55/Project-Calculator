let start = 0;
const display = document.querySelector(".display");
display.style.width = "100px";
display.style.height = "100px";

function print (value)
{
    return display.textContent = 0 + value;
}

// INPUTTING BUTTONS
let input = 
[
    {but : document.getElementById("17"), value : 0}, {but : document.getElementById("13"), value : 1}, {but : document.getElementById("14"), value : 2}, 
    {but : document.getElementById("15"), value : 3}, {but : document.getElementById("9"), value : 4}, {but : document.getElementById("10"), value : 5}, 
    {but : document.getElementById("11"), value : 6}, {but : document.getElementById("5"), value : 7}, {but : document.getElementById("6"), value : 8},
    {but : document.getElementById("7"), value : 9}

];

function handleClick (event) // TO TRANSFER THE VALUE FROM OBJECT TO BUTTON
{   
    let buttonValue = event.target.dataset.value;
    return print(buttonValue);
}



const mechanism = input.forEach(item => // CLICK AND SHOW VALUE IN PREVIOUS FUNCTION
{
    if(item.but)
    {
        item.but.dataset.value = item.value;
        item.but.addEventListener('click', handleClick);
    }
}
)









function add (a,b)
{
    return a + b;
}

function subtract (a,b)
{
    return a - b;
}

function multiply (a,b)
{
    return a * b;
}

function divide (a,b)
{
    return a / b;
}

function remain (a,b)
{
    return a % b;
}

