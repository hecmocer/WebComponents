(function(){

    Polymer ({
        is: 'wc-component',
        ready: function(){
            this.$.texto.textContent = "Este es el texto";
            this.$.imagen.src = "http://placehold.it/350x150";
        }

    });

})();