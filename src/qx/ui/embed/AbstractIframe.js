/**
 * Abstract base class for iframe widgets.
 */
//>public
vjo.ctype('qx.ui.embed.AbstractIframe')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Handle user navigation. Sync actual URL of iframe with source property.
	 * 
	 */
	__onNavigate : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property frameName.
	 * 
	 * For further details take a look at the property definition: {@link #frameName}.
	 * 
	 */
	_applyFrameName : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property source.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	_applySource : vjo.NEEDS_IMPL,


	/**
	 * Get the Element wrapper for the iframe
	 * 
	 */
	_getIframeElement : vjo.NEEDS_IMPL,


	/**
	 * Get the HTML body element of the iframe.
	 * 
	 */
	getBody : vjo.NEEDS_IMPL,


	/**
	 * Get the DOM document object of an iframe.
	 * 
	 */
	getDocument : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property frameName.
	 * 
	 * For further details take a look at the property definition: {@link #frameName}.
	 * 
	 */
	getFrameName : vjo.NEEDS_IMPL,


	/**
	 * Get the current name.
	 * 
	 */
	getName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property source.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	getSource : vjo.NEEDS_IMPL,


	/**
	 * Get the DOM window object of an iframe.
	 * 
	 */
	getWindow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property frameName
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #frameName}.
	 * 
	 */
	initFrameName : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property source
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	initSource : vjo.NEEDS_IMPL,


	/**
	 * Reload the contents of the iframe.
	 * 
	 */
	reload : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property frameName.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #frameName}.
	 * 
	 */
	resetFrameName : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property source.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	resetSource : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property frameName.
	 * 
	 * For further details take a look at the property definition: {@link #frameName}.
	 * 
	 */
	setFrameName : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property source.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	setSource : vjo.NEEDS_IMPL
})
.endType();