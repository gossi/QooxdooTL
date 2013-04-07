/**
 * A cell renderer which hides cell values such as passwords form view
 * by masking them by *s
 */
//>public
vjo.ctype('qx.ui.table.cellrenderer.Password')
.inherits('qx.ui.table.cellrenderer.Default')
.protos({
	/**
	 * Overridden; called whenever the cell updates.
	 * 
	 */
	_getContentHtml : vjo.NEEDS_IMPL
})
.endType();