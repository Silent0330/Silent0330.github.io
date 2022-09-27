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
        form.action = 'https://script.google.com/macros/s/AKfycbyn35dQJrPRQqR9Qq7LF0Zgs3A4koMAcR1eHKy46MUSK8jR4t-HBDpGQ_m-iIZz6JiCaQ/exec';
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