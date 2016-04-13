
// Creamos prototipo
var wcNewsPrototype = Object.create(HTMLElement.prototype);

// Funcion de iniciliación del prototipo
wcNewsPrototype.createdCallback = function(){
    // This apunta al nodo hosts
    var root = this.createShadowRoot();
    var template = document.querySelector('#news').content;
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

// Sobra ya que lo hace automaticamente en el HTML
//var news01 = new News();
//var news02 = new News();
//document.body.appendChild(news01);
//document.body.appendChild(news02);