/**
 * Checks whether a given font is available on the document and fires events
 * accordingly.
 */
//>public
vjo.ctype('qx.bom.webfonts.Validator')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates the default helper elements and gets their widths
	 * 
	 */
	__init : vjo.NEEDS_IMPL,


	/**
	 * Triggers helper element size comparison and fires a ({@link #changeStatus})
	 * event with the result.
	 * 
	 */
	__onTimerInterval : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property fontFamily.
	 * 
	 * For further details take a look at the property definition: {@link #fontFamily}.
	 * 
	 */
	_applyFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Creates a span element with the comparison text ({@link #COMPARISON_STRING})
	 * and styled with the default CSS ({@link #HELPER_CSS}) plus the given
	 * font-family value and appends it to the DOM
	 * 
	 */
	_getHelperElement : vjo.NEEDS_IMPL,


	/**
	 * Creates the two helper elements styled with the font to be checked
	 * 
	 */
	_getRequestedHelpers : vjo.NEEDS_IMPL,


	/**
	 * Checks if the font is available by comparing the widths of the elements
	 * using the generic fonts to the widths of the elements using the font to
	 * be validated
	 * 
	 */
	_isFontValid : vjo.NEEDS_IMPL,


	/**
	 * Removes the helper elements from the DOM
	 * 
	 */
	_reset : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property fontFamily.
	 * 
	 * For further details take a look at the property definition: {@link #fontFamily}.
	 * 
	 */
	getFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property timeout.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	getTimeout : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property fontFamily
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #fontFamily}.
	 * 
	 */
	initFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property timeout
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	initTimeout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property fontFamily.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #fontFamily}.
	 * 
	 */
	resetFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property timeout.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	resetTimeout : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property fontFamily.
	 * 
	 * For further details take a look at the property definition: {@link #fontFamily}.
	 * 
	 */
	setFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property timeout.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	setTimeout : vjo.NEEDS_IMPL,


	/**
	 * Validates the font
	 * 
	 */
	validate : vjo.NEEDS_IMPL
})
.endType();