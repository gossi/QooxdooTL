/**
 * EXPERIMENTAL!
 * 
 * A HTML cell provider provides the {@link qx.ui.virtual.layer.HtmlCell}
 * with HTML fragments to render the cells.
 */
//>public
vjo.itype('qx.ui.virtual.core.IHtmlCellProvider')
.protos({
	/**
	 * Returns all relevant properties of the cell:
	 * 
	 * classes (String): Space separated class names
	 * style (String): CSS styles
	 * attributes (String): Space separated attributes
	 * content (String): HTML fragment of the innerHTML of the cell
	 * insets (Array): insets (padding + border) of the cell as
	 * two-dimensional array.

	 * 
	 */
	getCellProperties : vjo.NEEDS_IMPL
})
.endType();