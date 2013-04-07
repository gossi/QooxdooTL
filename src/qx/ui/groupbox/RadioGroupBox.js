/**
 * A group box, which has a radio button near the legend.
 */
//>public
vjo.ctype('qx.ui.groupbox.RadioGroupBox')
.inherits('qx.ui.groupbox.GroupBox')
.satisfies(['qx.ui.form.IRadioItem','qx.ui.form.IExecutable','qx.ui.form.IBooleanForm','qx.ui.form.IModel'])
.mixin('qx.ui.form.MModelProperty')
.protos({
	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Event listener for execute event of checkbox.
	 * 
	 */
	_onExecute : vjo.NEEDS_IMPL,


	/**
	 * Event listener for changeValue event of radio button
	 * 
	 */
	_onRadioChangeValue : vjo.NEEDS_IMPL,


	/**
	 * Returns the radio group
	 * 
	 */
	getGroup : vjo.NEEDS_IMPL,


	/**
	 * Returns the configured legend. Only used for RadioManager compatibility.
	 * 
	 */
	getLabel : vjo.NEEDS_IMPL,


	/**
	 * The value of the groupbox
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Resets the value.
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the radio group to use
	 * 
	 */
	setGroup : vjo.NEEDS_IMPL,


	/**
	 * Configures the value of the groupbox.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL
})
.endType();