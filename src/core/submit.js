'use strict';

/*@ngInject*/
export function SubmitDirective($parse) {
	return {
		restrict: 'A',
		require: 'form',
		link(scope, formElement, attrs, formCtrl) {
			let submitFn = $parse(attrs.abfSubmit);

			formElement.bind('submit', (event) => {
				if (formCtrl.$invalid) {
					return false;
				}

				submitFn(scope, {
					$event: event
				});
			});
		}
	};
}
