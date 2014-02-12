var communallyApp = angular.module("communallyApp",["firebase", "ngRoute"]).config(function($routeProvider){
  $routeProvider

  .when('/',
  { 
    controller: 'reportsListController',
    templateUrl: '/templates/reports_template.html'
  }
  )
  .when('/:link',
  { 
    controller: 'reportsListController',
    templateUrl: '/templates/reports_template.html'
  }
  );
});

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
communallyApp.controller("reportsListController", ["$scope", "$firebase", "$routeParams",
  function($scope, $firebase, $routeParams){
    // debugger;
    console.log(JSON.stringify($routeParams));
    console.log($scope);
    var render = function(){
      var path = $routeParams && $routeParams.link ? "https://communally.firebaseio.com/" + $routeParams.link + "Reports" : "https://communally.firebaseio.com/Report";
      path = $routeParams.link === "All" ? "https://communally.firebaseio.com/Report" : path;
      var ref = new Firebase(path);
      $scope.reports = $firebase(ref);
      console.log($scope.reports);
    };
    render();
  }
]);
communallyApp.controller("newReportController", ["$rootScope","$scope", "$firebase", "makeAuxRecord",
  function($rootScope, $scope, $firebase, makeAuxRecord){
    var ref = new Firebase("https://communally.firebaseio.com/Report");
    var catRef = new Firebase("https://communally.firebaseio.com/TopicCategory");
    var propRef = new Firebase("https://communally.firebaseio.com/ReportProperty");
    $scope.categories = $firebase(catRef);
    $scope.props = $firebase(propRef);
    $scope.reports = $firebase(ref);
    $scope.clearForm = function(){
      $scope.summary_input = "";
      $scope.category_select = "";
      $scope.property_select = "";
      $scope.comments_input = "";
      $scope.location_input = "";
    };

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
      if ($rootScope.record !== newRecord){
        $rootScope.record = newRecord;
        $scope.reports.$add(newRecord);
        makeAuxRecord.make(newRecord);
        $scope.clearForm();
      }
      // debugger;
      newRecord = "";
    }
  }
]);
