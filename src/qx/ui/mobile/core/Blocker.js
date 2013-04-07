/**
 * This class blocks events and can be included into all widgets.
 */
//>public
vjo.ctype('qx.ui.mobile.core.Blocker')
.inherits('qx.ui.mobile.core.Widget')
.protos({
	/**
	 * Registers all needed event listener.
	 * 
	 */
	__registerEventListener : vjo.NEEDS_IMPL,


	/**
	 * Unregisters all needed event listener.
	 * 
	 */
	__unregisterEventListener : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the scroll event occurs.
	 * 
	 */
	_onScroll : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the touch event occurs.
	 * Prevents the default of the event.
	 * 
	 */
	_onTouch : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called whenever the size of the blocker should be updated.
	 * 
	 */
	_updateSize : vjo.NEEDS_IMPL,


	/**
	 * Force the blocker to hide, even when the show counter is larger than
	 * zero.
	 * 
	 */
	forceHide : vjo.NEEDS_IMPL,


	/**
	 * Hides the blocker. The blocker is only hidden when the hide method
	 * is called as many times as the {@link #show} method.
	 * 
	 */
	hide : vjo.NEEDS_IMPL,


	/**
	 * Whether the blocker is shown or not.
	 * 
	 */
	isShown : vjo.NEEDS_IMPL,


	/**
	 * Shows the blocker. When the show method is called a counter is incremented.
	 * The {@link #hide} method needs to be called as many times as the {@link #show}
	 * method. This behavior is useful, when you want to show a loading indicator.
	 * 
	 */
	show : vjo.NEEDS_IMPL
})
.endType();