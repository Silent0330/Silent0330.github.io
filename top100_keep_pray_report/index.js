const label_number = document.getElementById('label_number');
const url = 'https://script.google.com/macros/s/AKfycbzZW8afjff5hmdSU3gknLNUYIwQJCM36OpXAsR724ZmnhzDw_nnrBww60goP7QJSg3v/exec?action=取得人數';

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