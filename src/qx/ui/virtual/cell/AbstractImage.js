/**
 * Abstract base class for image cell renderer.
 * 
 * EXPERIMENTAL!
 */
//>public abstract
vjo.ctype('qx.ui.virtual.cell.AbstractImage')
.inherits('qx.ui.virtual.cell.Cell')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Compute image meta data
	 * 
	 */
	__createImage : vjo.NEEDS_IMPL,


	/**
	 * Compute the size of the given image
	 * 
	 */
	__getImageSize : vjo.NEEDS_IMPL,


	/**
	 * Identifies the Image to show. This is a template method, which must be
	 * implements by sub classes.
	 * 
	 */
	_identifyImage : vjo.NEEDS_IMPL,


	/**
	 */
	getContent : vjo.NEEDS_IMPL
})
.endType();