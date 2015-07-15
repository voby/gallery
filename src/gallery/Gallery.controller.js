module.exports = function(app) {
	app.controller('galleryController', function(PhotosFactory) {
		var vm = this;

		vm.photos = [];

		PhotosFactory.getPhotos().then(function(data) {
			vm.photos = data.data;
		});
	});
};