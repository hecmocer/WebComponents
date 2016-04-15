(function(){

    Polymer ({
        is: 'wc-test',
        properties: {
            kiosk : Object
        },
        ready: function(){
            this.kiosk = this.$.k;
        }
    });
})();