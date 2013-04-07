/**
 * Container widget for internal frames (iframes) with qooxdoo scroll bar and
 * size hint support.
 * 
 * An iframe can display any HTML page inside the widget. Note that custom
 * scroll bars do only work if the iframe&#8217;s source points to the same domain
 * as the application.
 */
//>public
vjo.ctype('qx.ui.embed.ThemedIframe')
.inherits('qx.ui.embed.AbstractIframe')
.mixin('qx.ui.core.scroll.MWheelHandling')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Attach mouse wheel listener to the iframe
	 * 
	 */
	_addWheelListener : vjo.NEEDS_IMPL,


	/**
	 * Configures the given scollbar
	 * 
	 */
	_configureScrollbar : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Hide all scrollbars and stop observing the iframe document
	 * 
	 */
	_disableScollbars : vjo.NEEDS_IMPL,


	/**
	 */
	_getIframeElement : vjo.NEEDS_IMPL,


	/**
	 * Compute the size of the iframe body
	 * 
	 */
	_getIframeSize : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the iframe&#8217;s load event
	 * 
	 */
	_onIframeLoad : vjo.NEEDS_IMPL,


	/**
	 * Event handler, which is called periodically to update the scroll bars
	 * 
	 */
	_onIframeObserverInterval : vjo.NEEDS_IMPL,


	/**
	 * Event handler for resize event of the iframe widget.
	 * 
	 */
	_onIframeResize : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the scroll event of the horizontal scrollbar
	 * 
	 */
	_onScrollBarX : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the scroll event of the vertical scrollbar
	 * 
	 */
	_onScrollBarY : vjo.NEEDS_IMPL,


	/**
	 * Try to hide native scrollbars in the iframe
	 * 
	 */
	_preventIframeScrolling : vjo.NEEDS_IMPL,


	/**
	 * Start observing size changes of the iframe document
	 * 
	 */
	_startIframeObserver : vjo.NEEDS_IMPL,


	/**
	 * Stop observing size changes of the iframe document
	 * 
	 */
	_stopIframeObserver : vjo.NEEDS_IMPL,


	/**
	 * Update visibility of the corner widget based on the visibility of the
	 * scrollbars
	 * 
	 */
	_updateCornerWidget : vjo.NEEDS_IMPL,


	/**
	 * Recompute scrollbar visibility and positions based on the iframe&#8217;s
	 * document size
	 * 
	 */
	_updateScrollbars : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scrollbarX.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbarX}.
	 * 
	 */
	getScrollbarX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scrollbarY.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbarY}.
	 * 
	 */
	getScrollbarY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scrollbarX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbarX}.
	 * 
	 */
	initScrollbarX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scrollbarY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbarY}.
	 * 
	 */
	initScrollbarY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scrollbar.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbar}.
	 * 
	 */
	resetScrollbar : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scrollbarX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbarX}.
	 * 
	 */
	resetScrollbarX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scrollbarY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbarY}.
	 * 
	 */
	resetScrollbarY : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the iframe&#8217;s content to the given left coordinate
	 * 
	 */
	scrollToX : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the iframe&#8217;s content to the given top coordinate
	 * 
	 */
	scrollToY : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group scrollbar.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbar}.
	 * 
	 */
	setScrollbar : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scrollbarX.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbarX}.
	 * 
	 */
	setScrollbarX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scrollbarY.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbarY}.
	 * 
	 */
	setScrollbarY : vjo.NEEDS_IMPL
})
.endType();