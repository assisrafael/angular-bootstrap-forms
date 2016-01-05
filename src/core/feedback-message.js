'use strict';

import {forOwn} from '../utils/for-own.js';

function normalizeAttrName(attr) {
	return attr.replace(/^(x[\:\-_]|data[\:\-_]|ng[\:\-_])/i, '');
}

/*@ngInject*/
export function FeedbackMessage(AbfFeedbackMessages) {
	let messages = '';

	forOwn(AbfFeedbackMessages, (messageType, messageValue) => {
		messages += `<small ng-message="${messageType}">
			${messageValue} <span ng-bind="vm.${messageType}"></span>
		</small>`;
	});

	return {
		restrict: 'E',
		require: '^?form',
		template: `
			<div class="help-block" ng-if="vm.modelCtrl.$dirty || vm.formCtrl.$submitted"
				ng-messages="vm.modelCtrl.$error" role="alert">
				${messages}
			</div>
		`,
		bindToController: true,
		scope: {
			modelCtrl: '='
		},
		link(scope, element, attrs, formCtrl) {
			scope.vm.formCtrl = formCtrl;

			let inputElement = element.parent()[0].querySelector('input,select,textarea');

			if (!inputElement) {
				throw new Error('abf-feedback-message needs a sibling input/select/textarea element)');
			}

			let inputAttrs = angular.element(inputElement)[0].attributes;
			angular.forEach(inputAttrs, (attr) => {
				var attrName = normalizeAttrName(attr.name);
				var attrValue = attr.nodeValue;

				//ignores attributes with empty values and ng-required
				if (!AbfFeedbackMessages.hasOwnProperty(attrName) || attrValue.length === 0 ||
					['required'].indexOf(attrName) >= 0) {
					return;
				}

				scope.vm[attrName] = attrValue;
			});
		},
		controllerAs: 'vm',
		controller() {}
	};
}
