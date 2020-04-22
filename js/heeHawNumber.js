/*
 * Lewis Scott
 * 4/17/20
 * filename https://lscott.greenriverdev.com/328/heeHaw/heeHawNumber.js
 * JavaScript exercise 3
 * prints up to a maximum number submitted by user
 * displays Hee! if number evenly div by 3, Haw if evenly div by 5
 * and Hee Haw! if evenly div by both
 */
// check the submitted form
// if valid, call heeHaw function
// prevent submission of the form
let checkForm = function(e) {
    //let form = e.target;
    let num = document.getElementById("number").value;
    if (validate(num))
    {
        heeHaw(num);
    }
    // prevent form from submitting and "refreshing" page
    e.preventDefault();
};

//document.getElementById("button").addEventListener("click", checkForm, false);
document.getElementById("numSteps").addEventListener("submit", checkForm, false);


//document.getElementById("numberSteps").onsubmit = validate;

function validate(num)
{
    // clear previous
    let myOutput = document.getElementById("output");
    myOutput.innerHTML = "";
    //alert("Validating");
    // Make all errors hidden
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++)
    {
        errors[i].style.visibility = "hidden";
    }
    // Create a flag variable
    let valid = true;

    // Check number
    if (isNaN(num) || num == "" || num < 1)
    {
        let errNum = document.getElementById("errNum");
        errNum.style.visibility = "visible";
        valid = false;
    }
    return valid;
}

function heeHaw(number)
{
    let myOutput = document.getElementById("output");
    myOutput.innerHTML = "";
    for (var i = 1; i <= number; i++)
    {

        if ((i % 3) == 0 && (i % 5) == 0)
        {
            myOutput.innerHTML += "<p>Hee Haw!</p>";
        }
        else if ((i % 3) == 0)
        {
            myOutput.innerHTML += "<p>Hee!</p>";
        }
        else if ((i % 5) == 0)
        {
            myOutput.innerHTML += "<p>Haw!</p>";
        }
        else
        {
            myOutput.innerHTML += '<p>' + i + '</p>';
        }
    }
}

