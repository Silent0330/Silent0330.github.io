const label_number = document.getElementById('label_number');
const url = 'https://script.google.com/macros/s/AKfycbwM5ezO7BL-_8WZFQx-xTQbBG83NvCYqwyurIoZAkaJW0dczu8bnZtuzKlWFuBgnEAg/exec?action=取得人數';

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