/**
 * This mixin exposes all methods to manage the layout manager of a widget.
 * It can only be included into instances of {@link Widget}.
 * 
 * To optimize the method calls the including widget should call the method
 * {@link #remap} in its defer function. This will map the protected
 * methods to the public ones and save one method call for each function.
 */
//>public
vjo.mtype('qx.ui.mobile.core.MLayoutHandling')
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