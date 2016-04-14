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
                value: "Kinepolis"
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
            ticket: {
                type: String,
                readonly: true,
                computed: 'getTicket(title, theater, sesion, time)'
            }
        },

        getCode : function(title, theater, sesion){
            return title + "-" + theater + "-" + sesion;
        },

        getTicket : function(title, theater, sesion, time){
            return title + "-" + theater + "-" + sesion + "-" + time;
        }
    });
})();