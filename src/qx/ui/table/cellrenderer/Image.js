/**
 * The image cell renderer renders image into table cells.
 */
//>public
vjo.ctype('qx.ui.table.cellrenderer.Image')
.inherits('qx.ui.table.cellrenderer.AbstractImage')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_identifyImage : vjo.NEEDS_IMPL
})
.endType();