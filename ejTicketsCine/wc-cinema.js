(function(){

    Polymer ({
        is: 'wc-cinema',
        properties: {
            movies: {
                type: Array,
                notify: true,
                value: function() { return []; }

            }
        },
        ready: function(){

            this.push('movies', {
                title: "Star Wars",
                room: "25",
                image: "http://trailers.apple.com/trailers/lucasfilm/starwarstheforceawakens/images/background.jpg"
            });
            this.push('movies', {
                title: "The Hateful Eight",
                room: "10",
                image: "http://trailers.apple.com/trailers/weinstein/thehatefuleight/images/background.jpg"
            });
            this.push('movies', {
                title: "The Revenant",
                room: "3",
                image: "http://trailers.apple.com/trailers/fox/therevenant/images/background.jpg"
            });
            this.push('movies', {
                title: "Zootopía",
                room: "12",
                image: "http://trailers.apple.com/trailers/disney/zootopia/images/background.jpg"
            });
            this.push('movies', {
                title: "DeadPool",
                room: "24",
                image: "http://trailers.apple.com/trailers/fox/deadpool/images/background.jpg"
            });
        }
    });
})();