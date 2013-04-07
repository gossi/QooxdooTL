/**
 * This mixin redirects the layout manager to a child widget of the
 * including class. This is e.g. used in {@link qx.ui.window.Window} to configure
 * the layout manager of the window pane instead of the window directly.
 * 
 * The including class must implement the method getChildrenContainer,
 * which has to return the widget, to which the layout should be set.
 */
//>public
vjo.mtype('qx.ui.core.MRemoteLayoutHandling')
.protos({
	/**
	 * Get the widget&#8217;s layout manager.
	 * 
	 */
	getLayout : vjo.NEEDS_IMPL,


	/**
	 * Set a layout manager for the widget. A a layout manager can only be connected
	 * with one widget. Reset the connection with a previous widget first, if you
	 * like to use it in another widget instead.
	 * 
	 */
	setLayout : vjo.NEEDS_IMPL
})
.endType();