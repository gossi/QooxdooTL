/**
 * Manager for font themes
 */
//>public
vjo.ctype('qx.theme.manager.Font')
.inherits('qx.util.ValueManager')
.protos({
	/**
	 * Decides which Font class should be used based on the theme configuration
	 * 
	 */
	__getFontClass : vjo.NEEDS_IMPL,


	/**
	 * Checks for includes and resolves them recursively
	 * 
	 */
	__resolveInclude : vjo.NEEDS_IMPL,


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
	 * Whether a value is interpreted dynamically
	 * 
	 */
	isDynamic : vjo.NEEDS_IMPL,


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
	 * Returns the dynamically interpreted result for the incoming value,
	 * (if available), otherwise returns the original value
	 * 
	 */
	resolve : vjo.NEEDS_IMPL,


	/**
	 * Returns the dynamically interpreted result for the incoming value
	 * 
	 */
	resolveDynamic : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property theme.
	 * 
	 * For further details take a look at the property definition: {@link #theme}.
	 * 
	 */
	setTheme : vjo.NEEDS_IMPL
})
.endType();