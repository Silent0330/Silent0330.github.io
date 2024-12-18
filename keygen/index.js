
const board = navigator.clipboard;

function gen_key() {
    const input_message = document.getElementById("input_message");
    const input_key = document.getElementById("input_key");
    const generated_key = document.getElementById("generated_key");
    if (input_message.value == "") return;
    if (input_key.value == "") return;
    var hash = CryptoJS.HmacSHA256(input_message.value, input_key.value);
    hash = hash.toString(CryptoJS.enc.Hex);

    var target = "";
    for (let i = 0; i < hash.length; i += 2) {
        let num = (hash.charCodeAt(i) + hash.charCodeAt(i + 1));
        if (i == 0) {
            num = num % 26;
            let ch = num + 'a'.charCodeAt(0);
            target += String.fromCharCode(ch);
        }
        else if (i == 2) {
            num = num % 10;
            target += num.toString();
        }
        else {
            num = num % 36;
            if (num < 26) {
                let ch = num + 'a'.charCodeAt(0);
                target += String.fromCharCode(ch);
            }
            else {
                target += (num - 26).toString();
            }
        }
    }
    generated_key.value = target;
}

function copy_result() {
    const isUppercase = document.getElementById('check_uppercase').checked;
    const isSpecial = document.getElementById('check_special').checked;
    const isCut = document.getElementById('check_cut').checked;

    let result = document.getElementById('generated_key').value;
  
    if (isUppercase) {
        result = result[0].toUpperCase() + result.substring(1);
    }
    
    if (isSpecial) {
        result = "_" + result;
    }

    if (isCut) {
      const cutValue = document.getElementById('input_cut').value;
      result = result.substring(0, cutValue);
    }

    navigator.clipboard.writeText(result)
}

function view() {
    var btn_view = document.getElementById("btn_view");
    var generated_key = document.getElementById("generated_key");
    if (btn_view.value == "顯示") {
        generated_key.type = "text";
        btn_view.value = "隱藏";
    }
    else {
        generated_key.type = "password";
        btn_view.value = "顯示";
    }
}