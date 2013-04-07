/**
 * A basic decorator featuring simple borders based on CSS styles.
 * This mixin is usually used by {@link qx.ui.decoration.DynamicDecorator}.
 */
//>public
vjo.mtype('qx.ui.decoration.MSingleBorder')
.protos({
	/**
	 * Applies changes of the property value of the properties colorBottom, colorLeft, colorRight, colorTop, styleBottom, styleLeft, styleRight and styleTop.
	 * 
	 * For further details take a look at the property definitions: {@link #colorBottom}, {@link #colorLeft}, {@link #colorRight}, {@link #colorTop}, {@link #styleBottom}, {@link #styleLeft}, {@link #styleRight} and {@link #styleTop}.
	 * 
	 */
	_applyStyle : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties widthBottom, widthLeft, widthRight and widthTop.
	 * 
	 * For further details take a look at the property definitions: {@link #widthBottom}, {@link #widthLeft}, {@link #widthRight} and {@link #widthTop}.
	 * 
	 */
	_applyWidth : vjo.NEEDS_IMPL,


	/**
	 * Implementation of the interface for the single border.
	 * 
	 */
	_getDefaultInsetsForBorder : vjo.NEEDS_IMPL,


	/**
	 * Resize function for the decorator. This is suitable for the
	 * {@link qx.ui.decoration.DynamicDecorator}.
	 * 
	 */
	_resizeBorder : vjo.NEEDS_IMPL,


	/**
	 * Takes a styles map and adds the border styles styles in place
	 * to the given map. This is the needed behavior for
	 * {@link qx.ui.decoration.DynamicDecorator}.
	 * 
	 */
	_styleBorder : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property colorBottom.
	 * 
	 * For further details take a look at the property definition: {@link #colorBottom}.
	 * 
	 */
	getColorBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property colorLeft.
	 * 
	 * For further details take a look at the property definition: {@link #colorLeft}.
	 * 
	 */
	getColorLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property colorRight.
	 * 
	 * For further details take a look at the property definition: {@link #colorRight}.
	 * 
	 */
	getColorRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property colorTop.
	 * 
	 * For further details take a look at the property definition: {@link #colorTop}.
	 * 
	 */
	getColorTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property styleBottom.
	 * 
	 * For further details take a look at the property definition: {@link #styleBottom}.
	 * 
	 */
	getStyleBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property styleLeft.
	 * 
	 * For further details take a look at the property definition: {@link #styleLeft}.
	 * 
	 */
	getStyleLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property styleRight.
	 * 
	 * For further details take a look at the property definition: {@link #styleRight}.
	 * 
	 */
	getStyleRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property styleTop.
	 * 
	 * For further details take a look at the property definition: {@link #styleTop}.
	 * 
	 */
	getStyleTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property widthBottom.
	 * 
	 * For further details take a look at the property definition: {@link #widthBottom}.
	 * 
	 */
	getWidthBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property widthLeft.
	 * 
	 * For further details take a look at the property definition: {@link #widthLeft}.
	 * 
	 */
	getWidthLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property widthRight.
	 * 
	 * For further details take a look at the property definition: {@link #widthRight}.
	 * 
	 */
	getWidthRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property widthTop.
	 * 
	 * For further details take a look at the property definition: {@link #widthTop}.
	 * 
	 */
	getWidthTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property colorBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #colorBottom}.
	 * 
	 */
	initColorBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property colorLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #colorLeft}.
	 * 
	 */
	initColorLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property colorRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #colorRight}.
	 * 
	 */
	initColorRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property colorTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #colorTop}.
	 * 
	 */
	initColorTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property styleBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #styleBottom}.
	 * 
	 */
	initStyleBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property styleLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #styleLeft}.
	 * 
	 */
	initStyleLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property styleRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #styleRight}.
	 * 
	 */
	initStyleRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property styleTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #styleTop}.
	 * 
	 */
	initStyleTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property widthBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #widthBottom}.
	 * 
	 */
	initWidthBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property widthLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #widthLeft}.
	 * 
	 */
	initWidthLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property widthRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #widthRight}.
	 * 
	 */
	initWidthRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property widthTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #widthTop}.
	 * 
	 */
	initWidthTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property bottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #bottom}.
	 * 
	 */
	resetBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property color.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	resetColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property colorBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #colorBottom}.
	 * 
	 */
	resetColorBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property colorLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #colorLeft}.
	 * 
	 */
	resetColorLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property colorRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #colorRight}.
	 * 
	 */
	resetColorRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property colorTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #colorTop}.
	 * 
	 */
	resetColorTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property left.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #left}.
	 * 
	 */
	resetLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property right.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #right}.
	 * 
	 */
	resetRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property style.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #style}.
	 * 
	 */
	resetStyle : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property styleBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #styleBottom}.
	 * 
	 */
	resetStyleBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property styleLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #styleLeft}.
	 * 
	 */
	resetStyleLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property styleRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #styleRight}.
	 * 
	 */
	resetStyleRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property styleTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #styleTop}.
	 * 
	 */
	resetStyleTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property top.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #top}.
	 * 
	 */
	resetTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property width.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #width}.
	 * 
	 */
	resetWidth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property widthBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #widthBottom}.
	 * 
	 */
	resetWidthBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property widthLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #widthLeft}.
	 * 
	 */
	resetWidthLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property widthRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #widthRight}.
	 * 
	 */
	resetWidthRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property widthTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #widthTop}.
	 * 
	 */
	resetWidthTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group bottom.
	 * 
	 * For further details take a look at the property definition: {@link #bottom}.
	 * 
	 */
	setBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group color.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	setColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property colorBottom.
	 * 
	 * For further details take a look at the property definition: {@link #colorBottom}.
	 * 
	 */
	setColorBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property colorLeft.
	 * 
	 * For further details take a look at the property definition: {@link #colorLeft}.
	 * 
	 */
	setColorLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property colorRight.
	 * 
	 * For further details take a look at the property definition: {@link #colorRight}.
	 * 
	 */
	setColorRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property colorTop.
	 * 
	 * For further details take a look at the property definition: {@link #colorTop}.
	 * 
	 */
	setColorTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group left.
	 * 
	 * For further details take a look at the property definition: {@link #left}.
	 * 
	 */
	setLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group right.
	 * 
	 * For further details take a look at the property definition: {@link #right}.
	 * 
	 */
	setRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group style.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #style}.
	 * 
	 */
	setStyle : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property styleBottom.
	 * 
	 * For further details take a look at the property definition: {@link #styleBottom}.
	 * 
	 */
	setStyleBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property styleLeft.
	 * 
	 * For further details take a look at the property definition: {@link #styleLeft}.
	 * 
	 */
	setStyleLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property styleRight.
	 * 
	 * For further details take a look at the property definition: {@link #styleRight}.
	 * 
	 */
	setStyleRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property styleTop.
	 * 
	 * For further details take a look at the property definition: {@link #styleTop}.
	 * 
	 */
	setStyleTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group top.
	 * 
	 * For further details take a look at the property definition: {@link #top}.
	 * 
	 */
	setTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group width.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #width}.
	 * 
	 */
	setWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property widthBottom.
	 * 
	 * For further details take a look at the property definition: {@link #widthBottom}.
	 * 
	 */
	setWidthBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property widthLeft.
	 * 
	 * For further details take a look at the property definition: {@link #widthLeft}.
	 * 
	 */
	setWidthLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property widthRight.
	 * 
	 * For further details take a look at the property definition: {@link #widthRight}.
	 * 
	 */
	setWidthRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property widthTop.
	 * 
	 * For further details take a look at the property definition: {@link #widthTop}.
	 * 
	 */
	setWidthTop : vjo.NEEDS_IMPL
})
.endType();