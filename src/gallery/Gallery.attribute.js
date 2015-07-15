module.exports = function(app) {
	app.directive('fullSize', function($compile) {
		var cd = this;
		cd.fullScreen = false;

		document.querySelector('body').addEventListener('click', function() {
			var target = document.getElementById('fullSize');
			if (cd.fullScreen) {
				cd.fullScreen = false;
				target.parentNode.removeChild(target);
			}
		});

		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.bind('click', function(e) {
					if (!cd.fullScreen) {
						e.stopPropagation();
						cd.fullScreen = true;
						var newElement = document.createElement('div');
						newElement.innerHTML = '<img src="' + scope.$parent.galleryCtrl.photos[scope.$index]["url"] + '">';
						newElement.id = 'fullSize';
						document.querySelector('body').appendChild(newElement);
					}
				});
			}
		};
	});
};