setInterval(animation,2000)
var frame = 0;
function animation() {
    let div_card_01 = document.getElementById('div_card_01');
    let div_card_02 = document.getElementById('div_card_02');
    let div_card_03 = document.getElementById('div_card_03');
    let div_card_04 = document.getElementById('div_card_04');
    if (frame == 0) {
        div_card_01.style.zIndex = 4;
        div_card_02.style.zIndex = 3;
        div_card_03.style.zIndex = 2;
        div_card_04.style.zIndex = 1;
        div_card_03.style.transform = "translate(0%, -200%)";
        if (Math.random() > 0.5) {
            div_card_01.style.transform = "translate(50%, 150%)";
        }
        else {
            div_card_01.style.transform = "translate(-50%, 150%)";
        }
    }
    else if (frame == 1) {
        div_card_02.style.zIndex = 4;
        div_card_03.style.zIndex = 3;
        div_card_04.style.zIndex = 2;
        div_card_01.style.zIndex = 1;
        div_card_04.style.hidden = false;
        div_card_01.style.hidden = true;
        div_card_04.style.transform = "translate(0%, -300%)";
        if (Math.random() > 0.5) {
            div_card_02.style.transform = "translate(50%, 50%)";
        }
        else {
            div_card_02.style.transform = "translate(-50%, 50%)";
        }
    }
    else if (frame == 2) {
        div_card_03.style.zIndex = 4;
        div_card_04.style.zIndex = 3;
        div_card_01.style.zIndex = 2;
        div_card_02.style.zIndex = 1;
        div_card_01.style.transform = "translate(0%, 0%)";
        if (Math.random() > 0.5) {
            div_card_03.style.transform = "translate(50%, -50%)";
        }
        else {
            div_card_03.style.transform = "translate(-50%, -50%)";
        }
    }
    else if (frame == 3) {
        div_card_04.style.zIndex = 4;
        div_card_01.style.zIndex = 3;
        div_card_02.style.zIndex = 2;
        div_card_03.style.zIndex = 1;
        div_card_02.style.transform = "translate(0%, -100%)";
        if (Math.random() > 0.5) {
            div_card_04.style.transform = "translate(50%, -150%)";
        }
        else {
            div_card_04.style.transform = "translate(-50%, -150%)";
        }
    }
    frame = (frame+1)%4;
}

// liff.init({
//     'liffId':  '1657754998-0PAZxgke',
// }).then(function() {
//     // 這邊開始寫使用其他功能
//     const context = liff.getContext();
//     console.log(context);
//     if (!liff.isLoggedIn()){
//         liff.login();
//     }
//     else {
//         liff.getProfile()
//         .then(profile => {
//             let line_uid = profile.userId;
//             let displayName = profile.displayName;
//             let data = {
//                 'action': '取得2023經文卡',
//                 'line_uid': line_uid,
//                 'line_displayName': displayName
//             };
//             console.log(data);
//             let form = document.createElement('form');
//             form.method = 'post';
//             form.action = 'https://script.google.com/macros/s/AKfycbx87Gml8O2RK6_-YobYBVqTwFrDe_dJCojp46ZONh4I7UQ5NZ1e-mECVZRSdCh32KpwIw/exec';
//             document.body.appendChild(form);
    
//             for (const key in data) {
//                 const formField = document.createElement('input');
//                 formField.type = 'hidden';
//                 formField.name = key;
//                 formField.value = data[key];
    
//                 form.appendChild(formField);
//             }
//             form.submit();
//         })
//         .catch((err) => {
//             alert(`profile err: ${err}`);
//         });
//     }
    
// }).catch(function(err) {
//     alert(`init err: ${err}`);
// });
