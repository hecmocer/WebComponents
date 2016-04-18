(function(){

    Polymer ({
        is: 'wc-test',
        properties: {
            kiosk : Object,
            movies: {
                type: Array,
                value: function(){ return []; },
                notify: true
            },
            m1: {
                type: Array,
                value: function(){ return []; },
                notify: true
            },
            m2: {
                type: Array,
                value: function(){ return []; },
                notify: true
            }
        },
        ready: function(){

            this.kiosk = this.$.k;
        }
    });
})();