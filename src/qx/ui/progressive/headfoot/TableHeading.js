/**
 * A header for a standard table.
 */
//>public
vjo.ctype('qx.ui.progressive.headfoot.TableHeading')
.inherits('qx.ui.progressive.headfoot.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the &#8220;resize&#8221; event.  We recalculate and set the
	 * new widths of each of our columns.
	 * 
	 */
	_resizeColumns : vjo.NEEDS_IMPL,


	/**
	 * This method is required by the box layout. If returns an array of items
	 * to relayout.
	 * 
	 */
	getLayoutChildren : vjo.NEEDS_IMPL,


	/**
	 */
	join : vjo.NEEDS_IMPL
})
.endType();