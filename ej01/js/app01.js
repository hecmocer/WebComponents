
// Creamos prototipo
var wcNewsPrototype = Object.create(HTMLElement.prototype);
var doc = document.currentScript.ownerDocument;

// Funcion de iniciliación del prototipo
wcNewsPrototype.createdCallback = function(){
    // This apunta al nodo hosts
    var root = this.createShadowRoot();
    var template = doc.querySelector('#news').content;
    // Toma los campos y los rellena en el template
    template.querySelector('.header').textContent = this.querySelector('wc-news-header').textContent;
    template.querySelector('.body').textContent = this.querySelector('wc-news-body').textContent;
    template.querySelector('img').src = this.querySelector('wc-news-img').textContent;
    root.appendChild(template.cloneNode(true));
}

// Registra el elemento para añadir la etiqueta
var News = document.registerElement(
    'wc-news',
    { prototype: wcNewsPrototype }
);