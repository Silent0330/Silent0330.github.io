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
        form.action = 'https://script.google.com/macros/s/AKfycbwL4yeO8WmQpGtxffvxc0_XE4pgsokTrsihB2l5wu0Pypt1SnfJGnaZfTLaPbYIyx6x/exec';
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