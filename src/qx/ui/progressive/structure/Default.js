/**
 * Structure definition for Progressive
 */
//>public
vjo.ctype('qx.ui.progressive.structure.Default')
.inherits('qx.ui.progressive.structure.Abstract')
.protos({
	/**
	 * The default structure for use by Progressive.  It includes a header, a
	 * footer, and a pane.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	applyStructure : vjo.NEEDS_IMPL,


	/**
	 * Return the footer
	 * 
	 */
	getFooter : vjo.NEEDS_IMPL,


	/**
	 * Return the header
	 * 
	 */
	getHeader : vjo.NEEDS_IMPL
})
.endType();