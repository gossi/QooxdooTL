/**
 * EXPERIMENTAL!
 * 
 * Represents horizontal or vertical lines.
 */
//>public
vjo.ctype('qx.ui.virtual.layer.GridLines')
.inherits('qx.ui.virtual.layer.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Whether the line with the given index is currently rendered (i.e. in the
	 * layer&#8217;s view port).
	 * 
	 */
	__isLineRendered : vjo.NEEDS_IMPL,


	/**
	 * Helper function to render horizontal lines.
	 * 
	 */
	__renderHorizontalLines : vjo.NEEDS_IMPL,


	/**
	 * Helper function to render vertical lines.
	 * 
	 */
	__renderVerticalLines : vjo.NEEDS_IMPL,


	/**
	 */
	_fullUpdate : vjo.NEEDS_IMPL,


	/**
	 */
	_updateLayerWindow : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property defaultLineColor.
	 * 
	 * For further details take a look at the property definition: {@link #defaultLineColor}.
	 * 
	 */
	getDefaultLineColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property defaultLineSize.
	 * 
	 * For further details take a look at the property definition: {@link #defaultLineSize}.
	 * 
	 */
	getDefaultLineSize : vjo.NEEDS_IMPL,


	/**
	 * Returns the color of the grid line with the given index.
	 * 
	 */
	getLineColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the size of the grid line with the given index.
	 * 
	 */
	getLineSize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property defaultLineColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #defaultLineColor}.
	 * 
	 */
	initDefaultLineColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property defaultLineSize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #defaultLineSize}.
	 * 
	 */
	initDefaultLineSize : vjo.NEEDS_IMPL,


	/**
	 * Whether horizontal lines are rendered
	 * 
	 */
	isHorizontal : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property defaultLineColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #defaultLineColor}.
	 * 
	 */
	resetDefaultLineColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property defaultLineSize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #defaultLineSize}.
	 * 
	 */
	resetDefaultLineSize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property defaultLineColor.
	 * 
	 * For further details take a look at the property definition: {@link #defaultLineColor}.
	 * 
	 */
	setDefaultLineColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property defaultLineSize.
	 * 
	 * For further details take a look at the property definition: {@link #defaultLineSize}.
	 * 
	 */
	setDefaultLineSize : vjo.NEEDS_IMPL,


	/**
	 * Sets the color for the grid line with the given index.
	 * 
	 */
	setLineColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the width/height for the grid line with the given index.
	 * 
	 */
	setLineSize : vjo.NEEDS_IMPL
})
.endType();