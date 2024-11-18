function loadNavlogo(){
    fetch('/componentes/navlogo/navlogo.html')
        .then(response => response.text())
        .then(data => {
            let index = data.indexOf('</h1>');
            print(index);
            document.getElementById('navlogo-mainpage').innerHTML = data.slice(0, index) + document.getElementById('navlogo-mainpage').innerHTML + data.slice(index, data.length-1);
        })
}

document.addEventListener('DOMContentLoaded', loadNavlogo);
