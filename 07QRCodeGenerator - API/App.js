let main = document.getElementById('main');
let input = document.getElementById('input');
let button = document.getElementById('submit');
let QRcodeImg = document.getElementById('img');

button.addEventListener('click', () => {
    QRgenerator()
})

async function QRgenerator() {
    let data = input.value;
    console.log(data); 
    let QRcode = await fetch('https://api.qrserver.com/v1/create-qr-code/?data=' + data + '&amp;size=50x50', {
        headers: {
            'Accept': 'application/json'
        }
    })
    console.log(QRcode.url);
    QRcodeImg.setAttribute('src', QRcode.url);
    main.style.height = '700px';
    QRcodeImg.style.marginLeft = '26%';
    QRcodeImg.style.display = 'block';
    console.log(QRcodeImg.getAttribute('src'));
}