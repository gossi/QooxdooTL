/**
 * This mixin is included by all widgets which supports native overflowing.
 */
//>public
vjo.mtype('qx.ui.core.MNativeOverflow')
.protos({
	/**
	 * Applies changes of the property value of the property overflowX.
	 * 
	 * For further details take a look at the property definition: {@link #overflowX}.
	 * 
	 */
	_applyOverflowX : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property overflowY.
	 * 
	 * For further details take a look at the property definition: {@link #overflowY}.
	 * 
	 */
	_applyOverflowY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property overflowX.
	 * 
	 * For further details take a look at the property definition: {@link #overflowX}.
	 * 
	 */
	getOverflowX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property overflowY.
	 * 
	 * For further details take a look at the property definition: {@link #overflowY}.
	 * 
	 */
	getOverflowY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property overflowX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #overflowX}.
	 * 
	 */
	initOverflowX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property overflowY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #overflowY}.
	 * 
	 */
	initOverflowY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property overflow.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #overflow}.
	 * 
	 */
	resetOverflow : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property overflowX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #overflowX}.
	 * 
	 */
	resetOverflowX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property overflowY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #overflowY}.
	 * 
	 */
	resetOverflowY : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group overflow.
	 * 
	 * For further details take a look at the property definition: {@link #overflow}.
	 * 
	 */
	setOverflow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property overflowX.
	 * 
	 * For further details take a look at the property definition: {@link #overflowX}.
	 * 
	 */
	setOverflowX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property overflowY.
	 * 
	 * For further details take a look at the property definition: {@link #overflowY}.
	 * 
	 */
	setOverflowY : vjo.NEEDS_IMPL
})
.endType();