liff.init({
    'liffId':  '1657500742-LzQ6REdP',
}).then(function() {
    // 這邊開始寫使用其他功能
    liff.getProfile()
    .then(profile => {
        const context = liff.getContext();
        let line_group_uid = context.groupId;
        let line_uid = profile.userId;
        let displayName = profile.displayName;
        let pictureUrl = profile.pictureUrl;
        let data = {
            'action': '人數回報頁面',
            'line_group_uid': line_group_uid,
            'line_uid': line_uid,
            'line_displayName': displayName,
            'line_pictureUrl': pictureUrl
        };
        let form = document.createElement('form');
        form.method = 'post';
        form.action = 'https://script.google.com/macros/s/AKfycbzkbbydwR-hdsaaDMz4s3-i5cROcGIiW1ljC04P99Ivxpg1AJXZv1yVUnSsmf-BQlawwQ/exec';
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