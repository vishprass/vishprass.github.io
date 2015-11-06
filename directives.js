// Directives
app.directive('ngExperienceCustom', function(){
    
   return{
    restrict: 'E',
    templateUrl: 'directives/experienceCustom.html',
    scope: {
        expObj: "="
    }
   }
    
});

app.directive('ngSkillCustom', function(){
    
   return{
    restrict: 'E',
    templateUrl: 'directives/skillCustom.html',
    scope: {
        skillObj: "="
    }
   }
    
});

app.directive("weatherReport",function(){
	return {
		templateUrl: 'directives/weatherReport.html',
        replace: true,
		scope:{
			weatherObject:"=",
			convertToStandard:"&",
			convertToDate:"&",
			dateFormat:"@"
		},
		transclude:true
	};
});


