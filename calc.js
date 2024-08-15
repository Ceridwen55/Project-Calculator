
let firstNumber = null;
let secondNumber = null;
let operator = null;

//DISPLAY
const display = document.querySelector(".display");
display.style.width = "100px";
display.style.height = "100px";
display.textContent = 0;
function print (value)
{
    return display.textContent = value;
}

// INPUTTING BUTTONS
let input = 
[
    {but : document.getElementById("17"), value : 0}, {but : document.getElementById("13"), value : 1}, {but : document.getElementById("14"), value : 2}, 
    {but : document.getElementById("15"), value : 3}, {but : document.getElementById("9"), value : 4}, {but : document.getElementById("10"), value : 5}, 
    {but : document.getElementById("11"), value : 6}, {but : document.getElementById("5"), value : 7}, {but : document.getElementById("6"), value : 8},
    {but : document.getElementById("7"), value : 9}

];

function handleClick (event) // TO TRANSFER THE VALUE FROM OBJECT TO BUTTON AND STORING DATA 
{   
    let buttonValue = event.target.dataset.value;
    
    if ( operator == null)
    {
        firstNumber = (firstNumber !== null) ? firstNumber + buttonValue : buttonValue;
        return print(firstNumber);
    }
    else
    {
        secondNumber = (secondNumber !== null) ? secondNumber + buttonValue : buttonValue;
        return print(secondNumber);

    }
    
    
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


//OPERATION

let equal = document.getElementById("19");
equal.addEventListener('click', calculateResult);

let plus = document.getElementById("16");
function add ()
{
    operator = '+';
}
plus.addEventListener('click',add)

let minus = document.getElementById("12");
function substract ()
{
    operator = '-';
}
minus.addEventListener('click', substract);

let x = document.getElementById("8");
function multiply()
{

    operator = '*';
}
x.addEventListener('click', multiply);

let div = document.getElementById("4");
function divide ()
{
    operator = '/';
}
div.addEventListener('click', divide);

let rem = document.getElementById("3");
function remainder ()
{
    operator = '%';
}
rem.addEventListener('click', remainder);

let zero = document.getElementById("1");
function reset ()
{
    operator = 'AC';
    parseInt(calculateResult(0));
    print(0);
}
zero.addEventListener('click', reset);

let change =document.getElementById("2");
function mirror ()
{
    operator = '+/-'
    if (firstNumber !== null)
    {
        firstNumber = -firstNumber;
        print(firstNumber);
    }
    if (secondNumber !== null)
    {
        secondNumber = -secondNumber;
        print(secondNumber);
    }
    
    
}
change.addEventListener('click',mirror);





function calculateResult ()
{   
    let result = 0;
    if ( operator === '+')
    {
    
        result = parseInt(firstNumber) + parseInt(secondNumber);
        
    }
    if (operator === '-' )
    {
        result = parseInt(firstNumber) - parseInt(secondNumber);
    }
    if (operator ==='*')
    {
        result = parseInt(firstNumber) * parseInt(secondNumber)
    }
    if (operator === '/')
    {
        result= parseInt(firstNumber) / parseInt(secondNumber);
    }
    if (operator === '%')
    {
        result = parseInt(firstNumber) % parseInt(secondNumber);
    }
     if ( operator === null )
    {
        result = firstNumber;
    }
    
    print(result);
    
    firstNumber = result;
    secondNumber= null;
    operator = null; 
}












