(function(){

    Polymer ({
        is: 'wc-window',
        ready: function(){
            Polymer.dom(this)
            .querySelectorAll("wc-movie")
            .forEach( function(movie){

                movie.addEventListener('click', function(e){
                    console.log("Click: ", e.target.value);
                    // var ticket = new Ticket();
                    // ticket.title = title;
                    // ticket.session = session;

                    // var kiosko = Polymer.dom(this).querySelector(this.kiosk)
                    // AddTicket (ticket)
                })
            })
        }
    });
})();