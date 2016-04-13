// Span con el resultado
var result = 0;

// Inicialización del host, el shadow root y su contenido
var host = document.querySelector('#host');
var root1 = host.createShadowRoot();
var root2 = host.createShadowRoot();
var root3 = host.createShadowRoot();
root1.innerHTML = "Contenido Capa 1";
root2.innerHTML = "Contenido Capa 2";
root3.innerHTML = "Contenido Capa 3";