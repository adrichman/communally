var communallyApp = angular.module("communallyApp", ["firebase"])

communallyApp.controller("topicsController", ["$scope", "$firebase",
  function($scope, $firebase){
    var ref = new Firebase("https://communally.firebaseio.com/Topic");
    $scope.topics = $firebase(ref);
  }
]);
communallyApp.controller("categoriesController", ["$scope", "$firebase",
  function($scope, $firebase){
    var ref = new Firebase("https://communally.firebaseio.com/TopicCategory");
    $scope.categories = $firebase(ref);
  }
]);
communallyApp.controller("reportPropertiesController", ["$scope", "$firebase",
  function($scope, $firebase){
    var ref = new Firebase("https://communally.firebaseio.com/ReportProperty");
    $scope.properties = $firebase(ref);
  }
]);
communallyApp.controller("reportsListController", ["$scope", "$firebase",
  function($scope, $firebase){
    var ref = new Firebase("https://communally.firebaseio.com/Report");
    $scope.reports = $firebase(ref);
  }
]);
communallyApp.controller("newReportController", ["$scope", "$firebase",
  function($scope, $firebase){
    var ref = new Firebase("https://communally.firebaseio.com/Report");
    var catRef = new Firebase("https://communally.firebaseio.com/TopicCategory");
    var propRef = new Firebase("https://communally.firebaseio.com/ReportProperty");
    $scope.categories = $firebase(catRef);
    $scope.props = $firebase(propRef);
    $scope.reports = $firebase(ref);
    $scope.addReport = function(){
      $scope.reports.$add({
        location: $scope.location_input,
        summary:  $scope.summary_input,
        category: $scope.category_select,
        property: $scope.property_select,
        comments: $scope.comments_input,
        created_at: new Date(Date.now())
      });

    }
    $scope.newReport = "";
  }
]);