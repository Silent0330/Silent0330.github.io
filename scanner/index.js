var cam_off = true;
const input_cam_switch = document.getElementById("input_cam_switch");
const select_onsite = document.getElementById("select_onsite");
const html5QrCode = new Html5Qrcode("reader");
const config = {
    fps: 25,
    qrbox: {
        width: 640,
        height: 640
    }
};

let initial = false; 
var line_uid = '';
var key = '';

liff.init({
    'liffId':  '1657500811-r2lOxyne',
}).then(function() {
    // 這邊開始寫使用其他功能
    liff.getProfile()
    .then(profile => {
        line_uid = profile.userId;
        let data = {
            'action': 'get_key',
            'line_uid': line_uid
        };
        fetch('https://script.google.com/macros/s/AKfycbyhphd70WeEC5jiogYx-BtihI6fPnHpuRhXXjRp21y-qpe3ea8-ul5i6uvNjl33JQpF/exec', 
            {
                body: JSON.stringify(data),
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                credentials: 'omit', // include, same-origin, *omit
                headers: {
                    'user-agent': 'scanner',
                    'content-type': 'application/json'
                },
                mode: 'same-origin', // no-cors, cors, *same-origin
                redirect: 'follow', // manual, *follow, error
                referrer: 'client', // *client, no-referrer
            }
        ).then((response) => {
            alert(`respnse: ${response}`);
            initial = true;
        }).then(result => {
            alert(`result: ${result}`);
        }).catch((err) => {
            alert(`get_key err: ${err}`);
        });
    })
    .catch((err) => {
        alert(`profile err: ${err}`);
    });
    
}).catch(function(err) {
    alert(`init err: ${err}`);
});

const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    if (initial) {
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
        fetch('https://script.google.com/macros/s/AKfycbyhphd70WeEC5jiogYx-BtihI6fPnHpuRhXXjRp21y-qpe3ea8-ul5i6uvNjl33JQpF/exec', 
            {
                body: JSON.stringify(data),
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                credentials: 'omit', // include, same-origin, *omit
                headers: {
                    'user-agent': 'scanner',
                    'content-type': 'application/json'
                },
                mode: 'same-origin', // no-cors, cors, *same-origin
                redirect: 'follow', // manual, *follow, error
                referrer: 'client', // *client, no-referrer
            }
        ).then((response) => {
            console.log(response);
        }).then(result => {
            console.log(result);
        }).catch((err) => {
            console.log('錯誤:', err);
        });
    }
    else {
      alert('初始失敗');
    }
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

function onclick_page_key_scanner() {
  let data = {
      'action': '主動掃描',
      'line_uid': line_uid,
  };
  let form = document.createElement('form');
  form.method = 'post';
  form.action = '/';
  document.body.appendChild(form);

  for (const key in data) {
      const formField = document.createElement('input');
      formField.type = 'hidden';
      formField.name = key;
      formField.value = data[key];

      form.appendChild(formField);
  }
  form.submit();
}