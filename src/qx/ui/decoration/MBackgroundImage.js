/**
 * Mixin for supporting the background images on decorators.
 * This mixin is usually used by {@link qx.ui.decoration.DynamicDecorator}.
 */
//>public
vjo.mtype('qx.ui.decoration.MBackgroundImage')
.protos({
	/**
	 * Applies changes of the property value of the properties backgroundImage and backgroundRepeat.
	 * 
	 * For further details take a look at the property definitions: {@link #backgroundImage} and {@link #backgroundRepeat}.
	 * 
	 */
	_applyBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties backgroundPositionX and backgroundPositionY.
	 * 
	 * For further details take a look at the property definitions: {@link #backgroundPositionX} and {@link #backgroundPositionY}.
	 * 
	 */
	_applyBackgroundPosition : vjo.NEEDS_IMPL,


	/**
	 * Responsible for generating the markup for the background.
	 * This method just uses the settings in the properties to generate
	 * the markup.
	 * 
	 */
	_generateBackgroundMarkup : vjo.NEEDS_IMPL,


	/**
	 * Mapping for the dynamic decorator.
	 * 
	 */
	_generateMarkup : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property backgroundImage.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundImage}.
	 * 
	 */
	getBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property backgroundPositionX.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundPositionX}.
	 * 
	 */
	getBackgroundPositionX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property backgroundPositionY.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundPositionY}.
	 * 
	 */
	getBackgroundPositionY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property backgroundRepeat.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundRepeat}.
	 * 
	 */
	getBackgroundRepeat : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property backgroundImage
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundImage}.
	 * 
	 */
	initBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property backgroundPositionX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundPositionX}.
	 * 
	 */
	initBackgroundPositionX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property backgroundPositionY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundPositionY}.
	 * 
	 */
	initBackgroundPositionY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property backgroundRepeat
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundRepeat}.
	 * 
	 */
	initBackgroundRepeat : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property backgroundImage.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundImage}.
	 * 
	 */
	resetBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property backgroundPosition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundPosition}.
	 * 
	 */
	resetBackgroundPosition : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property backgroundPositionX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundPositionX}.
	 * 
	 */
	resetBackgroundPositionX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property backgroundPositionY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundPositionY}.
	 * 
	 */
	resetBackgroundPositionY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property backgroundRepeat.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundRepeat}.
	 * 
	 */
	resetBackgroundRepeat : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property backgroundImage.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundImage}.
	 * 
	 */
	setBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group backgroundPosition.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundPosition}.
	 * 
	 */
	setBackgroundPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property backgroundPositionX.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundPositionX}.
	 * 
	 */
	setBackgroundPositionX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property backgroundPositionY.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundPositionY}.
	 * 
	 */
	setBackgroundPositionY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property backgroundRepeat.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundRepeat}.
	 * 
	 */
	setBackgroundRepeat : vjo.NEEDS_IMPL
})
.endType();