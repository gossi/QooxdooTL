/**
 * This class represents a scroll able pane. This means that this widget
 * may contain content which is bigger than the available (inner)
 * dimensions of this widget. The widget also offer methods to control
 * the scrolling position. It can only have exactly one child.
 */
//>public
vjo.ctype('qx.ui.core.scroll.ScrollPane')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property scrollX.
	 * 
	 * For further details take a look at the property definition: {@link #scrollX}.
	 * 
	 */
	_applyScrollX : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property scrollY.
	 * 
	 * For further details take a look at the property definition: {@link #scrollY}.
	 * 
	 */
	_applyScrollY : vjo.NEEDS_IMPL,


	/**
	 * Event listener for appear event of content
	 * 
	 */
	_onAppear : vjo.NEEDS_IMPL,


	/**
	 * Event listener for scroll event of content
	 * 
	 */
	_onScroll : vjo.NEEDS_IMPL,


	/**
	 * Event listener for resize event of content and container
	 * 
	 */
	_onUpdate : vjo.NEEDS_IMPL,


	/**
	 * Configures the content of the scroll pane. Replaces any existing child
	 * with the newly given one.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns an array containing the current content.
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


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
	 * The maximum horizontal scroll position.
	 * 
	 */
	getScrollMaxX : vjo.NEEDS_IMPL,


	/**
	 * The maximum vertical scroll position.
	 * 
	 */
	getScrollMaxY : vjo.NEEDS_IMPL,


	/**
	 * The size (identical with the preferred size) of the content.
	 * 
	 */
	getScrollSize : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scrollX.
	 * 
	 * For further details take a look at the property definition: {@link #scrollX}.
	 * 
	 */
	getScrollX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scrollY.
	 * 
	 * For further details take a look at the property definition: {@link #scrollY}.
	 * 
	 */
	getScrollY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scrollX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scrollX}.
	 * 
	 */
	initScrollX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scrollY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scrollY}.
	 * 
	 */
	initScrollY : vjo.NEEDS_IMPL,


	/**
	 * Removes the given widget from the content. The pane is empty
	 * afterwards as only one child is supported by the pane.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scrollX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scrollX}.
	 * 
	 */
	resetScrollX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scrollY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scrollY}.
	 * 
	 */
	resetScrollY : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element&#8217;s content horizontally by the given amount.
	 * 
	 */
	scrollByX : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element&#8217;s content vertically by the given amount.
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
	 * Sets the user value of the property scrollX.
	 * 
	 * For further details take a look at the property definition: {@link #scrollX}.
	 * 
	 */
	setScrollX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scrollY.
	 * 
	 * For further details take a look at the property definition: {@link #scrollY}.
	 * 
	 */
	setScrollY : vjo.NEEDS_IMPL
})
.endType();