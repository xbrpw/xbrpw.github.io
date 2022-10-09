var app = angular.module('TodoApp', ["LocalStorageModule"]);

app.controller('TodoController', function($scope, localStorageService) {
  
  if (!localStorageService.get("taskListActive")) {
    $scope.tasksActive = [
      {
        text: "Libro de Matemáticas",
        priority: 1,
        complete: false
      },
      {
        text: "Libro de  español",
        priority: 0,
        complete: false
      },
      {
        text: "Libro de Ciencias",
        priority: 1,
        complete: false
      },
      {
        text: "Material deportivo",
        priority: 0,
        complete: false
      }
      ,
      {
        text: "Historia",
        priority: 0,
        complete: false
      }
    ];
    
  } else {
    $scope.tasksActive = localStorageService.get("taskListActive");
  }
  
  if (!localStorageService.get("taskListComplete")) {
    $scope.tasksComplete = [
      {
        text: "Sor Juana Inés de la Cruz",
        priority: 0,
        complete: true
      }
    ];
  } else {
    $scope.tasksComplete = localStorageService.get("taskListComplete");
  }
  
  $scope.totalTasks = function() {
    console.log($scope.tasksComplete.length)
    return $scope.tasksActive.length + $scope.tasksComplete.length;
  }
  
  $scope.totalRemaining = function() {
    return $scope.tasksActive.length;
  };
  
  $scope.totalComplete = function() {
    return $scope.tasksActive.length;
  };
  
  $scope.todoAdd = function() {
    if ($scope.taskInput.name) {
      $scope.tasksActive.unshift({ text:$scope.taskInput.name, priority:$scope.taskInput.priority || 0, complete:false});
      $scope.taskInput.name = '';
      $scope.taskInput.priority = 0;
    }
  };
  
  $scope.togglePriority = function(task) {
    if( task.priority === 0 ) {
      task.priority = 1;
      console.log('a')
    } else {
      task.priority = 0;
    }
  };
  
  $scope.completeTask = function(task) {
    //var task = $scope.tasksActive[index];
    task.complete = true;
    task.priority = 0;
    $scope.tasksActive.splice($scope.tasksActive.indexOf(task), 1);
    $scope.tasksComplete.unshift(task);
  };
  
  $scope.uncompleteTask = function(task) {
    task.complete = false;
    $scope.tasksComplete.splice($scope.tasksComplete.indexOf(task), 1);
    $scope.tasksActive.unshift(task);
  };
  
  $scope.deleteTask = function(task,list) {
    if( list == "active" ) {
      $scope.tasksActive.splice($scope.tasksActive.indexOf(task), 1);
    } else {
      $scope.tasksComplete.splice($scope.tasksComplete.indexOf(task), 1);
    }
    
  };
   
  $scope.clearCompleted = function () {
      var deleteArr= [];
      for (var i = 0; i < $scope.tasksComplete.length; i++) deleteArr.push(i);
      for (var i = 0; i < deleteArr.length; i++) {
        var task = i;
        $scope.tasksComplete.splice($scope.tasksComplete.indexOf(task) - 1, 1);
      }
  };

  $scope.$watch("tasksActive",function  (newVal,oldVal) {
	    if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
	        localStorageService.add("taskListActive",angular.toJson(newVal));
	    }
	},true);
  
  $scope.$watch("tasksComplete",function  (newVal,oldVal) {
	    if (newVal !== null && angular.isDefined(newVal) && newVal!==oldVal) {
	        localStorageService.add("taskListComplete",angular.toJson(newVal));
	    }
	},true);
  
});