'use strict';

import abf from '../../src/angular-bootstrap-forms.core.js';

angular.module('example', ['ngMessages', abf.name])
.controller('MainController', function() {
	this.model = {};

	this.submit = function() {
		console.log('form validated and submitted!');
	};
})
.config(function(AbfFeedbackMessagesProvider) {
	AbfFeedbackMessagesProvider.override({
		required: 'Required field',
	});
});

angular.bootstrap(document, ['example']);
