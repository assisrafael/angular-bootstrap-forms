'use strict';

import abfCore from './core';
import abfFormControls from './form-controls';

export default angular.module('angular-bootstrap-forms', [
	abfCore.name,
	abfFormControls.name
]);
