/**
 * Layout used for the menu buttons which may contain four elements. A icon,
 * a label, a shortcut text and an arrow (for a sub menu)
 */
//>internal
vjo.ctype('qx.ui.menu.ButtonLayout')
.inherits('qx.ui.layout.Abstract')
.protos({
	/**
	 * Get the widget&#8217;s menu
	 * 
	 */
	__getMenu : vjo.NEEDS_IMPL,


	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL
})
.endType();