interface IAppScope extends ng.IScope {
  test: string;
}
export class AppCtrl {
  static $inject = [
    '$scope',
  ];

  constructor(private $scope: IAppScope) {
    $scope.test = 'Hello World';
  }
}
