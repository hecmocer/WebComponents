// Span con el resultado
var result = 0;

// Inicialización del host, el shadow root y su contenido
var host = document.querySelector('#host');
var root = host.createShadowRoot();
root.innerHTML = document.querySelector('#innerHTMLjavascript').textContent;

// Event listener del shadow dom
root.querySelector('#button01').addEventListener('click', function(){
    root.querySelector('#number01').innerHTML = result++;
})