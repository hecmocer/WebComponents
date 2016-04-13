// Span con el resultado
var result = 0;

// Inicialización del host, el shadow root y su contenido
var host = document.querySelector('#host');
var root1 = host.createShadowRoot();
var root2 = host.createShadowRoot();
var root3 = host.createShadowRoot();
root1.innerHTML = "(1 Antes) <shadow></shadow> (1 Después)";
root2.innerHTML = "(2 Antes) <shadow></shadow> (2 Después)";
root3.innerHTML = "Contenido Capa 3: <shadow></shadow>";