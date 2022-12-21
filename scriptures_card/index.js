liff.init({
    'liffId':  '1657754998-0PAZxgke',
}).then(function() {
    // 這邊開始寫使用其他功能
    if (!liff.isLoggedIn()){
        liff.login();
    }
    else {
        liff.getProfile()
        .then(profile => {
            let line_uid = profile.userId;
            let displayName = profile.displayName;
            let data = {
                'action': '取得2023經文卡',
                'line_uid': line_uid,
                'line_displayName': displayName
            };
            var hash = CryptoJS.HmacSHA256(line_uid, '2023');
            hash = hash.toString(CryptoJS.enc.Hex);
            let value = 0;
            for(let i = 0; i < hash.length; i++) {
              value += hash.charCodeAt(i);
            }
            value = (value%223)+1
            let div_container = document.getElementById('div_container');
            div_container.innerHTML=`<img class="img_card" src="img/2023新年經文${value}.jpg">`
        })
        .catch((err) => {
            liff.logout();
            location.reload();
            alert(`profile err: ${err}`);
        });
    }
    
}).catch(function(err) {
    alert(`init err: ${err}`);
});
