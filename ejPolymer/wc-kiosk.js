(function(){

    Polymer ({
        is: 'wc-kiosk',
        addTicket: function(ticket){
            this.querySelector('#kiosko').appendChild(ticket);
        }
    });
})();