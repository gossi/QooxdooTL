/**
 * Manager for appearance themes
 */
//>public
vjo.ctype('qx.theme.manager.Appearance')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the appearance entry ID to use
	 * when all aliases etc. are processed.
	 * 
	 */
	__resolveId : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property theme.
	 * 
	 * For further details take a look at the property definition: {@link #theme}.
	 * 
	 */
	_applyTheme : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property theme.
	 * 
	 * For further details take a look at the property definition: {@link #theme}.
	 * 
	 */
	getTheme : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property theme
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #theme}.
	 * 
	 */
	initTheme : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property theme.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #theme}.
	 * 
	 */
	resetTheme : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property theme.
	 * 
	 * For further details take a look at the property definition: {@link #theme}.
	 * 
	 */
	setTheme : vjo.NEEDS_IMPL,


	/**
	 * Get the result of the &#8220;state&#8221; function for a given id and states
	 * 
	 */
	styleFrom : vjo.NEEDS_IMPL
})
.endType();