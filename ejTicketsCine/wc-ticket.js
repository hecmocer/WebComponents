(function(){

    Ticket = Polymer ({
        is: 'wc-ticket',
        properties: {
            title: {
                type: String,
                value: "Titulo por defecto"
            },
            theater: {
                type: String,
                value: "Default"
            },
            room: {
                type: String,
                value: "0"
            },
            img: {
                type: String,
                value: "http://placehold.it/50x50"
            },
            time: {
                type: String,
                value: "0"
            }
        }
    });
})();