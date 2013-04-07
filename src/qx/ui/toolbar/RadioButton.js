/**
 * Radio buttons are used to manage a single selection. Radio buttons only
 * make sense used in a group of two or more of them. They are managed (connected)
 * to a {@link qx.ui.form.RadioGroup} to handle the selection.
 */
//>public
vjo.ctype('qx.ui.toolbar.RadioButton')
.inherits('qx.ui.toolbar.CheckBox')
.satisfies(['qx.ui.form.IModel','qx.ui.form.IRadioItem'])
.mixin('qx.ui.form.MModelProperty')
.protos({
	/**
	 * Applies changes of the property value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	_applyValue : vjo.NEEDS_IMPL,


	/**
	 */
	_onExecute : vjo.NEEDS_IMPL
})
.endType();