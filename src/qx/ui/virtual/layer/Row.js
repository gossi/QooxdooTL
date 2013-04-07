/**
 * EXPERIMENTAL!
 * 
 * The Row layer renders row background colors.
 */
//>public
vjo.ctype('qx.ui.virtual.layer.Row')
.inherits('qx.ui.virtual.layer.AbstractBackground')
.protos({
	/**
	 * Whether the row with the given index is currently rendered (i.e. in the
	 * layer&#8217;s view port).
	 * 
	 */
	__isRowRendered : vjo.NEEDS_IMPL,


	/**
	 */
	_fullUpdate : vjo.NEEDS_IMPL,


	/**
	 */
	_updateLayerWindow : vjo.NEEDS_IMPL,


	/**
	 */
	setBackground : vjo.NEEDS_IMPL,


	/**
	 */
	setColor : vjo.NEEDS_IMPL
})
.endType();