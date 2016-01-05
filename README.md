# angular-bootstrap-forms

angular directives for twitter bootstrap forms

## requirements

- angular@^1.4
- angular-messages@^1.4
- twitter bootstrap@^3
- font-awesome@^4
- browserify

## example

Instead of writing the above code:

```html
<div class="form-group has-feedback" ng-class="{'has-success':form.field.$valid, 'has-error':form.field.$invalid && (form.$submitted || form.field.$dirty)}">
	<label class="control-label">Field</label>
	<input type="text" ng-model="model.field" name="field" class="form-control" required ng-minlength="3" aria-describedby="inputError2Status">
	<span class="form-control-feedback" aria-hidden="true">
		<i class="fa" ng-class="form.field.$invalid && form.field.$dirty ? 'fa-exclamation-triangle':'fa-check'"></i>
	</span>
	<span id="inputError2Status" class="sr-only">(error)</span>
	<div class="help-block" ng-if="form.field.$dirty || form.$submitted" ng-messages="form.field.$error" role="alert">
		<small ng-message="required">This field cannot be blank</small>
		<small ng-message="minlength">Minimum length:</small>
		<small ng-message="email">Invalid email address</small>
	</div>
</div>
```

just write:

```html
<div class="form-group">
	<label class="control-label">Field</label>
	<input type="text" ng-model="model.field" name="field" class="form-control" required abf-show-feedback ng-minlength="3">
</div>
```

Check the example at ```docs/example/index.html```.

## Installation

```javascript
var abf = require('angular-bootstrap-forms');

angular.module('myApp', [
	abf.name
]);
```

## Roadmap to 1.0

- [ ] Unit tests using karma
- [ ] input[type=text] form-control
- [ ] input[type=email] form-control
- [ ] select form-control
- [ ] textarea form-control
- [ ] standalone build
- [ ] comprehensive documentation
