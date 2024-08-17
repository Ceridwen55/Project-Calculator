
let firstNumber = null;
let secondNumber = null;
let operator = null;

//DISPLAY
const display = document.querySelector(".display");
display.style.display = "flex";
display.style.justifyContent = "flex-end";
display.style.alignItems = "center";
display.style.flexWrap = "wrap";
display.style.width = "200px";
display.style.height = "50px";
display.style.fontWeight = "bold";
display.style.border = "solid";
display.style.backgroundColor = "#4CAF50";
display.style.fontSize = "21px";
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
equal.style.display = "flex";
equal.style.height = "50px";
equal.style.width = "50px";
equal.style.border = "solid";

let plus = document.getElementById("16");
function add ()
{
    operator = '+';
}
plus.addEventListener('click',add)
plus.style.display = "flex";
plus.style.height = "50px";
plus.style.width = "50px";
plus.style.border = "solid";

let minus = document.getElementById("12");
function substract ()
{
    operator = '-';
}
minus.addEventListener('click', substract);
minus.style.display = "flex";
minus.style.height = "50px";
minus.style.width = "50px";
minus.style.border = "solid";

let x = document.getElementById("8");
function multiply()
{

    operator = '*';
}
x.addEventListener('click', multiply);
x.style.display = "flex";
x.style.height = "50px";
x.style.width = "50px";
x.style.fontWeight = "bold";
x.style.justifyContent = "center";
x.style.alignItems = "center";
x.style.fontStyle = "normal";
x.style.fontSize = "16px";
x.style.border = "solid";

let div = document.getElementById("4");
function divide ()
{
    operator = '/';
}
div.addEventListener('click', divide);
div.style.display = "flex";
div.style.height = "50px";
div.style.width = "50px";
div.style.fontWeight = "bold";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.fontStyle = "normal";
div.style.fontSize = "16px";
div.style.border = "solid";

let rem = document.getElementById("3");
function remainder ()
{
    operator = '%';
}
rem.addEventListener('click', remainder);
rem.style.display = "flex";
rem.style.height = "50px";
rem.style.width = "50px";
rem.style.fontWeight = "bold";
rem.style.justifyContent = "center";
rem.style.alignItems = "center";
rem.style.fontStyle = "normal";
rem.style.fontSize = "16px";
rem.style.border = "solid";

let zero = document.getElementById("1");
function reset ()
{
    operator = 'AC';
    parseInt(calculateResult(0));
    print(0);
}
zero.addEventListener('click', reset);
zero.style.display = "flex";
zero.style.height = "50px";
zero.style.width = "50px";
zero.style.fontWeight = "bold";
zero.style.justifyContent = "center";
zero.style.alignItems = "center";
zero.style.fontStyle = "normal";
zero.style.fontSize = "16px";
zero.style.border = "solid";

let change = document.getElementById("2");
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
change.style.display = "flex";
change.style.height = "50px";
change.style.width = "50px";
change.style.fontWeight = "bold";
change.style.justifyContent = "center";
change.style.alignItems = "center";
change.style.fontStyle = "normal";
change.style.fontSize = "16px";
change.style.border = "solid";

let comma = document.getElementById("18");
function decimal ()
{
    if (operator === null)
    {
        if (!firstNumber.includes('.'))
        {
            firstNumber = (firstNumber !== null)? firstNumber +'.' : 0;
            print(firstNumber);
        }
        else 
        {
            if (!secondNumber.includes('.'))
            {
                secondNumber = (secondNumber !== null) ? secondNumber + '.' : 0;
                print(secondNumber);
            }
        }
    }
}

comma.addEventListener('click',decimal);
comma.style.display = "flex";
comma.style.height = "50px";
comma.style.width = "50px";
comma.style.fontWeight = "bold";
comma.style.justifyContent = "center";
comma.style.alignItems = "center";
comma.style.fontStyle = "normal";
comma.style.fontSize = "16px";
comma.style.border = "solid";




function calculateResult ()
{   
    let result = 0;
    let num1 = parseFloat(firstNumber);
    let num2  = parseFloat(secondNumber);
    if ( operator === '+')
    {
    
        result = num1 + num2;
        
    }
    if (operator === '-' )
    {
        result = num1 - num2;
    }
    if (operator ==='*')
    {
        result = num1 * num2;
    }
    if (operator === '/')
    {
        result= num1 / num2;
    }
    if (operator === '%')
    {
        result = num1 % num2;
    }
     if ( operator === null )
    {
        result = num1;
    }
    
    print(result);
    
    firstNumber = result;
    secondNumber= null;
    operator = null; 
}


// STYLING

let rex = document.querySelector(".king");
rex.style.display = "flex";
rex.style.justifyContent = "center";
rex.style.alignItems = "center";


let maiden = document.querySelector(".queen");
maiden.style.display = "flex";
maiden.style.flexDirection = "column";
maiden.style.backgroundColor = "#003366"
maiden.style.gap = "2px";
maiden.style.marginTop = "300px";
maiden.style.marginLeft = "50px";
maiden.style.height = "200x";
maiden.style.width = "200px";
maiden.style.border = "solid";

let firstr = document.querySelector(".firstrow");
firstr.style.display = "flex";
firstr.style.width = "200px";
firstr.style.height = "50px";
firstr.style.gap = "2px";

let secondr = document.querySelector(".secondrow");
secondr.style.display = "flex";
secondr.style.width = "200px"
secondr.style.height = "50px"
secondr.style.gap ="2px";

let thirdr = document.querySelector(".thirdrow");
thirdr.style.display = "flex";
thirdr.style.width = "200px"
thirdr.style.height = "50px"
thirdr.style.gap ="2px";

let fourthr = document.querySelector(".fourthrow");
fourthr.style.display = "flex";
fourthr.style.width = "200px"
fourthr.style.height = "50px"
fourthr.style.gap ="2px";

let fifthr = document.querySelector(".fifthrow");
fifthr.style.display = "flex";
fifthr.style.width = "200px"
fifthr.style.height = "50px"
fifthr.style.gap ="2px";


input.forEach(item => 
{
    
        item.but.style.display = "flex";
        item.but.style.width = "50px";
        item.but.style.height = "50px";
        item.but.style.fontWeight = "bold";
        item.but.style.justifyContent = "center";
        item.but.style.alignItems = "center";
        item.but.style.fontStyle = "oblique";
        item.but.style. fontSize = "14px";
        item.but.style.border = "solid";
        input[0].but.style.width = "105px";
    
});











