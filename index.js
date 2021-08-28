
const dateofBirth= document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const msg = document.querySelector('.msg');

const CheckNumberButton =   document.querySelector('#check-number');

const outputBox = document.querySelector('#output-box');
function compareValues(sum,luckyNumber)
{
   if(sum%luckyNumber===0){
       msg.innerText= "Your birthday is lucky 🔥🔥";
   }else {
       msg.innerText= "Your birthday is not lucky. 🤣It's just for fun.";
   }
}

function checkBirthDateisLucky(){
    const dob = dateofBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob)
    compareValues(sum, luckyNumber.value);
    else
    outputBox.innerText ="Please enter in both the details.";
    
}



function checkNumberisLucky(){
    const dob= dateofBirth.value;
    const sum= calculateSum(dob);
    console.log(sum);
}

function calculateSum(dob)
{
    dob= dob.replaceAll("-","");
    let sum = 0;
    for(let index=0; index<dob.length; index++){
        sum = sum + Number(dob.charAt(index));

        }
        return sum;
}


CheckNumberButton.addEventListener('click',checkBirthDateisLucky);
    