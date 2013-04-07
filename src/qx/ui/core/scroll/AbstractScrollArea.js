/**
 * The ScrollArea provides a container widget with on demand scroll bars
 * if the content size exceeds the size of the container.
 */
//>public abstract
vjo.ctype('qx.ui.core.scroll.AbstractScrollArea')
.inherits('qx.ui.core.Widget')
.mixin(['qx.ui.core.scroll.MScrollBarFactory','qx.ui.core.scroll.MWheelHandling'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper for momentum scrolling.
	 * 
	 */
	__handleScrollImpulse : vjo.NEEDS_IMPL,


	/**
	 * Computes the visibility state for scrollbars.
	 * 
	 */
	_computeScrollbars : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Event handler for visibility changes of horizontal scrollbar.
	 * 
	 */
	_onChangeScrollbarXVisibility : vjo.NEEDS_IMPL,


	/**
	 * Event handler for visibility changes of horizontal scrollbar.
	 * 
	 */
	_onChangeScrollbarYVisibility : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the scroll animation end event for both scroll bars.
	 * 
	 */
	_onScrollAnimationEnd : vjo.NEEDS_IMPL,


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
	 * Event handler for the horizontal scroll event of the pane
	 * 
	 */
	_onScrollPaneX : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the vertical scroll event of the pane
	 * 
	 */
	_onScrollPaneY : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the touch move.
	 * 
	 */
	_onTouchMove : vjo.NEEDS_IMPL,


	/**
	 * Touch move handler for one direction.
	 * 
	 */
	_onTouchMoveDirectional : vjo.NEEDS_IMPL,


	/**
	 * Returns the top offset of the end of the given item in relation to the
	 * inner height of this widget.
	 * 
	 */
	getItemBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the left offset of the given item in relation to the
	 * inner width of this widget.
	 * 
	 */
	getItemLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the left offset of the end of the given item in relation to the
	 * inner width of this widget.
	 * 
	 */
	getItemRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the top offset of the given item in relation to the
	 * inner height of this widget.
	 * 
	 */
	getItemTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the boundaries of the pane.
	 * 
	 */
	getPaneSize : vjo.NEEDS_IMPL,


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
	 * Returns the scroll left position of the content
	 * 
	 */
	getScrollX : vjo.NEEDS_IMPL,


	/**
	 * Returns the scroll top position of the content
	 * 
	 */
	getScrollY : vjo.NEEDS_IMPL,


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
	 * Scrolls the element&#8217;s content by the given left offset
	 * 
	 */
	scrollByX : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element&#8217;s content by the given top offset
	 * 
	 */
	scrollByY : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element&#8217;s content to the given left coordinate
	 * 
	 */
	scrollToX : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element&#8217;s content to the given top coordinate
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