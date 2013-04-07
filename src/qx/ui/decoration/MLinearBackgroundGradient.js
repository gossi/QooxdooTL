/**
 * Mixin for the linear background gradient CSS property.
 * This mixin is usually used by {@link qx.ui.decoration.DynamicDecorator}.
 * 
 * Keep in mind that this is not supported by all browsers:
 * 
 * 
 * Safari 4.0+
 * Chrome 4.0+
 * Firefox 3.6+
 * Opera 11.1+
 * IE 10+
 * IE 5.5+ (with limitations)
 * 
 * 
 * For IE 5.5 to IE 9,this class uses the filter rules to create the gradient. This
 * has some limitations: The start and end position property can not be used. For
 * more details, see the original documentation:
 * http://msdn.microsoft.com/en-us/library/ms532997(v=vs.85).aspx
 */
//>public
vjo.mtype('qx.ui.decoration.MLinearBackgroundGradient')
.protos({
	/**
	 * Helper to get start and end color.
	 * 
	 */
	__getColors : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties colorPositionUnit, endColor, endColorPosition, orientation, startColor and startColorPosition.
	 * 
	 * For further details take a look at the property definitions: {@link #colorPositionUnit}, {@link #endColor}, {@link #endColorPosition}, {@link #orientation}, {@link #startColor} and {@link #startColorPosition}.
	 * 
	 */
	_applyLinearBackgroundGradient : vjo.NEEDS_IMPL,


	/**
	 * Helper for IE which applies the filter used for the gradient to a separate
	 * DIV element which will be put into the decorator. This is necessary in case
	 * the decorator has rounded corners.
	 * 
	 */
	_getContent : vjo.NEEDS_IMPL,


	/**
	 * Resize function for the background color. This is suitable for the
	 * {@link qx.ui.decoration.DynamicDecorator}.
	 * 
	 */
	_resizeLinearBackgroundGradient : vjo.NEEDS_IMPL,


	/**
	 * Takes a styles map and adds the linear background styles in place to the
	 * given map. This is the needed behavior for
	 * {@link qx.ui.decoration.DynamicDecorator}.
	 * 
	 */
	_styleLinearBackgroundGradient : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property colorPositionUnit.
	 * 
	 * For further details take a look at the property definition: {@link #colorPositionUnit}.
	 * 
	 */
	getColorPositionUnit : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property endColor.
	 * 
	 * For further details take a look at the property definition: {@link #endColor}.
	 * 
	 */
	getEndColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property endColorPosition.
	 * 
	 * For further details take a look at the property definition: {@link #endColorPosition}.
	 * 
	 */
	getEndColorPosition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	getOrientation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property startColor.
	 * 
	 * For further details take a look at the property definition: {@link #startColor}.
	 * 
	 */
	getStartColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property startColorPosition.
	 * 
	 * For further details take a look at the property definition: {@link #startColorPosition}.
	 * 
	 */
	getStartColorPosition : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property colorPositionUnit
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #colorPositionUnit}.
	 * 
	 */
	initColorPositionUnit : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property endColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #endColor}.
	 * 
	 */
	initEndColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property endColorPosition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #endColorPosition}.
	 * 
	 */
	initEndColorPosition : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property orientation
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	initOrientation : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property startColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #startColor}.
	 * 
	 */
	initStartColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property startColorPosition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #startColorPosition}.
	 * 
	 */
	initStartColorPosition : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property colorPositionUnit.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #colorPositionUnit}.
	 * 
	 */
	resetColorPositionUnit : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property endColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #endColor}.
	 * 
	 */
	resetEndColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property endColorPosition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #endColorPosition}.
	 * 
	 */
	resetEndColorPosition : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property gradientEnd.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #gradientEnd}.
	 * 
	 */
	resetGradientEnd : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property gradientStart.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #gradientStart}.
	 * 
	 */
	resetGradientStart : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property orientation.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	resetOrientation : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property startColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #startColor}.
	 * 
	 */
	resetStartColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property startColorPosition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #startColorPosition}.
	 * 
	 */
	resetStartColorPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property colorPositionUnit.
	 * 
	 * For further details take a look at the property definition: {@link #colorPositionUnit}.
	 * 
	 */
	setColorPositionUnit : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property endColor.
	 * 
	 * For further details take a look at the property definition: {@link #endColor}.
	 * 
	 */
	setEndColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property endColorPosition.
	 * 
	 * For further details take a look at the property definition: {@link #endColorPosition}.
	 * 
	 */
	setEndColorPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group gradientEnd.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #gradientEnd}.
	 * 
	 */
	setGradientEnd : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group gradientStart.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #gradientStart}.
	 * 
	 */
	setGradientStart : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	setOrientation : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property startColor.
	 * 
	 * For further details take a look at the property definition: {@link #startColor}.
	 * 
	 */
	setStartColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property startColorPosition.
	 * 
	 * For further details take a look at the property definition: {@link #startColorPosition}.
	 * 
	 */
	setStartColorPosition : vjo.NEEDS_IMPL
})
.endType();