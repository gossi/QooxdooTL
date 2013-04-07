/**
 * A cross browser iframe instance.
 */
//>public
vjo.ctype('qx.html.Iframe')
.inherits('qx.html.Element')
.protos({
	/**
	 * Wrapper for the HTML Iframe element.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Handle user navigation. Sync actual URL of iframe with source property.
	 * 
	 */
	__onNavigate : vjo.NEEDS_IMPL,


	/**
	 */
	_applyProperty : vjo.NEEDS_IMPL,


	/**
	 */
	_createDomElement : vjo.NEEDS_IMPL,


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
	 * Get the current name.
	 * 
	 */
	getName : vjo.NEEDS_IMPL,


	/**
	 * Get the current source.
	 * 
	 */
	getSource : vjo.NEEDS_IMPL,


	/**
	 * Get the DOM window object of an iframe.
	 * 
	 */
	getWindow : vjo.NEEDS_IMPL,


	/**
	 * Reloads iframe
	 * 
	 */
	reload : vjo.NEEDS_IMPL,


	/**
	 * Sets iframe&#8217;s name attribute to given value
	 * 
	 */
	setName : vjo.NEEDS_IMPL,


	/**
	 * Sets iframe&#8217;s source attribute to given value
	 * 
	 */
	setSource : vjo.NEEDS_IMPL
})
.endType();