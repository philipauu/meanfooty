console.log('loaded frontend app');

var frontend_app = angular.module('players', []);

frontend_app.controller('player_data', do_data);

function do_data($scope, $http) {
    console.log('inside do_data');

    $scope.read = function () {
        console.log('reading all records');

        $http.get('/api/v4/read')
            .then(function (results) {
                console.log(results);
                $scope.players = results.data;
            });
    }

    $scope.read();

    $scope.create = function () {
        console.log('creating new player');

        var data = {
            name: $scope.input.name,
            age: $scope.input.age,
            gender: $scope.input.gender,
            foot: $scope.input.foot,
            nationality: $scope.input.nationality
        };

        $http.post('/api/v4/create', data)
            .then(function (result) {
                console.log(result);
                $scope.message = result.data.message;
                $scope.read();
            });
    }

    $scope.update = function (player) {
        console.log('updating player');
        console.log(player);

        $http.put('/api/v4/update', player)
            .then(function (result) {
                console.log(result);
                $scope.message = result.data.message;
                $scope.read();
            });
    }

    $scope.delete = function (player) {
        console.log('deleting player');
        console.log(player);
        $http.delete('/api/v4/delete' + player._id)
            .then(function (result) {
                console.log(result);
                $scope.message = result.data.message;
                $scope.read();
            });
    }

}