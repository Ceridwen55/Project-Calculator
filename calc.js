let start = 0;
let input1 = 
[
    {but : document.getElementById("17"), value : 0}, {but : document.getElementById("13"), value : 1}, {but : document.getElementById("14"), value : 2}, 
    {but : document.getElementById("15"), value : 3}, {but : document.getElementById("9"), value : 4}, {but : document.getElementById("10"), value : 5}, 
    {but : document.getElementById("11"), value : 6}, {but : document.getElementById("5"), value : 7}, {but : document.getElementById("6"), value : 8},
    {but : document.getElementById("7"), value : 9}

];

function handleClick1 (event)
{
    let buttonValue = event.target.dataset.value;
    return buttonValue;
}
input1.forEach(item =>
{
    if(item.but)
    {
        item.but.dataset.value = item.value;
        item.but.addEventListener('click', handleClick1);
    }
}
)


let operator = 
[
     
];




let input2 = 
[
    {but : document.getElementById("17"), value : 0}, {but : document.getElementById("13"), value : 1}, {but : document.getElementById("14"), value : 2}, 
    {but : document.getElementById("15"), value : 3}, {but : document.getElementById("9"), value : 4}, {but : document.getElementById("10"), value : 5}, 
    {but : document.getElementById("11"), value : 6}, {but : document.getElementById("5"), value : 7}, {but : document.getElementById("6"), value : 8},
    {but : document.getElementById("7"), value : 9}
]; 






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

