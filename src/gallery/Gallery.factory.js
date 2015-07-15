module.exports = function(app) {
	app.factory('PhotosFactory', function($http) {
		var service = {
			getPhotos: function getPhotos() {
				return $http.get('http://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
					.success(function(data) {
						return data;
					})
					.catch(function(e) {
						console.log(e);
					});
			}
		};

		return service;
	});
};