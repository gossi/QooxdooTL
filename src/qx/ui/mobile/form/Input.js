/**
 * Abstract class for all input fields.
 */
//>public abstract
vjo.ctype('qx.ui.mobile.form.Input')
.inherits('qx.ui.mobile.core.Widget')
.satisfies(['qx.ui.form.IForm','qx.ui.form.IModel'])
.mixin(['qx.ui.form.MForm','qx.ui.form.MModelProperty','qx.ui.mobile.form.MState'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_getTagName : vjo.NEEDS_IMPL,


	/**
	 * Returns the type of the input field. Override this method in the
	 * specialized input class.
	 * 
	 */
	_getType : vjo.NEEDS_IMPL
})
.endType();