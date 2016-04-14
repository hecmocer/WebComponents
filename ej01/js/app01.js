var counter = 0;

// Creamos prototipo
var wcBtnPrototype = Object.create(HTMLButtonElement.prototype);

// Funcion de iniciliación del prototipo
wcBtnPrototype.createdCallback = function(){
    this.addEventListener('click', function(){
        counter++;
        document.querySelector('#counter').innerHTML = counter;
    });

}

// Registra el elemento para añadir la etiqueta
var wcBtn = document.registerElement(
    'wc-button',
    { extends: 'Button',
    prototype: wcBtnPrototype }
    );