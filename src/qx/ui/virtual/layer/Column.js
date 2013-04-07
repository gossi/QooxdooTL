/**
 * EXPERIMENTAL!
 * 
 * The Row layer renders row background colors.
 */
//>public
vjo.ctype('qx.ui.virtual.layer.Column')
.inherits('qx.ui.virtual.layer.AbstractBackground')
.protos({
	/**
	 */
	_fullUpdate : vjo.NEEDS_IMPL,


	/**
	 */
	setColor : vjo.NEEDS_IMPL,


	/**
	 */
	updateLayerWindow : vjo.NEEDS_IMPL
})
.endType();