/**
 * A check box widget with an optional label.
 */
//>public
vjo.ctype('qx.ui.form.CheckBox')
.inherits('qx.ui.form.ToggleButton')
.satisfies(['qx.ui.form.IForm','qx.ui.form.IModel'])
.mixin(['qx.ui.form.MForm','qx.ui.form.MModelProperty'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();