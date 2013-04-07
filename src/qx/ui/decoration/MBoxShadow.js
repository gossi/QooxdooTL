/**
 * Mixin for the box shadow CSS property.
 * This mixin is usually used by {@link qx.ui.decoration.DynamicDecorator}.
 * 
 * Keep in mind that this is not supported by all browsers:
 * 
 * 
 * Firefox 3,5+
 * IE9+
 * Safari 3.0+
 * Opera 10.5+
 * Chrome 4.0+

 */
//>public
vjo.mtype('qx.ui.decoration.MBoxShadow')
.protos({
	/**
	 * Applies changes of the property value of the properties inset, shadowBlurRadius, shadowColor, shadowHorizontalLength, shadowSpreadRadius and shadowVerticalLength.
	 * 
	 * For further details take a look at the property definitions: {@link #inset}, {@link #shadowBlurRadius}, {@link #shadowColor}, {@link #shadowHorizontalLength}, {@link #shadowSpreadRadius} and {@link #shadowVerticalLength}.
	 * 
	 */
	_applyBoxShadow : vjo.NEEDS_IMPL,


	/**
	 * Takes a styles map and adds the box shadow styles in place to the
	 * given map. This is the needed behavior for
	 * {@link qx.ui.decoration.DynamicDecorator}.
	 * 
	 */
	_styleBoxShadow : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property inset.
	 * 
	 * For further details take a look at the property definition: {@link #inset}.
	 * 
	 */
	getInset : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property shadowBlurRadius.
	 * 
	 * For further details take a look at the property definition: {@link #shadowBlurRadius}.
	 * 
	 */
	getShadowBlurRadius : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property shadowColor.
	 * 
	 * For further details take a look at the property definition: {@link #shadowColor}.
	 * 
	 */
	getShadowColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property shadowHorizontalLength.
	 * 
	 * For further details take a look at the property definition: {@link #shadowHorizontalLength}.
	 * 
	 */
	getShadowHorizontalLength : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property shadowSpreadRadius.
	 * 
	 * For further details take a look at the property definition: {@link #shadowSpreadRadius}.
	 * 
	 */
	getShadowSpreadRadius : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property shadowVerticalLength.
	 * 
	 * For further details take a look at the property definition: {@link #shadowVerticalLength}.
	 * 
	 */
	getShadowVerticalLength : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property inset
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #inset}.
	 * 
	 */
	initInset : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property shadowBlurRadius
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #shadowBlurRadius}.
	 * 
	 */
	initShadowBlurRadius : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property shadowColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #shadowColor}.
	 * 
	 */
	initShadowColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property shadowHorizontalLength
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #shadowHorizontalLength}.
	 * 
	 */
	initShadowHorizontalLength : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property shadowSpreadRadius
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #shadowSpreadRadius}.
	 * 
	 */
	initShadowSpreadRadius : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property shadowVerticalLength
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #shadowVerticalLength}.
	 * 
	 */
	initShadowVerticalLength : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property inset equals true.
	 * 
	 * For further details take a look at the property definition: {@link #inset}.
	 * 
	 */
	isInset : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property inset.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #inset}.
	 * 
	 */
	resetInset : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property shadowBlurRadius.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #shadowBlurRadius}.
	 * 
	 */
	resetShadowBlurRadius : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property shadowColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #shadowColor}.
	 * 
	 */
	resetShadowColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property shadowHorizontalLength.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #shadowHorizontalLength}.
	 * 
	 */
	resetShadowHorizontalLength : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property shadowLength.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #shadowLength}.
	 * 
	 */
	resetShadowLength : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property shadowSpreadRadius.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #shadowSpreadRadius}.
	 * 
	 */
	resetShadowSpreadRadius : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property shadowVerticalLength.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #shadowVerticalLength}.
	 * 
	 */
	resetShadowVerticalLength : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property inset.
	 * 
	 * For further details take a look at the property definition: {@link #inset}.
	 * 
	 */
	setInset : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property shadowBlurRadius.
	 * 
	 * For further details take a look at the property definition: {@link #shadowBlurRadius}.
	 * 
	 */
	setShadowBlurRadius : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property shadowColor.
	 * 
	 * For further details take a look at the property definition: {@link #shadowColor}.
	 * 
	 */
	setShadowColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property shadowHorizontalLength.
	 * 
	 * For further details take a look at the property definition: {@link #shadowHorizontalLength}.
	 * 
	 */
	setShadowHorizontalLength : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group shadowLength.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #shadowLength}.
	 * 
	 */
	setShadowLength : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property shadowSpreadRadius.
	 * 
	 * For further details take a look at the property definition: {@link #shadowSpreadRadius}.
	 * 
	 */
	setShadowSpreadRadius : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property shadowVerticalLength.
	 * 
	 * For further details take a look at the property definition: {@link #shadowVerticalLength}.
	 * 
	 */
	setShadowVerticalLength : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property inset.
	 * 
	 * For further details take a look at the property definition: {@link #inset}.
	 * 
	 */
	toggleInset : vjo.NEEDS_IMPL
})
.endType();