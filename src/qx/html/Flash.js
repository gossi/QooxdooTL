/**
 * Managed wrapper for the HTML Flash tag.
 */
//>public
vjo.ctype('qx.html.Flash')
.inherits('qx.html.Element')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_createDomElement : vjo.NEEDS_IMPL,


	/**
	 * Creates the DOM Flash movie with all needed attributes and
	 * FlashVars.
	 * 
	 */
	createFlash : vjo.NEEDS_IMPL,


	/**
	 * Returns the attributes for the Flash DOM element.
	 * 
	 */
	getAttributes : vjo.NEEDS_IMPL,


	/**
	 * Return the created DOM Flash movie.
	 * 
	 */
	getFlashElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the params for the Flash DOM element.
	 * 
	 */
	getParams : vjo.NEEDS_IMPL,


	/**
	 * Returns the FlashVars for the Flash movie.
	 * 
	 */
	getVariables : vjo.NEEDS_IMPL,


	/**
	 * Set an attribute for the Flash DOM element.
	 * 
	 */
	setAttribute : vjo.NEEDS_IMPL,


	/**
	 * Set the URL from the Flash movie to display.
	 * 
	 */
	setId : vjo.NEEDS_IMPL,


	/**
	 * Set the param for the Flash DOM element, also called attribute.
	 * 
	 */
	setParam : vjo.NEEDS_IMPL,


	/**
	 * Set the URL from the Flash movie to display.
	 * 
	 */
	setSource : vjo.NEEDS_IMPL,


	/**
	 * Set the FlashVars to pass variables to the Flash movie.
	 * 
	 */
	setVariables : vjo.NEEDS_IMPL
})
.endType();