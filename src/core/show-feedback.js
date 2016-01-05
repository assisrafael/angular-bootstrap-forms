'use strict';

const FEEDBACK_ICON_TEMPLATE = `
	<span class="form-control-feedback" aria-hidden="true">
	<i class="fa fa-check"></i>
	</span>
`;

/*@ngInject*/
export function ShowFeedbackDirective($compile) {
	return {
		restrict: 'A',
		require: ['ngModel', '^?form'],
		link(scope, element, attrs, ctrls) {
			let feedbackIcon = angular.element(FEEDBACK_ICON_TEMPLATE);
			element.after(feedbackIcon);
			feedbackIcon = feedbackIcon.find('i');

			let modelCtrl = ctrls[0],
				formCtrl = ctrls[1];

			let formGroup = element.parent();
			formGroup.addClass('has-feedback');

			//FIXME: replace with $viewChangeListeners in the future
			scope.$watch(() => {
				return modelCtrl.$viewValue || (formCtrl && formCtrl.$submitted);
			}, () => {
				if (modelCtrl.$pristine && (formCtrl && !formCtrl.$submitted)) {
					return;
				}

				if (modelCtrl.$invalid) {
					formGroup.addClass('has-error');
					formGroup.removeClass('has-success');
					feedbackIcon.addClass('fa-exclamation-triangle');
					feedbackIcon.removeClass('fa-check');
				} else {
					formGroup.addClass('has-success');
					formGroup.removeClass('has-error');
					feedbackIcon.addClass('fa-check');
					feedbackIcon.removeClass('fa-exclamation-triangle');
				}
			});

			let messagesBlock = angular.element('<abf-feedback-message model-ctrl="modelCtrl"></abf-feedback-message>');
			let messagesBlockScope = scope.$new(true);
			messagesBlockScope.modelCtrl = modelCtrl;
			$compile(messagesBlock)(messagesBlockScope, (clonedElement) => {
				element.after(clonedElement);
			});
		}
	};
}
