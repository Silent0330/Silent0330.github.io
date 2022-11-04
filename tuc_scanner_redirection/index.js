liff.init({
    'liffId':  '1657500811-r2lOxyne',
}).then(function() {
    // 這邊開始寫使用其他功能
    liff.getProfile()
    .then(profile => {
        let line_uid = profile.userId;
        let displayName = profile.displayName;
        let pictureUrl = profile.pictureUrl;
        let data = {
            'action': '自助報到',
            'line_uid': line_uid,
            'line_displayName': displayName,
            'line_pictureUrl': pictureUrl
        };
        let form = document.createElement('form');
        form.method = 'post';
        form.action = 'https://script.google.com/macros/s/AKfycbwvecF1PCm9vHVhP_kGCOMcVGBTC390xwOre7YEQdCOHAmbyfupYcr08jgN0j8mV4ay/exec';
        document.body.appendChild(form);

        for (const key in data) {
            const formField = document.createElement('input');
            formField.type = 'hidden';
            formField.name = key;
            formField.value = data[key];

            form.appendChild(formField);
        }
        form.submit();
    })
    .catch((err) => {
        alert(`profile err: ${err}`);
    });
    
}).catch(function(err) {
    alert(`init err: ${err}`);
});