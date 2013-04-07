/**
 * EXPERIMENTAL!
 * 
 * The Pane provides a window of a larger virtual grid.
 * 
 * The actual rendering is performed by one or several layers ({@link ILayer}.
 * The pane computes, which cells of the virtual area is visible and instructs
 * the layers to render these cells.
 */
//>public
vjo.ctype('qx.ui.virtual.core.Pane')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Check whether the pane was resized and fire an {@link #update} event if
	 * it was.
	 * 
	 */
	__checkPaneResize : vjo.NEEDS_IMPL,


	/**
	 * Converts a mouse event into a cell event and fires the cell event if the
	 * mouse is over a cell.
	 * 
	 */
	__handleMouseCellEvent : vjo.NEEDS_IMPL,


	/**
	 * Schedule an update the visible window of the grid according to the top
	 * and left scroll positions.
	 * 
	 */
	_deferredUpdateScrollPosition : vjo.NEEDS_IMPL,


	/**
	 * Perform a full update on all visible layers. All cached data will be
	 * discarded.
	 * 
	 */
	_fullUpdate : vjo.NEEDS_IMPL,


	/**
	 * Resize event handler. Do a full update on first appear.
	 * 
	 */
	_onAppear : vjo.NEEDS_IMPL,


	/**
	 * Event listener for mouse clicks. Fires an cellClick event.
	 * 
	 */
	_onClick : vjo.NEEDS_IMPL,


	/**
	 * Event listener for context menu clicks. Fires an cellContextmenu event.
	 * 
	 */
	_onContextmenu : vjo.NEEDS_IMPL,


	/**
	 * Event listener for double clicks. Fires an cellDblclick event.
	 * 
	 */
	_onDblclick : vjo.NEEDS_IMPL,


	/**
	 * Event listener for mouse down. Remembers cell position to prevent mouse event when cell position change.
	 * 
	 */
	_onMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Resize event handler.
	 * 
	 * Updates the visible window.
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Sets the size of the layers to contain the cells at the pixel position
	 * &#8220;left/right&#8221; up to &#8220;left+minHeight/right+minHeight&#8221;. The offset of the
	 * layer container is adjusted to respect the pane&#8217;s scroll top and scroll
	 * left values.
	 * 
	 */
	_setLayerWindow : vjo.NEEDS_IMPL,


	/**
	 * Update the visible window of the grid according to the top and left scroll
	 * positions.
	 * 
	 */
	_updateScrollPosition : vjo.NEEDS_IMPL,


	/**
	 * Add a layer to the layer container.
	 * 
	 */
	addLayer : vjo.NEEDS_IMPL,


	/**
	 * Schedule a full update on all visible layers.
	 * 
	 */
	fullUpdate : vjo.NEEDS_IMPL,


	/**
	 * Get the grid cell at the given absolute document coordinates. This method
	 * can be used to convert the mouse position returned by
	 * {@link qx.event.type.Mouse#getDocumentLeft} and
	 * {@link qx.event.type.Mouse#getDocumentLeft} into cell coordinates.
	 * 
	 */
	getCellAtPosition : vjo.NEEDS_IMPL,


	/**
	 * Returns an array containing the layer container.
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


	/**
	 * Get the axis object, which defines the column numbers and the column sizes.
	 * 
	 */
	getColumnConfig : vjo.NEEDS_IMPL,


	/**
	 * Get a list of all layers.
	 * 
	 */
	getLayers : vjo.NEEDS_IMPL,


	/**
	 * Get the axis object, which defines the row numbers and the row sizes.
	 * 
	 */
	getRowConfig : vjo.NEEDS_IMPL,


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
	 * The (virtual) size of the content.
	 * 
	 */
	getScrollSize : vjo.NEEDS_IMPL,


	/**
	 * Returns the horizontal scroll offset.
	 * 
	 */
	getScrollX : vjo.NEEDS_IMPL,


	/**
	 * Returns the vertical scroll offset.
	 * 
	 */
	getScrollY : vjo.NEEDS_IMPL,


	/**
	 * Get a list of all visible layers.
	 * 
	 */
	getVisibleLayers : vjo.NEEDS_IMPL,


	/**
	 * Whether a full update is scheduled.
	 * 
	 */
	isUpdatePending : vjo.NEEDS_IMPL,


	/**
	 * Increase the layers width beyond the needed width to improve
	 * horizontal scrolling. The layers are only resized if invisible parts
	 * left/right of the pane window are smaller than minLeft/minRight.
	 * 
	 */
	prefetchX : vjo.NEEDS_IMPL,


	/**
	 * Increase the layers height beyond the needed height to improve
	 * vertical scrolling. The layers are only resized if invisible parts
	 * above/below the pane window are smaller than minAbove/minBelow.
	 * 
	 */
	prefetchY : vjo.NEEDS_IMPL,


	/**
	 * Scrolls a grid cell into the visible area of the pane.
	 * 
	 */
	scrollCellIntoView : vjo.NEEDS_IMPL,


	/**
	 * Scrolls a column into the visible area of the pane.
	 * 
	 */
	scrollColumnIntoView : vjo.NEEDS_IMPL,


	/**
	 * Scrolls a row into the visible area of the pane.
	 * 
	 */
	scrollRowIntoView : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the content to the given top coordinate.
	 * 
	 */
	setScrollX : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the content to the given left coordinate.
	 * 
	 */
	setScrollY : vjo.NEEDS_IMPL,


	/**
	 */
	syncWidget : vjo.NEEDS_IMPL
})
.endType();