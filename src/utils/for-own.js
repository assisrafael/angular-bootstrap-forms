'use strict';

export function forOwn(obj, fn) {
	Object.keys(obj).forEach((key) => {
		let value = obj[key];

		fn(key, value);
	});
}
