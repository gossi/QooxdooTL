/**
 * Layouter for horizontal split panes.
 */
//>internal
vjo.ctype('qx.ui.splitpane.HLayout')
.inherits('qx.ui.layout.Abstract')
.protos({
	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL
})
.endType();