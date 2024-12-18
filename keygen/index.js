
const board = navigator.clipboard;

function gen_key() {
    const input_message = document.getElementById("input_message");
    const input_key = document.getElementById("input_key");
    const generated_key = document.getElementById("generated_key");
    if (input_message.value == "") return;
    if (input_key.value == "") return;
    var hash = CryptoJS.HmacSHA256(input_message.value, key.value);
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

function copy_generated_key() {
    const isUppercase = document.getElementById('uppercase').checked;
    const isCut = document.getElementById('cut_option').checked;

    let result = document.getElementById('generated_key').value;
  
    if (isUppercase) {
        result = result.substring(0, index) + result[index].toUpperCase() + result.substring(index + 1);
    }

    if (isCut) {
      const cutValue = document.getElementById('input_cut').value;
      result = result.substring(0, cutValue.length);
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