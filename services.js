//services
app.service('cityService',function(){
	this.city='Atlanta, GA';
});
app.service('weatherService',['$resource',function($resource){
	this.GetWeather = function(city,days){
		var weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback:"JSON_CALLBACK"}
	,{get:{method:"JSONP"}});
		return weatherApi.get({q:city,cnt:days,appid:'2d35914094cb8e067badcd252f385c29'});
	};
}]);