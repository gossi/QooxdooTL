/**
 * Clipping area for the table header and table pane.
 */
//>public
vjo.ctype('qx.ui.table.pane.Clipper')
.inherits('qx.ui.container.Composite')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element&#8217;s content to the given left coordinate
	 * 
	 */
	scrollToX : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element&#8217;s content to the given top coordinate
	 * 
	 */
	scrollToY : vjo.NEEDS_IMPL
})
.endType();