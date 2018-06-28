async function Characters() {
    const div = document.createElement('div');
    // div.innerHTML = 'Characters';
    const xhttp = new XMLHttpReuest();
    xhttp.onreadtystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            div.innerText = this.responseText;
        } else {
            div.innerHTML = 'XHR failed';
        }
    }
    xhttp.open('GET', 'https://swapi.co/api/people', true);
    xhttp.send();
    return div;
}





