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
            time: {
                type: String,
                value: "0"
            }
        }
    });
})();