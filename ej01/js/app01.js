
function createNew(container, header, body){
    var root = document.querySelector(container).createShadowRoot();
    var template = document.querySelector("#news").content;
    template.querySelector(".header").textContent = header;
    template.querySelector(".body").textContent = body;
    root.appendChild(template.cloneNode(true));
}

createNew("#news-01", "Este es el título", "Lorem Ipsum Dolor Sit Amet");
createNew("#news-02", "La siguiente noticia es...", "la noticia es esta: bla bla bla");