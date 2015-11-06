// routes

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'pages/portfolio.html'
    })
    .when('/portfolio', {
        templateUrl:'pages/portfolio.html'
    })
    .when('/weatherIndex', {
        templateUrl:'pages/weatherIndex.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl:'pages/about.html',
       
    })
    .when('/contact', {
        templateUrl:'pages/contact.html',
       
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});

