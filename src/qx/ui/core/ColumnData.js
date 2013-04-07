/**
 * All of the resizing information about a column.
 * 
 * This is used internally by qx.ui.table and qx.ui.progressive&#8217;s table and
 *  may be used for other widgets as well.
 */
//>public
vjo.ctype('qx.ui.core.ColumnData')
.inherits('qx.ui.core.LayoutItem')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Get the computed width of the column.
	 * 
	 */
	getComputedWidth : vjo.NEEDS_IMPL,


	/**
	 * Get the column&#8217;s flex value
	 * 
	 */
	getFlex : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Set the column width. The column width can be one of the following
	 * values:
	 * 
	 * 
	 * Pixels: e.g. 23
	 * Autosized: &#8220;auto&#8221;
	 * Flex: e.g. &#8220;1*&#8221;
	 * Percent: e.g. &#8220;33%&#8221;

	 * 
	 */
	setColumnWidth : vjo.NEEDS_IMPL
})
.endType();