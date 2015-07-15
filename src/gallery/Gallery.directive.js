module.exports = function(app) {
	app.directive('gallery', function() {
		return {
			restrict: 'E',
			replace: true,
			controller: 'galleryController',
			controllerAs: 'galleryCtrl',
			template: require('./Gallery.template.html')
		};
	});	
};