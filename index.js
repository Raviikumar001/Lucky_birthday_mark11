
const dateofBirth= document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');

const CheckNumberButton =   document.querySelector('#check-number');

function checkNumberisLucky(){
    const dob= dateofBirth.value;
    const sum= calculateSum(dob);
}

function calculateSum(date)
{
    dob= dob.replaceAll("-","");
    let sum = 0;
    for(let index=0; index<dob.length; index++){
        sum = sum + dob.charAt(index);
        }
}


CheckNumberButton.addEventListener('click',function getvalues(){
    console.log(dateofBirth.value,luckyNumber.value);
})
