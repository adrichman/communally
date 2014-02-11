var communallyApp = angular.module("communallyApp", ["firebase"])

communallyApp.controller("topicsController", ["$scope", "$firebase",
  function($scope, $firebase){
    var ref = new Firebase("https://communally.firebaseio.com/Topic");
    $scope.topics = $firebase(ref);
    console.log($scope.topics);
  }
]);
communallyApp.controller("categoriesController", ["$scope", "$firebase",
  function($scope, $firebase){
    var ref = new Firebase("https://communally.firebaseio.com/TopicCategory");
    $scope.categories = $firebase(ref);
    console.log($scope.categories);
  }
]);
communallyApp.controller("reportPropertiesController", ["$scope", "$firebase",
  function($scope, $firebase){
    var ref = new Firebase("https://communally.firebaseio.com/ReportProperty");
    $scope.properties = $firebase(ref);
    console.log($scope.properties);
  }
]);
communallyApp.controller("reportsListController", ["$scope", "$firebase",
  function($scope, $firebase){
    var ref = new Firebase("https://communally.firebaseio.com/Report");
    $scope.reports = $firebase(ref);
    console.log($scope.reports);
  }
]);
communallyApp.controller("newReportController", ["$scope", "$firebase",
  function($scope, $firebase){
    var ref = new Firebase("https://communally.firebaseio.com/Report");
    $scope.reports = $firebase(ref);
    $scope.newReport = function(){
      // $scope.reports.$add($scope.newReport);
      ref.update({
        location: $scope.location_input,
        summary:  $scope.summary_input,
        category: $scope.category_select,
        property: $scope.property_select,
        comments: $scope.comments_input
      });

      $scope.newReport = "";
    }
  }
]);