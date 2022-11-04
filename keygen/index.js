
const board = navigator.clipboard;

function gen_key(){
var message= document.getElementById("message");
var key = document.getElementById("key");
var target_key = document.getElementById("target_key");
if (message.value=="") return;
if (key.value=="") return;
var hash = CryptoJS.HmacSHA256(message.value, key.value);
hash = hash.toString(CryptoJS.enc.Hex);
    console.log(hash);

var target = "";
for (let i = 0; i < hash.length; i += 2)
{
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
            if (num < 26)
            {
                let ch = num + 'a'.charCodeAt(0);
                target += String.fromCharCode(ch);
            }
            else
            {
                target += (num - 26).toString();
            }
        }
}
target_key.value = target;
}

function cut_key(){
var cut= document.getElementById("cut");
var target_key = document.getElementById("target_key");
var cut_key = document.getElementById("cut_key");
if (cut.value=="") return;
if (target_key.value=="") return;

cut_key.value = target_key.value.substring(0, parseInt(cut.value));
}

function isLetter(char){
    return ( (char >= 'A' &&  char <= 'Z') ||
            (char >= 'a' &&  char <= 'z') );
}


function upper(){
var target_key = document.getElementById("target_key");
var cut_key = document.getElementById("cut_key");
if (target_key=="") return;
var index = 0;
for (let i = 0; i < target_key.value.length; i++) {
    if (isLetter(target_key.value[i])) {
        index = i;
        break;
    }
}
if (index == target_key.value.length) return;
target_key.value = target_key.value.substring(0, index) + target_key.value[index].toUpperCase() + target_key.value.substring(index+1);
if (cut_key.value=="") return;
cut_key.value = cut_key.value.substring(0, index) + cut_key.value[index].toUpperCase() + cut_key.value.substring(index+1);

}

function lower(){
var target_key = document.getElementById("target_key");
var cut_key = document.getElementById("cut_key");
if (index == target_key.value.length) return;
var index = 0;
for (let i = 0; i < target_key.value.length; i++) {
    if (isLetter(target_key.value[i])) {
        index = i;
        break;
    }
}
if (index == target_key.value.length) return;
target_key.value = target_key.value.substring(0, index) + target_key.value[index].toLowerCase() + target_key.value.substring(index+1);
if (cut_key.value=="") return;
cut_key.value = cut_key.value.substring(0, index) + cut_key.value[index].toLowerCase() + cut_key.value.substring(index+1);

}

function copy_target_key(){
var target_key = document.getElementById("target_key");
    navigator.clipboard.writeText(target_key.value)
}

function copy_cut_key(){
var cut_key = document.getElementById("cut_key");
    navigator.clipboard.writeText(cut_key.value)
}

function view(){
var btn_view = document.getElementById("btn_view");
var message = document.getElementById("message");
var key = document.getElementById("key");
var target_key = document.getElementById("target_key");
var cut_key = document.getElementById("cut_key");
    if (btn_view.value == "view") {
        target_key.type = "text";
        cut_key.type = "text";
        btn_view.value = "hide";
    }
    else {
        target_key.type = "password";
        cut_key.type = "text";
        btn_view.value = "view";
    }
}