
let firstNumber = "";
let secondNumber = null;
let operator = null;
let maxlimit = 15;
let clickCount = 0

//DISPLAY
const display = document.querySelector(".display");
display.style.display = "flex";
display.style.justifyContent = "flex-end";
display.style.alignItems = "center";
display.style.flexWrap = "wrap";
display.style.width = "180px";
display.style.height = "50px";
display.style.fontWeight = "bold";
display.style.border = "solid";
display.style.backgroundColor = "#4CAF50";
display.style.fontSize = "21px";
display.style.borderRadius = "20px";
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
{   clickCount++;
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
equal.style.borderRadius = "10px";

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
plus.style.borderRadius = "10px";

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
minus.style.borderRadius = "10px";

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
x.style.borderRadius = "10px";

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
div.style.borderRadius = "10px";

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
rem.style.borderRadius = "10px";

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
zero.style.borderRadius = "10px";

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
change.style.borderRadius = "10px";

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
comma.style.borderRadius = "10px";




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

    const maxlength = 15;
    let resultString = result.toString();
    if (resultString.length > maxlength) {
        resultString = result.toExponential(2);
    }

    
    print(resultString);
    
    firstNumber = result;
    secondNumber= null;
    operator = null; 
}


// STYLING

let rex = document.querySelector(".king");
rex.style.display = "flex";
rex.style.justifyContent = "center";
rex.style.alignItems = "center";
rex.style.paddingBottom = "280px";
rex.style.backgroundColor = "#6D6E71"
rex.style.boxShadow = "inset 30px 15px 30px rgba(0, 0, 0, 0.5)";


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
maiden.style.boxShadow = "20px 24px 20px rgba(0, 0, 0, 0.5)";
maiden.style.borderRadius = "20px";

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
        item.but.style.borderRadius = "10px";
        input[0].but.style.width = "105px";
    
});


let title = document.querySelector(".title");
title.style.fontSize = "35px";
title.style.color = "ivory";
title.style.fontStyle = "oblique";
title.style.fontWeight = "bolder";
title.style.fontFamily = "'Digital-7', sans-serif";
title.style.marginTop = "150px";
title.style.textShadow = "5px 5px 5px rgba(0, 0, 0, 0.5)";
title.style.gap = "30px";

let sign = document.querySelector(".sign");
sign.style.fontSize = "25px";
sign.style.color = "#F08080";
sign.style.textShadow ="inner 5px 5px 5px rgba(0, 0, 0, 0.5)" 






