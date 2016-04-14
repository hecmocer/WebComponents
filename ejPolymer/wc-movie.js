(function(){

    Polymer ({
        is: 'wc-movie',
        ready: function(){
            this.$.titulo.textContent = "Título de la película:";
            this.$.portada.src = "http://placehold.it/350x150";
        }

    });

})();