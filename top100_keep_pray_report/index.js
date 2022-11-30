const label_number = document.getElementById('label_number');
const url = 'https://script.google.com/macros/s/AKfycbzZW8afjff5hmdSU3gknLNUYIwQJCM36OpXAsR724ZmnhzDw_nnrBww60goP7QJSg3v/exec?action=取得人數';

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('ready');
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((content)=>{
        updateNumber(content);
    })
}


function updateNumber(content) {
    console.log(content);
    if(content.success) {
        label_number.innerText = content.data.num;
    }
}