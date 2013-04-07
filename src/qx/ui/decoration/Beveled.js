/**
 * Beveled is a variant of a rounded decorator which is quite optimal
 * regarding performance and still delivers a good set of features:
 * 
 * 
 * One pixel rounded border
 * Inner glow color with optional transparency
 * Repeated or scaled background image

 */
//>public
vjo.ctype('qx.ui.decoration.Beveled')
.inherits('qx.ui.decoration.Abstract')
.mixin(['qx.ui.decoration.MBackgroundImage','qx.ui.decoration.MBackgroundColor'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties innerColor, innerOpacity and outerColor.
	 * 
	 * For further details take a look at the property definitions: {@link #innerColor}, {@link #innerOpacity} and {@link #outerColor}.
	 * 
	 */
	_applyStyle : vjo.NEEDS_IMPL,


	/**
	 */
	_getDefaultInsets : vjo.NEEDS_IMPL,


	/**
	 */
	_isInitialized : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property innerColor.
	 * 
	 * For further details take a look at the property definition: {@link #innerColor}.
	 * 
	 */
	getInnerColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property innerOpacity.
	 * 
	 * For further details take a look at the property definition: {@link #innerOpacity}.
	 * 
	 */
	getInnerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property outerColor.
	 * 
	 * For further details take a look at the property definition: {@link #outerColor}.
	 * 
	 */
	getOuterColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property innerColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #innerColor}.
	 * 
	 */
	initInnerColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property innerOpacity
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #innerOpacity}.
	 * 
	 */
	initInnerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property outerColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #outerColor}.
	 * 
	 */
	initOuterColor : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property innerOpacity.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #innerOpacity}.
	 * 
	 */
	resetInnerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property outerColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #outerColor}.
	 * 
	 */
	resetOuterColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property innerColor.
	 * 
	 * For further details take a look at the property definition: {@link #innerColor}.
	 * 
	 */
	setInnerColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property innerOpacity.
	 * 
	 * For further details take a look at the property definition: {@link #innerOpacity}.
	 * 
	 */
	setInnerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property outerColor.
	 * 
	 * For further details take a look at the property definition: {@link #outerColor}.
	 * 
	 */
	setOuterColor : vjo.NEEDS_IMPL
})
.endType();