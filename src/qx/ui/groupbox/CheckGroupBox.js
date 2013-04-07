/**
 * A group box, which has a check box near the legend.
 */
//>public
vjo.ctype('qx.ui.groupbox.CheckGroupBox')
.inherits('qx.ui.groupbox.GroupBox')
.satisfies(['qx.ui.form.IExecutable','qx.ui.form.IBooleanForm','qx.ui.form.IModel'])
.mixin('qx.ui.form.MModelProperty')
.protos({
	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Event listener for execute event of checkbox.
	 * 
	 */
	_onExecute : vjo.NEEDS_IMPL,


	/**
	 * Event listener for change event of checkbox
	 * 
	 */
	_onRadioChangeValue : vjo.NEEDS_IMPL,


	/**
	 * The value of the groupbox.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Resets the value.
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


	/**
	 * Configures the value of the groupbox.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL
})
.endType();