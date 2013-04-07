/**
 * A data row renderer for a simple tree row
 */
//>public
vjo.ctype('qx.ui.treevirtual.SimpleTreeDataRowRenderer')
.inherits('qx.ui.table.rowrenderer.Default')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	updateDataRowElement : vjo.NEEDS_IMPL
})
.endType();