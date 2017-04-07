(function () {


  angular
  .module('app')
  .config(configRoutes);

  configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('search', {
      url: '/search',
      views : {
        'navbar' : {
          templateUrl: '/app/nav/transparent-header.view.html',
          controller: 'sidenavCtrl'
        },
        'mainContent' : {
          templateUrl: '/app/search/map.view.html',
          // controller: 'mapCtrl'
        }
      }
    })
    .state('newsfeed', {
      url: '/newsfeed',
      views : {
        'navbar' : {
          templateUrl: '/app/nav/full-header.view.html',
          controller: 'sidenavCtrl'
        },
        'mainContent' : {
          templateUrl: '/app/newsfeed/front.view.html',
          // controller: 'mapCtrl'
        }
      }
    })
    .state('chats', {
      url: '/chats',
      views : {
        'navbar' : {
          templateUrl: '/app/nav/full-header.view.html',
          controller: 'sidenavCtrl'
        },
        'mainContent' : {
          templateUrl: '/app/chats/front.view.html',
          // controller: 'mapCtrl'
        }
      }
    })
    .state('settings', {
      url: '/settings',
      views : {
        'navbar' : {
          templateUrl: '/app/nav/full-header.view.html',
          controller: 'sidenavCtrl'
        },
        'mainContent' : {
          templateUrl: '/app/settings/general.view.html',
          // controller: 'mapCtrl'
        }
      }
    })



    $urlRouterProvider.otherwise('/search');
  }

})();
