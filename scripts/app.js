var app = angular.module('afterglowApp', []);

function ImageCtrl($scope) {
    $scope.imageUI = 'img/dist/Afterglow.sublime-theme.png';
    $scope.imageColor = 'img/dist/Afterglow.tmTheme.png';
    $scope.UI = 'Afterglow.sublime-theme';
    $scope.color = 'Afterglow.tmTheme';

    $scope.changeImage = function() {
        $scope.imageUI = 'img/dist/' + $scope.UI + '.png';
        $scope.imageColor = 'img/dist/' + $scope.color + '.png';
    };
}

app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        element.attr('src', attrs.errSrc);
      });
    }
  };
});

