// setInterval(animation,2000)
// var frame = 0;
// function animation() {
//     let div_card_01 = document.getElementById('div_card_01');
//     let div_card_02 = document.getElementById('div_card_02');
//     let div_card_03 = document.getElementById('div_card_03');
//     let div_card_04 = document.getElementById('div_card_04');
//     if (frame == 0) {
//         div_card_01.style.zIndex = 4;
//         div_card_02.style.zIndex = 3;
//         div_card_03.style.zIndex = 2;
//         div_card_04.style.zIndex = 1;
//         div_card_03.style.transform = "translate(0%, -200%)";
//         if (Math.random() > 0.5) {
//             div_card_01.style.transform = "translate(50%, 150%)";
//         }
//         else {
//             div_card_01.style.transform = "translate(-50%, 150%)";
//         }
//     }
//     else if (frame == 1) {
//         div_card_02.style.zIndex = 4;
//         div_card_03.style.zIndex = 3;
//         div_card_04.style.zIndex = 2;
//         div_card_01.style.zIndex = 1;
//         div_card_04.style.hidden = false;
//         div_card_01.style.hidden = true;
//         div_card_04.style.transform = "translate(0%, -300%)";
//         if (Math.random() > 0.5) {
//             div_card_02.style.transform = "translate(50%, 50%)";
//         }
//         else {
//             div_card_02.style.transform = "translate(-50%, 50%)";
//         }
//     }
//     else if (frame == 2) {
//         div_card_03.style.zIndex = 4;
//         div_card_04.style.zIndex = 3;
//         div_card_01.style.zIndex = 2;
//         div_card_02.style.zIndex = 1;
//         div_card_01.style.transform = "translate(0%, 0%)";
//         if (Math.random() > 0.5) {
//             div_card_03.style.transform = "translate(50%, -50%)";
//         }
//         else {
//             div_card_03.style.transform = "translate(-50%, -50%)";
//         }
//     }
//     else if (frame == 3) {
//         div_card_04.style.zIndex = 4;
//         div_card_01.style.zIndex = 3;
//         div_card_02.style.zIndex = 2;
//         div_card_03.style.zIndex = 1;
//         div_card_02.style.transform = "translate(0%, -100%)";
//         if (Math.random() > 0.5) {
//             div_card_04.style.transform = "translate(50%, -150%)";
//         }
//         else {
//             div_card_04.style.transform = "translate(-50%, -150%)";
//         }
//     }
//     frame = (frame+1)%4;
// }