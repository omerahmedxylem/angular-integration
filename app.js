angular.module('myApp', [])
  .controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Hello, AngularJS!';
    $scope.message = 'Welcome to your first AngularJS app.';
    
    // Function to send the height of the AngularJS app to the parent window
    function sendHeight() {
        // Send the height of the document body to the parent window
        window.parent.postMessage(document.body.scrollHeight, '*');
    }

    // Send height initially and on resize
    window.addEventListener('load', sendHeight);
    window.addEventListener('resize', sendHeight);
  }]);
