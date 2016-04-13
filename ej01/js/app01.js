// Span con el resultado
var result = 0;

// Inicialización del host, el shadow root y su contenido
var host = document.querySelector('#host');
var root = host.createShadowRoot();
root.innerHTML = "<div id='shadowHost'>Este es el nodo host en la sombra.</div> <shadow></shadow>"

var shadowHost = root.querySelector('#shadowHost');
var shadowRoot = shadowHost.createShadowRoot();
shadowRoot.innerHTML = "Este es el contenido del nodo anidado. <shadow></shadow>";
