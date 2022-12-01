const label_number = document.getElementById('label_number');
const url = 'https://script.google.com/macros/s/AKfycbzQPaqYpAMmbGWFpu3dTEsqJQAFzzfhCdOR1zUG2Na8dx8I9fi-F5SA33_xf-7POEEI/exec?action=取得人數';

document.addEventListener('DOMContentLoaded', init);

var intervalId = window.setInterval(updateNumber, 10000);

function init() {
    updateNumber();
}


function updateNumber() {
    console.log('fetching...')
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((content)=>{
        if(content.success) {
            console.log('success')
            label_number.innerText = content.data.num;
        }
        else {
            console.log('fail')
        }
    })
}