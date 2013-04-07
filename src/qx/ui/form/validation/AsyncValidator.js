/**
 * This class is responsible for validation in all asynchronous cases and
 * should always be used with {@link qx.ui.form.validation.Manager}.
 * 
 * It acts like a wrapper for asynchronous validation functions. These
 * validation function must be set in the constructor. The form manager will
 * invoke the validation and the validator function will be called with two
 * arguments:
 * 
 *  asyncValidator: A reference to the corresponding validator.
 *  value: The value of the assigned input field.
 * 
 * These two parameters are needed to set the validation status of the current
 * validator. {@link #setValid} is responsible for doing that.
 * 
 * Warning: Instances of this class can only be used with one input
 * field at a time. Multi usage is not supported!
 * 
 * Warning: Calling {@link #setValid} synchronously does not work. If you
 * have an synchronous validator, please check
 * {@link qx.ui.form.validation.Manager#add}. If you have both cases, you have
 * to wrap the synchronous call in a timeout to make it asychronous.
 */
//>public
vjo.ctype('qx.ui.form.validation.AsyncValidator')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * This method should be called within the asynchronous callback to tell the
	 * validator the result of the validation.
	 * 
	 */
	setValid : vjo.NEEDS_IMPL,


	/**
	 * The validate function should only be called by
	 * {@link qx.ui.form.validation.Manager}.
	 * 
	 * It stores the given information and calls the validation function set in
	 * the constructor. The method is used for form fields only. Validating a
	 * form itself will be invokes with {@link #validateForm}.
	 * 
	 */
	validate : vjo.NEEDS_IMPL,


	/**
	 * The validateForm function should only be called by
	 * {@link qx.ui.form.validation.Manager}.
	 * 
	 * It stores the given information and calls the validation function set in
	 * the constructor. The method is used for forms only. Validating a
	 * form item will be invokes with {@link #validate}.
	 * 
	 */
	validateForm : vjo.NEEDS_IMPL
})
.endType();