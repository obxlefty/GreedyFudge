'use strict';

angular.module('articles').controller('GamesController', function ($scope) {
    $scope.players = ['player1', 'player2'];
    $scope.questions = ['round 1', 'round2'];
});