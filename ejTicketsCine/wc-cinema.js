(function(){

    var index = 0;

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

            if(index === 0){

                this.push('movies', {
                    title: "Star Wars",
                    room: "25",
                    theater: "Kinepolis",
                    image: "http://trailers.apple.com/trailers/lucasfilm/starwarstheforceawakens/images/background.jpg"
                });
                this.push('movies', {
                    title: "The Hateful Eight",
                    room: "10",
                    theater: "Kinepolis",
                    image: "http://trailers.apple.com/trailers/weinstein/thehatefuleight/images/background.jpg"
                });
                this.push('movies', {
                    title: "The Revenant",
                    room: "3",
                    theater: "Kinepolis",
                    image: "http://trailers.apple.com/trailers/fox/therevenant/images/background.jpg"
                });
                this.push('movies', {
                    title: "Doctor Strange",
                    room: "2",
                    theater: "Kinepolis",
                    image: "http://trailers.apple.com/trailers/marvel/marvelsdoctorstrange/images/background.jpg"
                });
                this.push('movies', {
                    title: "Angry Birds",
                    room: "5",
                    theater: "Kinepolis",
                    image: "http://trailers.apple.com/trailers/sony_pictures/theangrybirdsmovie/images/background.jpg"
                });

            }else{

                this.push('movies', {
                    title: "Zootopía",
                    room: "12",
                    theater: "CineBox",
                    image: "http://trailers.apple.com/trailers/disney/zootopia/images/background.jpg"
                });
                this.push('movies', {
                    title: "DeadPool",
                    room: "24",
                    theater: "CineBox",
                    image: "http://trailers.apple.com/trailers/fox/deadpool/images/background.jpg"
                });
                this.push('movies', {
                    title: "Suicide Squad",
                    room: "23",
                    theater: "CineBox",
                    image: "http://trailers.apple.com/trailers/wb/suicidesquad/images/background.jpg"
                });
                this.push('movies', {
                    title: "The Jungle Book",
                    room: "10",
                    theater: "CineBox",
                    image: "http://trailers.apple.com/trailers/disney/thejunglebook/images/background.jpg"
                });
                this.push('movies', {
                    title: "Fantastic Beasts",
                    room: "11",
                    theater: "CineBox",
                    image: "http://trailers.apple.com/trailers/wb/fantasticbeastsandwheretofindthem/images/background.jpg"
                });
            }

            index++;

        }
    });
})();