/**
 * Provides resizing behavior to any widget.
 */
//>public
vjo.mtype('qx.ui.core.MResizable')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for computing the proper resize action based on the
	 * given parameters.
	 * 
	 */
	__computeResizeActive : vjo.NEEDS_IMPL,


	/**
	 * Updates the internally stored resize mode
	 * 
	 */
	__computeResizeMode : vjo.NEEDS_IMPL,


	/**
	 * Computes the new boundaries at each interval
	 * of the resize sequence.
	 * 
	 */
	__computeResizeResult : vjo.NEEDS_IMPL,


	/**
	 * Returns the location to use. Either the location of the decorator
	 * element, or the location of the content element.
	 * 
	 */
	__getLocation : vjo.NEEDS_IMPL,


	/**
	 * Event listener for losecapture event.
	 * 
	 */
	__onResizeLoseCapture : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the mouse down event
	 * 
	 */
	__onResizeMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the mouse move event
	 * 
	 */
	__onResizeMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the mouse out event
	 * 
	 */
	__onResizeMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the mouse up event
	 * 
	 */
	__onResizeMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Creates, shows and syncs the frame with the widget.
	 * 
	 */
	__showResizeFrame : vjo.NEEDS_IMPL,


	/**
	 * Get the widget, which draws the resize/move frame. The resize frame is
	 * shared by all widgets and is added to the root widget.
	 * 
	 */
	_getResizeFrame : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property resizableBottom.
	 * 
	 * For further details take a look at the property definition: {@link #resizableBottom}.
	 * 
	 */
	getResizableBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property resizableLeft.
	 * 
	 * For further details take a look at the property definition: {@link #resizableLeft}.
	 * 
	 */
	getResizableLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property resizableRight.
	 * 
	 * For further details take a look at the property definition: {@link #resizableRight}.
	 * 
	 */
	getResizableRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property resizableTop.
	 * 
	 * For further details take a look at the property definition: {@link #resizableTop}.
	 * 
	 */
	getResizableTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property resizeSensitivity.
	 * 
	 * For further details take a look at the property definition: {@link #resizeSensitivity}.
	 * 
	 */
	getResizeSensitivity : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property useResizeFrame.
	 * 
	 * For further details take a look at the property definition: {@link #useResizeFrame}.
	 * 
	 */
	getUseResizeFrame : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property resizableBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #resizableBottom}.
	 * 
	 */
	initResizableBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property resizableLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #resizableLeft}.
	 * 
	 */
	initResizableLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property resizableRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #resizableRight}.
	 * 
	 */
	initResizableRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property resizableTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #resizableTop}.
	 * 
	 */
	initResizableTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property resizeSensitivity
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #resizeSensitivity}.
	 * 
	 */
	initResizeSensitivity : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property useResizeFrame
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #useResizeFrame}.
	 * 
	 */
	initUseResizeFrame : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property resizableBottom equals true.
	 * 
	 * For further details take a look at the property definition: {@link #resizableBottom}.
	 * 
	 */
	isResizableBottom : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property resizableLeft equals true.
	 * 
	 * For further details take a look at the property definition: {@link #resizableLeft}.
	 * 
	 */
	isResizableLeft : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property resizableRight equals true.
	 * 
	 * For further details take a look at the property definition: {@link #resizableRight}.
	 * 
	 */
	isResizableRight : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property resizableTop equals true.
	 * 
	 * For further details take a look at the property definition: {@link #resizableTop}.
	 * 
	 */
	isResizableTop : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property useResizeFrame equals true.
	 * 
	 * For further details take a look at the property definition: {@link #useResizeFrame}.
	 * 
	 */
	isUseResizeFrame : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property resizable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #resizable}.
	 * 
	 */
	resetResizable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property resizableBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #resizableBottom}.
	 * 
	 */
	resetResizableBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property resizableLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #resizableLeft}.
	 * 
	 */
	resetResizableLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property resizableRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #resizableRight}.
	 * 
	 */
	resetResizableRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property resizableTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #resizableTop}.
	 * 
	 */
	resetResizableTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property resizeSensitivity.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #resizeSensitivity}.
	 * 
	 */
	resetResizeSensitivity : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property useResizeFrame.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #useResizeFrame}.
	 * 
	 */
	resetUseResizeFrame : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group resizable.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #resizable}.
	 * 
	 */
	setResizable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property resizableBottom.
	 * 
	 * For further details take a look at the property definition: {@link #resizableBottom}.
	 * 
	 */
	setResizableBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property resizableLeft.
	 * 
	 * For further details take a look at the property definition: {@link #resizableLeft}.
	 * 
	 */
	setResizableLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property resizableRight.
	 * 
	 * For further details take a look at the property definition: {@link #resizableRight}.
	 * 
	 */
	setResizableRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property resizableTop.
	 * 
	 * For further details take a look at the property definition: {@link #resizableTop}.
	 * 
	 */
	setResizableTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property resizeSensitivity.
	 * 
	 * For further details take a look at the property definition: {@link #resizeSensitivity}.
	 * 
	 */
	setResizeSensitivity : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property useResizeFrame.
	 * 
	 * For further details take a look at the property definition: {@link #useResizeFrame}.
	 * 
	 */
	setUseResizeFrame : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property resizableBottom.
	 * 
	 * For further details take a look at the property definition: {@link #resizableBottom}.
	 * 
	 */
	toggleResizableBottom : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property resizableLeft.
	 * 
	 * For further details take a look at the property definition: {@link #resizableLeft}.
	 * 
	 */
	toggleResizableLeft : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property resizableRight.
	 * 
	 * For further details take a look at the property definition: {@link #resizableRight}.
	 * 
	 */
	toggleResizableRight : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property resizableTop.
	 * 
	 * For further details take a look at the property definition: {@link #resizableTop}.
	 * 
	 */
	toggleResizableTop : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property useResizeFrame.
	 * 
	 * For further details take a look at the property definition: {@link #useResizeFrame}.
	 * 
	 */
	toggleUseResizeFrame : vjo.NEEDS_IMPL
})
.endType();