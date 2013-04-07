/**
 * EXPERIMENTAL!
 * 
 * Themeable Cell renderer.
 * 
 * This cell renderer can be styled by an appearance theme.
 */
//>public
vjo.ctype('qx.ui.virtual.cell.Cell')
.inherits('qx.ui.virtual.cell.Abstract')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Apply the themed values to the properties
	 * 
	 */
	__applyThemeValues : vjo.NEEDS_IMPL,


	/**
	 * Cache the themed values for the current state combination
	 * 
	 */
	__cacheThemedValues : vjo.NEEDS_IMPL,


	/**
	 * Remove the themed value from all CSS properties
	 * 
	 */
	__clearThemedPropertyValues : vjo.NEEDS_IMPL,


	/**
	 * Compute a CSS class for the current values of all CSS properties
	 * 
	 */
	__computeCssClassForStates : vjo.NEEDS_IMPL,


	/**
	 * Collect all themable properties, which are not CSS properties
	 * 
	 */
	__initializeThemableProperties : vjo.NEEDS_IMPL,


	/**
	 * Set the cell states and set the correct CSS class for the given state
	 * combination
	 * 
	 */
	__setStates : vjo.NEEDS_IMPL,


	/**
	 * Set the new themed value for all CSS properties given the set of states
	 * 
	 */
	__updateThemeableProperties : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property appearance.
	 * 
	 * For further details take a look at the property definition: {@link #appearance}.
	 * 
	 */
	_applyAppearance : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property backgroundColor.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	_applyBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property font.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	_applyFont : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties paddingBottom, paddingLeft, paddingRight and paddingTop.
	 * 
	 * For further details take a look at the property definitions: {@link #paddingBottom}, {@link #paddingLeft}, {@link #paddingRight} and {@link #paddingTop}.
	 * 
	 */
	_applyPadding : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property textAlign.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	_applyTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property textColor.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	_applyTextColor : vjo.NEEDS_IMPL,


	/**
	 * Get a list of all properties, which should be applied as CSS styles.
	 * 
	 */
	_getCssProperties : vjo.NEEDS_IMPL,


	/**
	 * Compute the value of the given property
	 * 
	 */
	_getValue : vjo.NEEDS_IMPL,


	/**
	 * Store a properties computed style string either in the user or in the
	 * theme values. User values will be applied as inline styles, while theme
	 * values are stored in a stylesheet.
	 * 
	 */
	_storeStyle : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property appearance.
	 * 
	 * For further details take a look at the property definition: {@link #appearance}.
	 * 
	 */
	getAppearance : vjo.NEEDS_IMPL,


	/**
	 */
	getAttributes : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property backgroundColor.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	getBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 */
	getCellProperties : vjo.NEEDS_IMPL,


	/**
	 */
	getContent : vjo.NEEDS_IMPL,


	/**
	 */
	getCssClasses : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property font.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	getFont : vjo.NEEDS_IMPL,


	/**
	 */
	getInsets : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property paddingBottom.
	 * 
	 * For further details take a look at the property definition: {@link #paddingBottom}.
	 * 
	 */
	getPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property paddingLeft.
	 * 
	 * For further details take a look at the property definition: {@link #paddingLeft}.
	 * 
	 */
	getPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property paddingRight.
	 * 
	 * For further details take a look at the property definition: {@link #paddingRight}.
	 * 
	 */
	getPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property paddingTop.
	 * 
	 * For further details take a look at the property definition: {@link #paddingTop}.
	 * 
	 */
	getPaddingTop : vjo.NEEDS_IMPL,


	/**
	 */
	getStyles : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property textAlign.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	getTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property textColor.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	getTextColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property appearance
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #appearance}.
	 * 
	 */
	initAppearance : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property backgroundColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	initBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property font
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	initFont : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property paddingBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #paddingBottom}.
	 * 
	 */
	initPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property paddingLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #paddingLeft}.
	 * 
	 */
	initPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property paddingRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #paddingRight}.
	 * 
	 */
	initPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property paddingTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #paddingTop}.
	 * 
	 */
	initPaddingTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property textAlign
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	initTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property textColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	initTextColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property appearance.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #appearance}.
	 * 
	 */
	resetAppearance : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property backgroundColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	resetBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property font.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	resetFont : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property padding.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #padding}.
	 * 
	 */
	resetPadding : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property paddingBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #paddingBottom}.
	 * 
	 */
	resetPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property paddingLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #paddingLeft}.
	 * 
	 */
	resetPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property paddingRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #paddingRight}.
	 * 
	 */
	resetPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property paddingTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #paddingTop}.
	 * 
	 */
	resetPaddingTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property textAlign.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	resetTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property textColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	resetTextColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property appearance.
	 * 
	 * For further details take a look at the property definition: {@link #appearance}.
	 * 
	 */
	setAppearance : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property backgroundColor.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	setBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property font.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	setFont : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group padding.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #padding}.
	 * 
	 */
	setPadding : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property paddingBottom.
	 * 
	 * For further details take a look at the property definition: {@link #paddingBottom}.
	 * 
	 */
	setPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property paddingLeft.
	 * 
	 * For further details take a look at the property definition: {@link #paddingLeft}.
	 * 
	 */
	setPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property paddingRight.
	 * 
	 * For further details take a look at the property definition: {@link #paddingRight}.
	 * 
	 */
	setPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property paddingTop.
	 * 
	 * For further details take a look at the property definition: {@link #paddingTop}.
	 * 
	 */
	setPaddingTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property textAlign.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	setTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property textColor.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	setTextColor : vjo.NEEDS_IMPL
})
.endType();