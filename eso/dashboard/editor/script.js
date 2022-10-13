angular.module("textAngularTest", ['textAngular']);
	function wysiwygeditor($scope) {
		$scope.orightml = '<h1 class="txt-graydarker txtdswh typing">Editor Sor Juana</h1>';
		$scope.htmlcontent = $scope.orightml;
		$scope.disabled = false;
	};