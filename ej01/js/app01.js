// Span con el resultado
var result = 0;

// Inicialización del host, el shadow root y su contenido
var host = document.querySelector('#host');
var root = host.createShadowRoot();
root.innerHTML = document.querySelector('#HTMLimport').textContent;
