(function () {
  angular
  .module('wdinstagram')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    Router
  ])

  function Router ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('entriesIndex', {
      url: '/entries',
      templateUrl: 'js/entries/ng-views/index.html',
      controller: 'EntriesIndexController',
      controllerAs: 'vm'
    })
    $urlRouterProvider.otherwise('/entries')
  }
})()
