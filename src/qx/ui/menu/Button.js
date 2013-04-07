/**
 * The real menu button class which supports a command and an icon. All
 * other features are inherited from the {@link qx.ui.menu.AbstractButton}
 * class.
 */
//>public
vjo.ctype('qx.ui.menu.Button')
.inherits('qx.ui.menu.AbstractButton')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_onClick : vjo.NEEDS_IMPL,


	/**
	 */
	_onKeyPress : vjo.NEEDS_IMPL
})
.endType();