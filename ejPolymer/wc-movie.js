(function(){

    Polymer ({
        is: 'wc-movie',
        properties: {
            title: {
                type: String,
                value: "Default"
            },
            imageSrc: {
                type: String,
                value: "http://placehold.it/350x150"
            },
            theater: {
                type: String,
                value: "default"
            },
            sesion: {
                type: String,
                value: "default"
            },
            code: {
                type: String,
                readonly: true,
                computed: 'getCode(title, theater, sesion)'
            },
        },

        getCode : function(title, theater, sesion){
            return title + " " + theater + " " + sesion;
        }
    });
})();