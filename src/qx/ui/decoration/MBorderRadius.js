/**
 * Mixin for the border radius CSS property.
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
vjo.mtype('qx.ui.decoration.MBorderRadius')
.protos({
	/**
	 * Applies changes of the property value of the properties radiusBottomLeft, radiusBottomRight, radiusTopLeft and radiusTopRight.
	 * 
	 * For further details take a look at the property definitions: {@link #radiusBottomLeft}, {@link #radiusBottomRight}, {@link #radiusTopLeft} and {@link #radiusTopRight}.
	 * 
	 */
	_applyBorderRadius : vjo.NEEDS_IMPL,


	/**
	 * Takes a styles map and adds the border radius styles in place to the
	 * given map. This is the needed behavior for
	 * {@link qx.ui.decoration.DynamicDecorator}.
	 * 
	 */
	_styleBorderRadius : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property radiusBottomLeft.
	 * 
	 * For further details take a look at the property definition: {@link #radiusBottomLeft}.
	 * 
	 */
	getRadiusBottomLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property radiusBottomRight.
	 * 
	 * For further details take a look at the property definition: {@link #radiusBottomRight}.
	 * 
	 */
	getRadiusBottomRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property radiusTopLeft.
	 * 
	 * For further details take a look at the property definition: {@link #radiusTopLeft}.
	 * 
	 */
	getRadiusTopLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property radiusTopRight.
	 * 
	 * For further details take a look at the property definition: {@link #radiusTopRight}.
	 * 
	 */
	getRadiusTopRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property radiusBottomLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #radiusBottomLeft}.
	 * 
	 */
	initRadiusBottomLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property radiusBottomRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #radiusBottomRight}.
	 * 
	 */
	initRadiusBottomRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property radiusTopLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #radiusTopLeft}.
	 * 
	 */
	initRadiusTopLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property radiusTopRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #radiusTopRight}.
	 * 
	 */
	initRadiusTopRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property radius.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #radius}.
	 * 
	 */
	resetRadius : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property radiusBottomLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #radiusBottomLeft}.
	 * 
	 */
	resetRadiusBottomLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property radiusBottomRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #radiusBottomRight}.
	 * 
	 */
	resetRadiusBottomRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property radiusTopLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #radiusTopLeft}.
	 * 
	 */
	resetRadiusTopLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property radiusTopRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #radiusTopRight}.
	 * 
	 */
	resetRadiusTopRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group radius.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #radius}.
	 * 
	 */
	setRadius : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property radiusBottomLeft.
	 * 
	 * For further details take a look at the property definition: {@link #radiusBottomLeft}.
	 * 
	 */
	setRadiusBottomLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property radiusBottomRight.
	 * 
	 * For further details take a look at the property definition: {@link #radiusBottomRight}.
	 * 
	 */
	setRadiusBottomRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property radiusTopLeft.
	 * 
	 * For further details take a look at the property definition: {@link #radiusTopLeft}.
	 * 
	 */
	setRadiusTopLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property radiusTopRight.
	 * 
	 * For further details take a look at the property definition: {@link #radiusTopRight}.
	 * 
	 */
	setRadiusTopRight : vjo.NEEDS_IMPL
})
.endType();