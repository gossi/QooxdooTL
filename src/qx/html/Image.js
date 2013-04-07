/**
 * This is a simple image class using the low level image features of
 * qooxdoo and wraps it for the qx.html layer.
 */
//>public
vjo.ctype('qx.html.Image')
.inherits('qx.html.Element')
.protos({
	/**
	 */
	_applyProperty : vjo.NEEDS_IMPL,


	/**
	 */
	_copyData : vjo.NEEDS_IMPL,


	/**
	 */
	_createDomElement : vjo.NEEDS_IMPL,


	/**
	 */
	_removeProperty : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the image is scaled or not.
	 * 
	 */
	getScale : vjo.NEEDS_IMPL,


	/**
	 * Returns the image source.
	 * 
	 */
	getSource : vjo.NEEDS_IMPL,


	/**
	 * Resets the current source to null which means that no image
	 * is shown anymore.
	 * 
	 */
	resetSource : vjo.NEEDS_IMPL,


	/**
	 * Whether the image should be scaled or not.
	 * 
	 */
	setScale : vjo.NEEDS_IMPL,


	/**
	 * Configures the image source
	 * 
	 */
	setSource : vjo.NEEDS_IMPL
})
.endType();