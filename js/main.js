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
loadContent('allSports');
var links = document.querySelectorAll('.nav-link');
links.forEach(link => link.style.cursor = "pointer")

links.forEach(element => {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
        let page = e.target.rel;
        location.hash = page;
    });
    window.addEventListener("hashchange", function () {
        loadContent(location.hash.split('#')[1])
    })
});
