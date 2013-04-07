/**
 * Manager for color themes
 */
//>public
vjo.ctype('qx.theme.manager.Color')
.inherits('qx.util.ValueManager')
.protos({
	/**
	 * Helper to take a color stored in the theme and returns the string color value.
	 * In most of the times that means it just returns the string stored in the theme.
	 * It additionally checks if its a valid color at all.
	 * 
	 */
	__parseColor : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property theme.
	 * 
	 * For further details take a look at the property definition: {@link #theme}.
	 * 
	 */
	setTheme : vjo.NEEDS_IMPL
})
.endType();