// Controllers

app.controller('MainCtrl',[ '$scope', function($scope){
  $scope.personalDetails = {
    name:'Vishnu Sattigeri',
    aboutMe:'I am Computer Science graduate seeking full stack developer position. I am committed, dynamic and an adaptable person who loves to accept challenges and who finds out innovative ways to solve/tackle any problem and eager to learn new technologies and Strive for continued excellence.',
    phone:'(480) 247-1805',
    email:'vishprass@gmail.com',
    fbName:'facebook.com/vishprass',
	twitName:'twitter.com/vishprass',
    linkedInName:'linkedin.com/in/vishnusattigeri',
    aboutSite:'This site was built using AngularJS and Bootstrap'
  };
  

  
  $scope.experiences = [{
    duration: 'Dec 2014 - Present',
    title: 'Java Developer, Deloitte, Atlanta, GA',
    details:'Developed one stop application for all social security needs of Georgia residents using Deloitte NextGen framework.'
  },
  {
    duration: 'Aug 2013 - Aug 2014',
	title: 'Graduate Student , University of Southern Mississippi',
    details: 'Created dashboard/visualization  to analyze text categorization.'
  },
  {
    duration: 'Apr 2011 - Jul 2013',
	title: 'Software Engineer, Motorola Mobility, Bangalore, KA',
    details: 'Created dashboard/visualization  to analyze performance of Motorola cellular devices.'
  },
  {
    duration: 'Mar 2010 - Apr 2011',
	title: 'Software Engineer, TLI Software, Bangalore, KA',
    details: 'Created various websites based on clients requirements.'
  },
  ];
  
  
  $scope.skills = [{
      skill:'HTML/HTML5, CSS/CSS3, Bootstrap'
  },
  {
      skill:'AngularJS, JavaScript, Jquery, JSP'
  },
  {
      skill:'Java/J2EE'
  },
  {
      skill:'Spring, Hibernate, Servlet'
  },
  {
      skill:'MySQL, Oracle, DB2'
  },
  {
      skill:'REST, SOAP'
  },
  {
      skill:' Mac, Linux, Windows'
  },
  {
      skill:'Eclipse, RAD, Visual Studio, Dreamviewer'
  },
  {
      skill:'Git, SVN, ClearCase, RTC'
  }
  ]

  $scope.position = 'Full Stack Web Developer';
}]);


app.controller('homeController',['$scope','$location','cityService',function($scope,$location,cityService){
	$scope.city=cityService.city;
	$scope.$watch('city',function(){
		cityService.city=$scope.city;
	});
	$scope.submit = function(){
		$location.path("/forecast");
	}
}]);


app.controller('forecastController',['$scope','$routeParams','cityService','weatherService',function($scope,$routeParams,cityService,weatherService){
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2';
	
	$scope.weatherResult = weatherService.GetWeather($scope.city,$scope.days);
	
	$scope.convertKelvinToCelcius = function(kelvin){
		return Math.round(kelvin - 273.15);
	}
	
	$scope.convertTimestampToDate = function(dt){
		return new Date(dt*1000);
	}
	$scope.isAvailable = function(obj){
       return obj.hasOwnProperty('current_observation'); 
    };
	
}]);


