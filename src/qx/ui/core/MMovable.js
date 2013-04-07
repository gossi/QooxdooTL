/**
 * Provides move behavior to any widget.
 * 
 * The widget using the mixin must register a widget as move handle so that
 * the mouse events needed for moving it are attached to this widget).
 * 
 * this._activateMoveHandle(widget);
 */
//>public
vjo.mtype('qx.ui.core.MMovable')
.protos({
	/**
	 * Computes the new drag coordinates
	 * 
	 */
	__computeMoveCoordinates : vjo.NEEDS_IMPL,


	/**
	 * Get the widget, which draws the resize/move frame.
	 * 
	 */
	__getMoveFrame : vjo.NEEDS_IMPL,


	/**
	 * Event listener for losecapture event.
	 * 
	 */
	__onMoveLoseCapture : vjo.NEEDS_IMPL,


	/**
	 * Creates, shows and syncs the frame with the widget.
	 * 
	 */
	__showMoveFrame : vjo.NEEDS_IMPL,


	/**
	 * Configures the given widget as a move handle
	 * 
	 */
	_activateMoveHandle : vjo.NEEDS_IMPL,


	/**
	 * Enables the capturing of the caption bar and prepares the drag session and the
	 * appearance (translucent, frame or opaque) for the moving of the window.
	 * 
	 */
	_onMoveMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Does the moving of the window by rendering the position
	 * of the window (or frame) at runtime using direct dom methods.
	 * 
	 */
	_onMoveMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Disables the capturing of the caption bar and moves the window
	 * to the last position of the drag session. Also restores the appearance
	 * of the window.
	 * 
	 */
	_onMoveMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property movable.
	 * 
	 * For further details take a look at the property definition: {@link #movable}.
	 * 
	 */
	getMovable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property useMoveFrame.
	 * 
	 * For further details take a look at the property definition: {@link #useMoveFrame}.
	 * 
	 */
	getUseMoveFrame : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property movable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #movable}.
	 * 
	 */
	initMovable : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property useMoveFrame
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #useMoveFrame}.
	 * 
	 */
	initUseMoveFrame : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property movable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #movable}.
	 * 
	 */
	isMovable : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property useMoveFrame equals true.
	 * 
	 * For further details take a look at the property definition: {@link #useMoveFrame}.
	 * 
	 */
	isUseMoveFrame : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property movable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #movable}.
	 * 
	 */
	resetMovable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property useMoveFrame.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #useMoveFrame}.
	 * 
	 */
	resetUseMoveFrame : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property movable.
	 * 
	 * For further details take a look at the property definition: {@link #movable}.
	 * 
	 */
	setMovable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property useMoveFrame.
	 * 
	 * For further details take a look at the property definition: {@link #useMoveFrame}.
	 * 
	 */
	setUseMoveFrame : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property movable.
	 * 
	 * For further details take a look at the property definition: {@link #movable}.
	 * 
	 */
	toggleMovable : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property useMoveFrame.
	 * 
	 * For further details take a look at the property definition: {@link #useMoveFrame}.
	 * 
	 */
	toggleUseMoveFrame : vjo.NEEDS_IMPL
})
.endType();