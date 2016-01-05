'use strict';

import {forOwn} from '../utils/for-own.js';

export function DefaultMessages() {
	let defaultMessages = {
		'email': 'Invalid email address',
		'max': 'Maximum value: ',
		'maxlength': 'Maximum length: ',
		'min': 'Minimum value: ',
		'minlength': 'Minimum length: ',
		'required': 'This field cannot be blank',
		'unique': 'This field does not allow duplicated values'
	};

	return {
		override(newValues) {
			forOwn(newValues, (type, text) => {
				defaultMessages[type] = text;
			});
		},
		$get() {
			return defaultMessages;
		}
	};
}
