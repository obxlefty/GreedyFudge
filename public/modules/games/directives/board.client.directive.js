angular.module('games').directive('board', function () {
    return {
        restrict: "E",
        template: '<h2>Round: <span class="label label-success">0</span></h2><div>question directive</div><div>list of player directives</div>'
    }
})