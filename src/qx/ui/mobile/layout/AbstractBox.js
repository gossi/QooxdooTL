/**
 * Base class for all box layout managers.
 */
//>public abstract
vjo.ctype('qx.ui.mobile.layout.AbstractBox')
.inherits('qx.ui.mobile.layout.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties alignX, alignY and reversed.
	 * 
	 * For further details take a look at the property definitions: {@link #alignX}, {@link #alignY} and {@link #reversed}.
	 * 
	 */
	_applyLayoutChange : vjo.NEEDS_IMPL,


	/**
	 */
	_getSupportedChildLayoutProperties : vjo.NEEDS_IMPL,


	/**
	 */
	_setLayoutProperty : vjo.NEEDS_IMPL,


	/**
	 */
	connectToWidget : vjo.NEEDS_IMPL,


	/**
	 */
	disconnectFromChildWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property alignX.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	getAlignX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property alignY.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	getAlignY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property reversed.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	getReversed : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property alignX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	initAlignX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property alignY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	initAlignY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property reversed
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	initReversed : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property reversed equals true.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	isReversed : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property alignX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	resetAlignX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property alignY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	resetAlignY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property reversed.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	resetReversed : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property alignX.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	setAlignX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property alignY.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	setAlignY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property reversed.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	setReversed : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property reversed.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	toggleReversed : vjo.NEEDS_IMPL
})
.endType();