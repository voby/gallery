var angular = require('angular');
var app = angular.module('gallery', [require('angular-resource')]);

require('./gallery/index.js')(app);
require('./styles/index.styl');
