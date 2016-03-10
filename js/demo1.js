var NewController = function($scope) {
    $scope.name = 'hello world';
}

var New1Controller = function($scope){
    $scope.name = 'aaaaaaaaaaaa';
    $scope.time = new Date();
    setInterval(function(){
        $scope.apply(function(){
            $scope.time = new Date();
        })
    },1000)
}