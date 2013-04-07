/**
 * Core effect &#8220;Scroll&#8221;
 * 
 * Scrolls to specified coordinates on given element.
 */
//>public
vjo.ctype('qx.fx.effect.core.Scroll')
.inherits('qx.fx.Base')
.protos({
	/**
	 * Helper function verifying if scroll action can
	 * be performed or if scroll properties are at a limit.
	 * 
	 */
	_atEndPosition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property mode.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	getMode : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property x.
	 * 
	 * For further details take a look at the property definition: {@link #x}.
	 * 
	 */
	getX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property y.
	 * 
	 * For further details take a look at the property definition: {@link #y}.
	 * 
	 */
	getY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property mode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	initMode : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property x
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #x}.
	 * 
	 */
	initX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property y
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #y}.
	 * 
	 */
	initY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property mode.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	resetMode : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property x.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #x}.
	 * 
	 */
	resetX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property y.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #y}.
	 * 
	 */
	resetY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property mode.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	setMode : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property x.
	 * 
	 * For further details take a look at the property definition: {@link #x}.
	 * 
	 */
	setX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property y.
	 * 
	 * For further details take a look at the property definition: {@link #y}.
	 * 
	 */
	setY : vjo.NEEDS_IMPL,


	/**
	 */
	start : vjo.NEEDS_IMPL,


	/**
	 */
	update : vjo.NEEDS_IMPL
})
.endType();