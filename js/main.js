function loadContent(pageName) {
    const xhr = new XMLHttpRequest;
    xhr.open("get", `pages/${pageName}.html`);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let container = document.getElementById("container");
            container.innerHTML = this.responseText;
        }
    }

}
loadContent('football');
var links = document.querySelectorAll('.nav-link');

links.forEach(element => {
    element.addEventListener('click', function (e) {
        var pagina = e.target.rel;
        location.hash = pagina;

    });
});
