var beersApp = angular.module('BeersApp', [])
    .controller('ListController', function ($scope, $http){
        $http.get('../data/beers.json').then(function (result){
            $scope.beers = result.data.data;
        });

        $scope.filterByRange = 0;
        $scope.orderBy = 'name';
        $scope.min = 0;
        $scope.max = 14;

});

