var communallyApp = angular.module("communallyApp", ["firebase"]);

communallyApp.service('makeAuxRecord', ["$rootScope", "$firebase", 
  function($rootScope,$firebase){
    this.make = function(){
        var categoriesToTopics = {
          "Airports":"Transportation", 
          "Bars":"Food_and_Drink", 
          "Bike":"Transportation", 
          "Bus":"Transportation", 
          "Concerts_and_Performances":"Events", 
          "Exhibits":"Events", 
          "Festivals":"Events", 
          "Parks":"Recreational",
          "Public_Spaces":"Recreational",
          "Restaurants":"Food_and_Drink", 
          "Sporting_Events":"Events", 
          "Traffic":"Transportation", 
          "Train":"Transportation", 
          "Schools": "Other"
        };
        debugger;
    
       var auxRef = new Firebase("https://communally.firebaseio.com/" + 
                                  categoriesToTopics[arguments[0].category.split(' ').join('_') ] + 
                                  "Reports");
    
       $rootScope.TopicReports = $firebase(auxRef);
       $rootScope.TopicReports.$add(arguments[0]);
       return $rootScope.TopicReports;
    };
  }
]);

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
communallyApp.controller("newReportController", ["$scope", "$firebase", "makeAuxRecord",
  function($scope, $firebase, makeAuxRecord){
    var ref = new Firebase("https://communally.firebaseio.com/Report");
    var catRef = new Firebase("https://communally.firebaseio.com/TopicCategory");
    var propRef = new Firebase("https://communally.firebaseio.com/ReportProperty");
    $scope.categories = $firebase(catRef);
    $scope.props = $firebase(propRef);
    $scope.reports = $firebase(ref);
    $scope.addReport = function(){
      var newRecord = 
      {
        location: $scope.location_input,
        summary:  $scope.summary_input,
        category: $scope.category_select,
        property: $scope.property_select,
        comments: $scope.comments_input,
        created_at: new Date(Date.now())
      };

      $scope.reports.$add(newRecord);
      makeAuxRecord.make(newRecord);
    }
    $scope.newReport = "";
  }
]);
