var app = angular.module('afterglowApp', []);

function ImageCtrl($scope) {
    $scope.imageUI = 'img/Afterglow.sublime-theme.png';
    $scope.imageColor = 'img/Afterglow.tmTheme.png';
    $scope.UI = 'Afterglow.sublime-theme';
    $scope.color = 'Afterglow.tmTheme';

    $scope.changeImage = function() {
        $scope.imageUI = 'img/' + $scope.UI + '.png';
        $scope.imageColor = 'img/' + $scope.color + '.png';
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

