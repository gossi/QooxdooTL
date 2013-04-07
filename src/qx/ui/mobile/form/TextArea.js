/**
 * The TextArea is a multi-line text input field.
 */
//>public
vjo.ctype('qx.ui.mobile.form.TextArea')
.inherits('qx.ui.mobile.core.Widget')
.satisfies(['qx.ui.form.IForm','qx.ui.form.IModel'])
.mixin(['qx.ui.mobile.form.MValue','qx.ui.mobile.form.MText','qx.ui.form.MForm','qx.ui.form.MModelProperty','qx.ui.mobile.form.MState'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_getTagName : vjo.NEEDS_IMPL
})
.endType();