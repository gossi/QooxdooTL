/**
 * The default window manager implementation
 */
//>public
vjo.ctype('qx.ui.window.Manager')
.inherits('qx.core.Object')
.satisfies('qx.ui.window.IWindowManager')
.protos({
	/**
	 * Returns the connected desktop
	 * 
	 */
	getDesktop : vjo.NEEDS_IMPL,


	/**
	 * This method is called during the flush of the
	 * {@link qx.ui.core.queue.Widget widget queue}.
	 * 
	 */
	syncWidget : vjo.NEEDS_IMPL
})
.endType();