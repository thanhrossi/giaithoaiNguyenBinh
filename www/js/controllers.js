angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('ChapListsCtrl', function ($scope) {
  $scope.chapLists = [
    { title: '1- Một thần đồng', id: 1},
    { title: '2- "Thơ tiên" Nguyễn Bính', id: 2},
    { title: '3- Nhại Kiều', id: 3},
    { title: '4- Câu chuyện "Lỡ bước sang ngang"', id: 4},
    { title: '5- Xé thơ mình', id: 5},
    { title: '6- Một tuyên ngôn về thơ', id: 6},
    { title: '7- Bắt chước Cao Bá Quát', id: 7},
    { title: '8- Thử làm thơ tục', id: 8},
    { title: '9- Nhà thơ bị lỡm', id: 9},
    { title: '10- Nô-en, En-nô', id: 10},
    { title: '11- Một nhà thơ, hai tác giả', id: 11},
    { title: '12- Đêm hội Ngô Sơn', id: 12},
    { title: '13- Thất tình, họa sĩ thành thi sĩ', id: 13},
    { title: '14- Thơ Nguyễn Bính đắt như vàng', id: 14},
    { title: '15- Chơi chữ C', id: 15},
    { title: '16- Lại chơi chữ', id: 16},
    { title: '17- Xuất khẩu thành thơ', id: 17},
    { title: '18- Xướng họa', id: 18},
    { title: '19- Tri âm của nhà thơ', id: 19},
    { title: '20- Làm thơ mua được xe đạp cung cấp', id: 20},
    { title: '21- Liên ngâm đả Tây', id: 21},
    { title: '22- Ta là người Nam', id: 22},
    { title: '23- Sông Thương nước chảy đôi dòng', id:23},
    { title: '24- Giá cái đầu nhà thơ', id: 24},
    { title: '25- Người sửa thơ Nguyễn Bính', id: 25},
    { title: '26- Cái bướu nghệ sĩ', id: 26},
    { title: '27- Chị Trúc trong thơ Nguyễn Bính', id: 27},
    { title: '28- Dấu son trên má', id: 28},
    { title: '29- Thi dịch thơ', id: 29},
    { title: '30- Đề thơ “Nhà lăn Mê ly”', id: 30},
    { title: '31- Bài thơ bị sái', id: 31},
    { title: '32- Những người yêu thơ thiết thực (Hết)', id: 32}
  ];
})
