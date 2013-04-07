/**
 * Layouter for vertical split panes.
 */
//>internal
vjo.ctype('qx.ui.splitpane.VLayout')
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