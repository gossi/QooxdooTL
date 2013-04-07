/**
 * Mixin for the {@link Scroll} container. Used when the variant
 * qx.mobile.nativescroll is set to &#8220;on&#8221;.
 */
//>public
vjo.mtype('qx.ui.mobile.container.MNativeScroll')
.protos({
	/**
	 * Mixin method. Creates the scroll element.
	 * 
	 */
	_createScrollElement : vjo.NEEDS_IMPL,


	/**
	 * Mixin method. Returns the scroll content element.
	 * 
	 */
	_getScrollContentElement : vjo.NEEDS_IMPL,


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
	_scrollToElement : vjo.NEEDS_IMPL
})
.endType();