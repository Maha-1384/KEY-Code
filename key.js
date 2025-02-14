const output = document.querySelector('#inpo');

function info(e) {
    document.querySelector('#o1').innerText = e.key;
    document.querySelector('#o2').innerText = e.keyCode;
    document.querySelector('#o3').innerText = e.code;
    
    output.value = '';
}

output.addEventListener('keydown', info);



