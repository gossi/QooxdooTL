/**
 * A split panes divides an area into two panes. The ratio between the two
 * panes is configurable by the user using the splitter.
 */
//>public
vjo.ctype('qx.ui.splitpane.Pane')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * Creates a new instance of a SplitPane. It allows the user to dynamically
	 * resize the areas dropping the border between.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Computes widgets&#8217; sizes based on the mouse coordinate.
	 * 
	 */
	__computeSizes : vjo.NEEDS_IMPL,


	/**
	 * Creates a blocker for the splitter which takes all bouse events and
	 * also handles the offset and cursor.
	 * 
	 */
	__createBlocker : vjo.NEEDS_IMPL,


	/**
	 * Move handler for the spliiter which takes care of the external
	 * triggered resize of children.
	 * 
	 */
	__onSplitterMove : vjo.NEEDS_IMPL,


	/**
	 * Helper for setting the blocker to the right position, which depends on
	 * the offset, orientation and the current position of the splitter.
	 * 
	 */
	__setBlockerPosition : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property offset.
	 * 
	 * For further details take a look at the property definition: {@link #offset}.
	 * 
	 */
	_applyOffset : vjo.NEEDS_IMPL,


	/**
	 * Apply routine for the orientation property.
	 * 
	 * Sets the pane&#8217;s layout to vertical or horizontal split layout.
	 * 
	 */
	_applyOrientation : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Updates widgets&#8217; sizes based on the slider position.
	 * 
	 */
	_finalizeSizes : vjo.NEEDS_IMPL,


	/**
	 * Determines whether this is an active drag session
	 * 
	 */
	_isActiveDragSession : vjo.NEEDS_IMPL,


	/**
	 * Handler for mousedown event.
	 * 
	 * Shows slider widget and starts drag session if mouse is near/on splitter widget.
	 * 
	 */
	_onMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Handler for mousemove event.
	 * 
	 */
	_onMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Handler for mouseout event
	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Handler for mouseup event
	 * 
	 * Sets widget sizes if dragging session has been active.
	 * 
	 */
	_onMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Sets the last mouse position.
	 * 
	 */
	_setLastMousePosition : vjo.NEEDS_IMPL,


	/**
	 * Adds a widget to the pane.
	 * 
	 * Sets the pane&#8217;s layout to vertical or horizontal split layout. Depending on the
	 * pane&#8217;s layout the first widget will be the left or top widget, the second one
	 * the bottom or right widget. Adding more than two widgets will overwrite the
	 * existing ones.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns the blocker used over the splitter. this could be used for
	 * adding event listeners like click or dblclick.
	 * 
	 */
	getBlocker : vjo.NEEDS_IMPL,


	/**
	 * Returns an array containing the pane&#8217;s content.
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property offset.
	 * 
	 * For further details take a look at the property definition: {@link #offset}.
	 * 
	 */
	getOffset : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	getOrientation : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property offset
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #offset}.
	 * 
	 */
	initOffset : vjo.NEEDS_IMPL,


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
	 * Removes the given widget from the pane.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property offset.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #offset}.
	 * 
	 */
	resetOffset : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property offset.
	 * 
	 * For further details take a look at the property definition: {@link #offset}.
	 * 
	 */
	setOffset : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	setOrientation : vjo.NEEDS_IMPL
})
.endType();