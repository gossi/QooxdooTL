/**
 * All parent widgets of windows must implement this interface.
 */
//>public
vjo.itype('qx.ui.window.IDesktop')
.protos({
	/**
	 * Block direct child widgets with a zIndex below zIndex
	 * 
	 */
	blockContent : vjo.NEEDS_IMPL,


	/**
	 * Get a list of all windows added to the desktop (including hidden windows)
	 * 
	 */
	getWindows : vjo.NEEDS_IMPL,


	/**
	 * Whether the content is currently blocked
	 * 
	 */
	isContentBlocked : vjo.NEEDS_IMPL,


	/**
	 * Sets the desktop&#8217;s window manager
	 * 
	 */
	setWindowManager : vjo.NEEDS_IMPL,


	/**
	 * Whether the configured layout supports a maximized window
	 * e.g. is a Canvas.
	 * 
	 */
	supportsMaximize : vjo.NEEDS_IMPL,


	/**
	 * Remove the content blocker.
	 * 
	 */
	unblockContent : vjo.NEEDS_IMPL
})
.endType();