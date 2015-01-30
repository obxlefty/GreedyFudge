'use strict';

angular.module('games').factory('Spotify', ['$http',
    function($http) {
        // Spotify service logic
        // ...

        var query = 'https://api.spotify.com/v1/search?q=a&type=album&market=US&limit=20&offset=5';
        var get_albums_query = 'https://api.spotify.com/v1/albums?ids=';

        // Public API
        return {
            top20: function() {
                var albums = [];
                var ans = [];
                $http.get(query).success(function(data, status) {
                    angular.forEach(data.albums.items, function(value, key) {
                        albums.push(value.id);
                    });

                    var a_q = get_albums_query + albums.join();
                    $http.get(a_q).success(function(data, status) {

                        angular.forEach(data.albums, function(value, key) {

                            ans.push({
                                albumName: value.name,
                                artistsName: value.artists[0].name
                            });

                        });

                    });
                });

                return ans;
            }
        };
    }
]);
