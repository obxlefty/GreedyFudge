'use strict';

angular.module('games').directive('board', function () {
    return {
        restrict: 'E',
        templateUrl: 'modules/games/views/board.client.view.html'
    };
}).directive('player', function () {
    return {
        restrict: 'E',
        templateUrl: 'modules/games/views/player.client.view.html'
    };
});