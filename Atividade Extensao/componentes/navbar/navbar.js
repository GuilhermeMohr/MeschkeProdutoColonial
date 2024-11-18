function loadNavbar(){
    fetch('/componentes/navbar/navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbar-mainpage').innerHTML = data)
}

document.addEventListener('DOMContentLoaded', loadNavbar);