module.exports = function(app) {
	require('./Gallery.controller.js')(app);
	require('./Gallery.directive.js')(app);
	require('./Gallery.factory.js')(app);
	require('./Gallery.service.js')(app);
	require('./Gallery.attribute.js')(app);
};