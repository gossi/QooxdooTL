/**
 * Border implementation with two CSS borders. Both borders can be styled
 * independent of each other.
 * This mixin is usually used by {@link qx.ui.decoration.DynamicDecorator}.
 */
//>public
vjo.mtype('qx.ui.decoration.MDoubleBorder')
.mixin(['qx.ui.decoration.MSingleBorder','qx.ui.decoration.MBackgroundImage'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Special generator for the markup which creates the containing div and
	 * the sourrounding div as well.
	 * 
	 */
	__generateMarkupDoubleBorder : vjo.NEEDS_IMPL,


	/**
	 * Implementation of the interface for the double border.
	 * 
	 */
	__getDefaultInsetsForDoubleBorder : vjo.NEEDS_IMPL,


	/**
	 * Resize function for the decorator. This is suitable for the
	 * {@link qx.ui.decoration.DynamicDecorator}.
	 * 
	 */
	__resizeDoubleBorder : vjo.NEEDS_IMPL,


	/**
	 * Takes a styles map and adds the inner border styles styles in place
	 * to the given map. This is the needed behavior for
	 * {@link qx.ui.decoration.DynamicDecorator}.
	 * 
	 */
	__styleDoubleBorder : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property innerColorBottom.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorBottom}.
	 * 
	 */
	getInnerColorBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property innerColorLeft.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorLeft}.
	 * 
	 */
	getInnerColorLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property innerColorRight.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorRight}.
	 * 
	 */
	getInnerColorRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property innerColorTop.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorTop}.
	 * 
	 */
	getInnerColorTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property innerWidthBottom.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthBottom}.
	 * 
	 */
	getInnerWidthBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property innerWidthLeft.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthLeft}.
	 * 
	 */
	getInnerWidthLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property innerWidthRight.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthRight}.
	 * 
	 */
	getInnerWidthRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property innerWidthTop.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthTop}.
	 * 
	 */
	getInnerWidthTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property innerColorBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorBottom}.
	 * 
	 */
	initInnerColorBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property innerColorLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorLeft}.
	 * 
	 */
	initInnerColorLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property innerColorRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorRight}.
	 * 
	 */
	initInnerColorRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property innerColorTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorTop}.
	 * 
	 */
	initInnerColorTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property innerWidthBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthBottom}.
	 * 
	 */
	initInnerWidthBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property innerWidthLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthLeft}.
	 * 
	 */
	initInnerWidthLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property innerWidthRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthRight}.
	 * 
	 */
	initInnerWidthRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property innerWidthTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthTop}.
	 * 
	 */
	initInnerWidthTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property innerColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerColor}.
	 * 
	 */
	resetInnerColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property innerColorBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorBottom}.
	 * 
	 */
	resetInnerColorBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property innerColorLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorLeft}.
	 * 
	 */
	resetInnerColorLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property innerColorRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorRight}.
	 * 
	 */
	resetInnerColorRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property innerColorTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorTop}.
	 * 
	 */
	resetInnerColorTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property innerWidth.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidth}.
	 * 
	 */
	resetInnerWidth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property innerWidthBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthBottom}.
	 * 
	 */
	resetInnerWidthBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property innerWidthLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthLeft}.
	 * 
	 */
	resetInnerWidthLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property innerWidthRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthRight}.
	 * 
	 */
	resetInnerWidthRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property innerWidthTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthTop}.
	 * 
	 */
	resetInnerWidthTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group innerColor.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #innerColor}.
	 * 
	 */
	setInnerColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property innerColorBottom.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorBottom}.
	 * 
	 */
	setInnerColorBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property innerColorLeft.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorLeft}.
	 * 
	 */
	setInnerColorLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property innerColorRight.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorRight}.
	 * 
	 */
	setInnerColorRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property innerColorTop.
	 * 
	 * For further details take a look at the property definition: {@link #innerColorTop}.
	 * 
	 */
	setInnerColorTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group innerWidth.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidth}.
	 * 
	 */
	setInnerWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property innerWidthBottom.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthBottom}.
	 * 
	 */
	setInnerWidthBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property innerWidthLeft.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthLeft}.
	 * 
	 */
	setInnerWidthLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property innerWidthRight.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthRight}.
	 * 
	 */
	setInnerWidthRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property innerWidthTop.
	 * 
	 * For further details take a look at the property definition: {@link #innerWidthTop}.
	 * 
	 */
	setInnerWidthTop : vjo.NEEDS_IMPL
})
.endType();