/**
 * A password input field, which hides the entered text.
 */
//>public
vjo.ctype('qx.ui.form.PasswordField')
.inherits('qx.ui.form.TextField')
.protos({
	/**
	 */
	_createInputElement : vjo.NEEDS_IMPL
})
.endType();