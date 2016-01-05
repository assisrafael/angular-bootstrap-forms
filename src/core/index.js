'use strict';

import {ShowFeedbackDirective} from './show-feedback.js';
import {SubmitDirective} from './submit.js';
import {FeedbackMessage} from './feedback-message.js';
import {DefaultMessages} from './default-messages.js';

export default angular.module('angular-bootstrap-forms.core', [])
.directive('abfShowFeedback', ShowFeedbackDirective)
.directive('abfSubmit', SubmitDirective)
.directive('abfFeedbackMessage', FeedbackMessage)
.provider('AbfFeedbackMessages', DefaultMessages);
