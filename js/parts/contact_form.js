let contactForm = document.getElementById('form'),
    contactInput = contactForm.getElementsByTagName('input');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    contactForm.appendChild(statusMesage);

    let formData = new FormData(contactForm);

    function postData() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    resolve();
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300)
                        resolve();
                } else {
                    reject();
                }
            };
            request.send(json);
        });
    }

    function clearInput() {
        for (let i = 0; i < contactInput.length; i++) {
            contactInput[i].value = '';
        }
    }

    postData(formData)
        .then(() => statusMesage.innerHTML = message.loading)
        .then(() => statusMesage.innerHTML = message.success)
        .then(() => statusMesage.innerHTML = message.failure)
        .then(clearInput);

});