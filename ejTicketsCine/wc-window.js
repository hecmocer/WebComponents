(function(){

    Polymer ({
        is: 'wc-window',
        properties: {
            kiosk: Object,
            movies: {
                type: Array,
                value: function(){ return []; }
            }
        },
        ready: function(){
            this.listen (this, 'action', 'onAction');
        },

        onAction: function(e, detail){

            var ticket = new Ticket();
            ticket.title = detail.title;
            ticket.theater = detail.theater;
            ticket.room = detail.room;
            ticket.time = detail.time;

            this.kiosk.addTicket(ticket);
        }
    });
})();