/**
 * Group boxes are used to group a set of form elements.
 */
//>public
vjo.ctype('qx.ui.groupbox.GroupBox')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.form.IForm')
.mixin(['qx.ui.core.MRemoteChildrenHandling','qx.ui.core.MRemoteLayoutHandling','qx.ui.core.MContentPadding','qx.ui.form.MForm'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Apply method for applying the legend position. It calls the
	 * {@link #_repositionFrame} method.
	 * 
	 */
	_applyLegendPosition : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Returns the element, to which the content padding should be applied.
	 * 
	 */
	_getContentPaddingTarget : vjo.NEEDS_IMPL,


	/**
	 * Repositions the frame of the group box dependent on the
	 * {@link #legendPosition} property.
	 * 
	 */
	_repositionFrame : vjo.NEEDS_IMPL,


	/**
	 * The children container needed by the {@link qx.ui.core.MRemoteChildrenHandling}
	 * mixin
	 * 
	 */
	getChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Accessor method for the icon of the legend sub widget
	 * 
	 */
	getIcon : vjo.NEEDS_IMPL,


	/**
	 * Accessor method for the label of the legend sub widget
	 * 
	 */
	getLegend : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property legendPosition.
	 * 
	 * For further details take a look at the property definition: {@link #legendPosition}.
	 * 
	 */
	getLegendPosition : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property legendPosition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #legendPosition}.
	 * 
	 */
	initLegendPosition : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property legendPosition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #legendPosition}.
	 * 
	 */
	resetLegendPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the icon of the legend sub widget.
	 * 
	 */
	setIcon : vjo.NEEDS_IMPL,


	/**
	 * Sets the label of the legend sub widget if the given string is
	 * valid. Otherwise the legend sub widget get not displayed.
	 * 
	 */
	setLegend : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property legendPosition.
	 * 
	 * For further details take a look at the property definition: {@link #legendPosition}.
	 * 
	 */
	setLegendPosition : vjo.NEEDS_IMPL
})
.endType();