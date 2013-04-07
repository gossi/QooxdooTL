/**
 * A button which acts as a normal button and shows a menu on one
 * of the sides to open something like a history list.
 */
//>public
vjo.ctype('qx.ui.toolbar.SplitButton')
.inherits('qx.ui.form.SplitButton')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL
})
.endType();