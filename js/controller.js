signUpModule.controller('SignUpController', ['$scope', function($scope) {
    $scope.userinfo = {username: null, firstname: null, lastname: null,
        password: null, termsaccepted: false, gender: 'male'}
    $scope.userinfo_elm = {username: null, firstname: null, lastname: null}
    $scope.updateModel = function(param) {
        $scope.userinfo[param] = $scope.userinfo_elm[param].val();
    }
}]);