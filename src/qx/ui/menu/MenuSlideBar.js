/**
 * The MenuSlideBar is used to scroll menus if they don&#8217;t fit on the screen.
 */
//>internal
vjo.ctype('qx.ui.menu.MenuSlideBar')
.inherits('qx.ui.container.SlideBar')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL
})
.endType();