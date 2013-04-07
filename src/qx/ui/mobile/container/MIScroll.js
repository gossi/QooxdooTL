/**
 * Mixin for the {@link Scroll} container. Used when the variant
 * qx.mobile.nativescroll is set to &#8220;off&#8221;. Uses the iScroll script to simulate
 * the CSS position:fixed style. Position fixed is not available in iOS and
 * Android < 2.2.
 */
//>public
vjo.mtype('qx.ui.mobile.container.MIScroll')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates the iScroll instance.
	 * 
	 */
	__createScrollInstance : vjo.NEEDS_IMPL,


	/**
	 * Loads and inits the iScroll instance.
	 * 
	 */
	__initScroll : vjo.NEEDS_IMPL,


	/**
	 * Load callback. Called when the iScroll script is loaded.
	 * 
	 */
	__onScrollLoaded : vjo.NEEDS_IMPL,


	/**
	 * Registers all needed event listener.
	 * 
	 */
	__registerEventListeners : vjo.NEEDS_IMPL,


	/**
	 * Unregisters all needed event listener.
	 * 
	 */
	__unregisterEventListeners : vjo.NEEDS_IMPL,


	/**
	 * Mixin method. Creates the scroll element.
	 * 
	 */
	_createScrollElement : vjo.NEEDS_IMPL,


	/**
	 * Mixin method. Returns the scroll content element..
	 * 
	 */
	_getScrollContentElement : vjo.NEEDS_IMPL,


	/**
	 * Calls the refresh function of iScroll. Needed to recalculate the
	 * scrolling container.
	 * 
	 */
	_refresh : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the wrapper contents to the x/y coordinates in a given period.
	 * 
	 */
	_scrollTo : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the wrapper contents to the widgets coordinates in a given
	 * period.
	 * 
	 */
	_scrollToElement : vjo.NEEDS_IMPL,


	/**
	 * Setter for the scroll instance.
	 * 
	 */
	_setScroll : vjo.NEEDS_IMPL,


	/**
	 * Delegation method for iScroll. Disabled the iScroll objects.
	 * Prevents any further scrolling of this container.
	 * 
	 */
	disable : vjo.NEEDS_IMPL,


	/**
	 * Delegation method for iScroll. Enables the iScroll object.
	 * 
	 */
	enable : vjo.NEEDS_IMPL
})
.endType();