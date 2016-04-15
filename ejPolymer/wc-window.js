(function(){

    Polymer ({
        is: 'wc-window',
        properties: {
            kiosk: {
                type: String,
                value: "default"
            }
        },
        ready: function(){
            var self = this;
            Polymer.dom(this)
            .querySelectorAll("wc-movie")
            .forEach( function(movie){

                movie.addEventListener('click', function(e){

                    var ticket = new Ticket();
                    ticket.title = movie.title;
                    ticket.theater = movie.theater;
                    ticket.room = movie.room;
                    ticket.time = e.target.value;

                    var kiosko = Polymer.dom(self).parentNode.querySelector(self.kiosk);
                    kiosko.addTicket(ticket);
                })
            })
        }
    });
})();