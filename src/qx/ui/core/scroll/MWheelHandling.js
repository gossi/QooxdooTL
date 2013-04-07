/**
 * Mixin holding the handler for the two axis mouse wheel scrolling. Please
 * keep in mind that the including widget has to have the scroll bars
 * implemented as child controls named scrollbar-x and
 * scrollbar-y to get the handler working. Also, you have to
 * attach the listener yourself.
 */
//>public
vjo.mtype('qx.ui.core.scroll.MWheelHandling')
.protos({
	/**
	 * Mouse wheel event handler
	 * 
	 */
	_onMouseWheel : vjo.NEEDS_IMPL
})
.endType();