/**
 * Container, which provides scrolling in one dimension (vertical or horizontal).
 */
//>public
vjo.ctype('qx.ui.container.SlideBar')
.inherits('qx.ui.core.Widget')
.mixin(['qx.ui.core.MRemoteChildrenHandling','qx.ui.core.MRemoteLayoutHandling'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	_applyOrientation : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Hide the arrows (Called from resize event)
	 * 
	 */
	_hideArrows : vjo.NEEDS_IMPL,


	/**
	 * Scroll handler for left scrolling
	 * 
	 */
	_onExecuteBackward : vjo.NEEDS_IMPL,


	/**
	 * Scroll handler for right scrolling
	 * 
	 */
	_onExecuteForward : vjo.NEEDS_IMPL,


	/**
	 * Scrolls pane on mousewheel events
	 * 
	 */
	_onMouseWheel : vjo.NEEDS_IMPL,


	/**
	 * Helper function for Gecko. Modifies the scroll offset when a child is
	 * removed.
	 * 
	 */
	_onRemoveChild : vjo.NEEDS_IMPL,


	/**
	 * Listener for resize event. This event is fired after the
	 * first flush of the element which leads to another queuing
	 * when the changes modify the visibility of the scroll buttons.
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Update arrow enabled state after scrolling
	 * 
	 */
	_onScroll : vjo.NEEDS_IMPL,


	/**
	 * Handler to fire the &#8216;scrollAnimationEnd&#8217; event.
	 * 
	 */
	_onScrollAnimationEnd : vjo.NEEDS_IMPL,


	/**
	 * Show the arrows (Called from resize event)
	 * 
	 */
	_showArrows : vjo.NEEDS_IMPL,


	/**
	 * Update arrow enabled state
	 * 
	 */
	_updateArrowsEnabled : vjo.NEEDS_IMPL,


	/**
	 */
	getChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	getOrientation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scrollStep.
	 * 
	 * For further details take a look at the property definition: {@link #scrollStep}.
	 * 
	 */
	getScrollStep : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property orientation
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	initOrientation : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scrollStep
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scrollStep}.
	 * 
	 */
	initScrollStep : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property orientation.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	resetOrientation : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scrollStep.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scrollStep}.
	 * 
	 */
	resetScrollStep : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element&#8217;s content by the given amount.
	 * 
	 */
	scrollBy : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element&#8217;s content to the given coordinate
	 * 
	 */
	scrollTo : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	setOrientation : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scrollStep.
	 * 
	 * For further details take a look at the property definition: {@link #scrollStep}.
	 * 
	 */
	setScrollStep : vjo.NEEDS_IMPL
})
.endType();