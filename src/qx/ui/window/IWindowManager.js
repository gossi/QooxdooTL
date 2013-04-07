/**
 * Required interface for all window manager.
 * 
 * Window manager handle the z-order and modality blocking of windows managed
 * by the connected desktop {@link IDesktop}.
 */
//>public
vjo.itype('qx.ui.window.IWindowManager')
.protos({
	/**
	 * Ask the manager to bring a window to the front.
	 * 
	 */
	bringToFront : vjo.NEEDS_IMPL,


	/**
	 * Inform the window manager about a new active window
	 * 
	 */
	changeActiveWindow : vjo.NEEDS_IMPL,


	/**
	 * Ask the manager to send a window to the back.
	 * 
	 */
	sendToBack : vjo.NEEDS_IMPL,


	/**
	 * Connect the window manager to the window desktop
	 * 
	 */
	setDesktop : vjo.NEEDS_IMPL,


	/**
	 * Update the window order and modality blocker
	 * 
	 */
	updateStack : vjo.NEEDS_IMPL
})
.endType();