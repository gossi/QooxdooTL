/**
 * Abstract Icon cell renderer.
 */
//>public abstract
vjo.ctype('qx.ui.progressive.renderer.table.cell.Icon')
.inherits('qx.ui.progressive.renderer.table.cell.Abstract')
.protos({
	/**
	 * Create a new instance of an Icon cell renderer
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Obtain the image data (url, tooltip) that&#8217;s appropriate for this cell
	 * 
	 */
	__getImageData : vjo.NEEDS_IMPL,


	/**
	 */
	_getCellStyle : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHtml : vjo.NEEDS_IMPL,


	/**
	 * Identify the image to be displayed in the cell.
	 * 
	 */
	_identifyImage : vjo.NEEDS_IMPL,


	/**
	 * Retrieve the URI for a blank image
	 * 
	 */
	getBlankImage : vjo.NEEDS_IMPL
})
.endType();