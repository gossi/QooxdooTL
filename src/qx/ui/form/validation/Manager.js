/**
 * This validation manager is responsible for validation of forms.
 */
//>public
vjo.ctype('qx.ui.form.validation.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Checks if all asynchronous validators have validated so the result
	 * is final and the {@link #complete} event can be fired. If that&#8217;s not
	 * the case, nothing will happen in the method.
	 * 
	 */
	__checkValidationComplete : vjo.NEEDS_IMPL,


	/**
	 * Helper function which checks, if the given validator is synchronous
	 * or asynchronous.
	 * 
	 */
	__isAsyncValidator : vjo.NEEDS_IMPL,


	/**
	 * Internal setter for the valid member. It generates the event if
	 * necessary and stores the new value
	 * 
	 */
	__setValid : vjo.NEEDS_IMPL,


	/**
	 * Returns true, if the given item implements the {@link qx.ui.form.IForm}
	 * interface.
	 * 
	 */
	__supportsInvalid : vjo.NEEDS_IMPL,


	/**
	 * Returns true, if the given item implements the
	 * {@link qx.ui.core.ISingleSelection} interface.
	 * 
	 */
	__supportsSingleSelection : vjo.NEEDS_IMPL,


	/**
	 * Validates the form. It checks for asynchronous validation and handles
	 * the differences to synchronous validation. If no form validator is given,
	 * true will be returned. If a synchronous validator is given, the
	 * validation result will be returned. In asynchronous cases, null will be
	 * returned cause the result is not available.
	 * 
	 */
	__validateForm : vjo.NEEDS_IMPL,


	/**
	 * Validates a form item. This method handles the differences of
	 * synchronous and asynchronous validation and returns the result of the
	 * validation if possible (synchronous cases). If the validation is
	 * asynchronous, null will be returned.
	 * 
	 */
	__validateItem : vjo.NEEDS_IMPL,


	/**
	 * Checks if the form item is required. If so, the value is checked
	 * and the result will be returned. If the form item is not required, true
	 * will be returned.
	 * 
	 */
	__validateRequired : vjo.NEEDS_IMPL,


	/**
	 * Add a form item to the validation manager.
	 * 
	 * The form item has to implement at least two interfaces:
	 * 
	 *   The {@link qx.ui.form.IForm} Interface
	 *   One of the following interfaces:
	 *     
	 *       {@link qx.ui.form.IBooleanForm}
	 *       {@link qx.ui.form.IColorForm}
	 *       {@link qx.ui.form.IDateForm}
	 *       {@link qx.ui.form.INumberForm}
	 *       {@link qx.ui.form.IStringForm}
	 *     
	 *   
	 * 
	 * The validator can be a synchronous or asynchronous validator. In
	 * both cases the validator can either returns a boolean or fire an
	 * {@link qx.core.ValidationError}. For synchronous validation, a plain
	 * JavaScript function should be used. For all asynchronous validations,
	 * a {@link qx.ui.form.validation.AsyncValidator} is needed to wrap the
	 * plain function.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property context.
	 * 
	 * For further details take a look at the property definition: {@link #context}.
	 * 
	 */
	getContext : vjo.NEEDS_IMPL,


	/**
	 * Selects invalid form items
	 * 
	 */
	getInvalidFormItems : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property invalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	getInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Returns an array of all invalid messages of the invalid form items and
	 * the form manager itself.
	 * 
	 */
	getInvalidMessages : vjo.NEEDS_IMPL,


	/**
	 * Returns registered form items from the validation manager.
	 * 
	 */
	getItems : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property requiredFieldMessage.
	 * 
	 * For further details take a look at the property definition: {@link #requiredFieldMessage}.
	 * 
	 */
	getRequiredFieldMessage : vjo.NEEDS_IMPL,


	/**
	 * Returns the valid state of the manager.
	 * 
	 */
	getValid : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property validator.
	 * 
	 * For further details take a look at the property definition: {@link #validator}.
	 * 
	 */
	getValidator : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property context
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #context}.
	 * 
	 */
	initContext : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property invalidMessage
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	initInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property requiredFieldMessage
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #requiredFieldMessage}.
	 * 
	 */
	initRequiredFieldMessage : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property validator
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #validator}.
	 * 
	 */
	initValidator : vjo.NEEDS_IMPL,


	/**
	 * Returns the valid state of the manager.
	 * 
	 */
	isValid : vjo.NEEDS_IMPL,


	/**
	 * Remove a form item from the validation manager.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Resets the validator.
	 * 
	 */
	reset : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property context.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #context}.
	 * 
	 */
	resetContext : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property invalidMessage.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	resetInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property requiredFieldMessage.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #requiredFieldMessage}.
	 * 
	 */
	resetRequiredFieldMessage : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property validator.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #validator}.
	 * 
	 */
	resetValidator : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property context.
	 * 
	 * For further details take a look at the property definition: {@link #context}.
	 * 
	 */
	setContext : vjo.NEEDS_IMPL,


	/**
	 * Internal helper method to set the form manager to valid for asynchronous
	 * validation calls. This indirection is used to determinate if the
	 * validation process is completed or if other asynchronous validators
	 * are still validating. {@link #__checkValidationComplete} checks if the
	 * validation is complete and will be called at the end of this method.
	 * 
	 */
	setFormValid : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property invalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	setInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Internal helper method to set the given item to valid for asynchronous
	 * validation calls. This indirection is used to determinate if the
	 * validation process is completed or if other asynchronous validators
	 * are still validating. {@link #__checkValidationComplete} checks if the
	 * validation is complete and will be called at the end of this method.
	 * 
	 */
	setItemValid : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property requiredFieldMessage.
	 * 
	 * For further details take a look at the property definition: {@link #requiredFieldMessage}.
	 * 
	 */
	setRequiredFieldMessage : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property validator.
	 * 
	 * For further details take a look at the property definition: {@link #validator}.
	 * 
	 */
	setValidator : vjo.NEEDS_IMPL,


	/**
	 * Invokes the validation. If only synchronous validators are set, the
	 * result of the whole validation is available at the end of the method
	 * and can be returned. If an asynchronous validator is set, the result
	 * is still unknown at the end of this method so nothing will be returned.
	 * In both cases, a {@link #complete} event will be fired if the validation
	 * has ended. The result of the validation can then be accessed with the
	 * {@link #getValid} method.
	 * 
	 */
	validate : vjo.NEEDS_IMPL
})
.endType();