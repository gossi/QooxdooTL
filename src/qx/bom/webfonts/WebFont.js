/**
 * Requests web fonts from {@link qx.bom.webfonts.Manager} and fires events
 * when their loading status is known.
 */
//>public
vjo.ctype('qx.bom.webfonts.WebFont')
.inherits('qx.bom.Font')
.protos({
	/**
	 * Applies changes of the property value of the property sources.
	 * 
	 * For further details take a look at the property definition: {@link #sources}.
	 * 
	 */
	_applySources : vjo.NEEDS_IMPL,


	/**
	 * Propagates web font status changes
	 * 
	 */
	_onWebFontChangeStatus : vjo.NEEDS_IMPL,


	/**
	 * Makes sure font-family names containing spaces are properly quoted
	 * 
	 */
	_quoteFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property sources.
	 * 
	 * For further details take a look at the property definition: {@link #sources}.
	 * 
	 */
	getSources : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property sources
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #sources}.
	 * 
	 */
	initSources : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property sources.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #sources}.
	 * 
	 */
	resetSources : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property sources.
	 * 
	 * For further details take a look at the property definition: {@link #sources}.
	 * 
	 */
	setSources : vjo.NEEDS_IMPL
})
.endType();