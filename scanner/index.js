var cam_off = true;
var key = '63770c2b81de6c49c98228baccbfcac0dd732d9663a2bab891070ed924a43d40';
const input_cam_switch = document.getElementById("input_cam_switch");
const text_key = document.getElementById("text_key");
const select_onsite = document.getElementById("select_onsite");
const html5QrCode = new Html5Qrcode("reader");
const config = {
    fps: 25,
    qrbox: {
        width: 640,
        height: 640
    }
};
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    stop_scan();
    console.log(decodedText);// 這裡已經可以正確彈出掃描結果，但點按無法跳轉
    let hash = CryptoJS.HmacSHA256(decodedText, key);
    hash = hash.toString(CryptoJS.enc.Hex);
    let data = {
        'action': '主日簽到',
        'line_uid': decodedText,
        'onsite_online': select_onsite.options[select_onsite.selectedIndex].value,
        'valid_code': hash,
    };
    fetch('https://script.google.com/macros/s/AKfycbwYftlyJsjO0Pkn0hGh9RNDxRrogh4yPXWuJZT5d65rFklXeyhLuqE-zgwNdJ3DGg62/exec', 
        {
            body: JSON.stringify(data),
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'omit', // include, same-origin, *omit
            headers: {
                'user-agent': 'scanner',
                'content-type': 'application/json'
            },
            mode: 'no-cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        }
    ).then((response) => {
        console.log(response);
    }).then(result => {
        console.log(result);
    }).catch((err) => {
        console.log('錯誤:', err);
    });
};



function start_scan() {
    Html5Qrcode.getCameras().then(devices => {
        /**
         * devices would be an array of objects of type:
         * { id: "id", label: "label" }
         */
        if (devices && devices.length) {
          var cameraId = devices[0].id;
          // .. use this to start scanning.
            html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
            cam_off = false;
            input_cam_switch.checked = true;
        }
      }).catch(err => {
        // handle err
    });
}
function stop_scan() {
    html5QrCode.stop().then((ignore) => {
        // QR Code scanning is stopped.
    }).catch((err) => {
        // Stop failed, handle it.
    });
    cam_off = true;
    input_cam_switch.checked = false;
}

function onclick_btn_cam_switch() {
    if (cam_off) {
        start_scan();
    }
    else {
        stop_scan();
    }
}

function onclick_btn_key() {
    key = text_key.value;
    text_key.value = "";
}

text_key.addEventListener("keydown", onkeydown_text_key);

function onkeydown_text_key(e) {
    if (e.keyCode == 13) {
        key = text_key.value;
        text_key.value = "";
    }
}

function onclick_btn_test() {
    console.log(select_onsite.options[select_onsite.selectedIndex].value);
    let line_uid = "U7d97232f259c299dca82a5fd761debc3";
    let hash = CryptoJS.HmacSHA256(line_uid, key);
    hash = hash.toString(CryptoJS.enc.Hex);
    let data = {
        'action': '主日簽到',
        'line_uid': line_uid,
        'onsite_online': select_onsite.options[select_onsite.selectedIndex].value,
        'valid_code': hash,
    };
    fetch('https://script.google.com/macros/s/AKfycbwwjcUC9Z9Vya_myJ1kRNbDANiwdaaDmDgOSwVaMO7icD6EXtd24GtRSac3GvwSmLNB/exec', 
        {
            body: JSON.stringify(data),
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'omit', // include, same-origin, *omit
            headers: {
                'user-agent': 'scanner',
                'content-type': 'application/json'
            },
            mode: 'no-cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        }
    ).then((response) => {
        console.log(response);
    }).then(result => {
        console.log(result);
    }).catch((err) => {
        console.log('錯誤:', err);
    });
}