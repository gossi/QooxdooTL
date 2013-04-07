/**
 * EXPERIMENTAL!
 * 
 * Abstract base class for the {@link Row} and {@link Column} layers.
 */
//>public
vjo.ctype('qx.ui.virtual.layer.AbstractBackground')
.inherits('qx.ui.virtual.layer.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property colorEven.
	 * 
	 * For further details take a look at the property definition: {@link #colorEven}.
	 * 
	 */
	_applyColorEven : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property colorOdd.
	 * 
	 * For further details take a look at the property definition: {@link #colorOdd}.
	 * 
	 */
	_applyColorOdd : vjo.NEEDS_IMPL,


	/**
	 * Clear all colors set using {@link #setColor}.
	 * 
	 */
	clearCustomColors : vjo.NEEDS_IMPL,


	/**
	 * Get the decorator at the given index
	 * 
	 */
	getBackground : vjo.NEEDS_IMPL,


	/**
	 * Get the color at the given index
	 * 
	 */
	getColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property colorEven.
	 * 
	 * For further details take a look at the property definition: {@link #colorEven}.
	 * 
	 */
	getColorEven : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property colorOdd.
	 * 
	 * For further details take a look at the property definition: {@link #colorOdd}.
	 * 
	 */
	getColorOdd : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property colorEven
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #colorEven}.
	 * 
	 */
	initColorEven : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property colorOdd
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #colorOdd}.
	 * 
	 */
	initColorOdd : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property colorEven.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #colorEven}.
	 * 
	 */
	resetColorEven : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property colorOdd.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #colorOdd}.
	 * 
	 */
	resetColorOdd : vjo.NEEDS_IMPL,


	/**
	 * Sets the decorator for the given index
	 * 
	 */
	setBackground : vjo.NEEDS_IMPL,


	/**
	 * Sets the color for the given index
	 * 
	 */
	setColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property colorEven.
	 * 
	 * For further details take a look at the property definition: {@link #colorEven}.
	 * 
	 */
	setColorEven : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property colorOdd.
	 * 
	 * For further details take a look at the property definition: {@link #colorOdd}.
	 * 
	 */
	setColorOdd : vjo.NEEDS_IMPL
})
.endType();