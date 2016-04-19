(function(){

    Polymer({
        is: "wc-selector",
        properties: {
            selected: {
                type: Number,
                value: 0,
                notify: true
            },
            data: {
                type: Array,
                value: function(){ return []; },
                notify: true
            }
        },
        ready: function(){

            var self = this;

            this.async(function(){
                self.data = Polymer.dom(self).children[0].movies;
            }, 500)

            self.querySelector('#botonCambiar').addEventListener('click', function(e){

                self.selected++;
                self.selected = self.selected % Polymer.dom(self).children.length

                self.data = Polymer.dom(self).children[self.selected].movies;
            })
        }
    });
})();