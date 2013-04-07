/**
 * Managed wrapper for the HTML canvas tag.
 */
//>public
vjo.ctype('qx.html.Canvas')
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
	 * Get the canvas element [W3C-HMTL5]
	 * 
	 */
	getCanvas : vjo.NEEDS_IMPL,


	/**
	 * Get the canvas&#8217; 2D rendering context
	 * [W3C-HTML5].
	 * All drawing operations are performed on this context.
	 * 
	 */
	getContext2d : vjo.NEEDS_IMPL,


	/**
	 * Get the height attribute of the canvas element
	 * 
	 */
	getHeight : vjo.NEEDS_IMPL,


	/**
	 * Get the width attribute of the canvas element
	 * 
	 */
	getWidth : vjo.NEEDS_IMPL,


	/**
	 * Set the height attribute of the canvas element. This property controls the
	 * size of the canvas coordinate space.
	 * 
	 */
	setHeight : vjo.NEEDS_IMPL,


	/**
	 * Set the width attribute of the canvas element. This property controls the
	 * size of the canvas coordinate space.
	 * 
	 */
	setWidth : vjo.NEEDS_IMPL
})
.endType();