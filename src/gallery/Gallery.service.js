module.exports = function(app) {
	app.service('PhotosService', function($resource) {
		var Photos = $resource('http://jsonplaceholder.typicode.com/photos?_start=0&_end=10', {}, {get: {isArray: true}});
		
		return Photos.get().$promise;
	});
};