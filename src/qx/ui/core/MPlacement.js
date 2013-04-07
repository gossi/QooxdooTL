/**
 * Methods to place popup like widgets to other widgets, points,
 * mouse event coordinates, etc.
 */
//>public
vjo.mtype('qx.ui.core.MPlacement')
.protos({
	/**
	 * Removes all resources allocated by the last run of placeToWidget with liveupdate=true
	 * 
	 */
	__cleanupFromLastPlaceToWidgetLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Get the size of the object to place. The callback will be called with
	 * the size as first argument. This methods works asynchronously.
	 * 
	 * The size of the object to place is the size of the widget. If a widget
	 * including this mixin needs a different size it can implement the method
	 * _computePlacementSize, which returns the size.
	 * 
	 */
	__getPlacementSize : vjo.NEEDS_IMPL,


	/**
	 * Internal method to read specific this properties and
	 * apply the results to the this afterwards.
	 * 
	 */
	__place : vjo.NEEDS_IMPL,


	/**
	 * Returns the placement offsets as a map
	 * 
	 */
	_getPlacementOffsets : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property domMove.
	 * 
	 * For further details take a look at the property definition: {@link #domMove}.
	 * 
	 */
	getDomMove : vjo.NEEDS_IMPL,


	/**
	 * Returns the location data like {qx.bom.element.Location#get} does,
	 * but does not rely on DOM elements coordinates to be rendered. Instead,
	 * this method works with the available layout data available in the moment
	 * when it is executed.
	 * This works best when called in some type of resize or
	 * move event which are supported by all widgets out of the
	 * box.
	 * 
	 */
	getLayoutLocation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property offsetBottom.
	 * 
	 * For further details take a look at the property definition: {@link #offsetBottom}.
	 * 
	 */
	getOffsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property offsetLeft.
	 * 
	 * For further details take a look at the property definition: {@link #offsetLeft}.
	 * 
	 */
	getOffsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property offsetRight.
	 * 
	 * For further details take a look at the property definition: {@link #offsetRight}.
	 * 
	 */
	getOffsetRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property offsetTop.
	 * 
	 * For further details take a look at the property definition: {@link #offsetTop}.
	 * 
	 */
	getOffsetTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property placementModeX.
	 * 
	 * For further details take a look at the property definition: {@link #placementModeX}.
	 * 
	 */
	getPlacementModeX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property placementModeY.
	 * 
	 * For further details take a look at the property definition: {@link #placementModeY}.
	 * 
	 */
	getPlacementModeY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property placeMethod.
	 * 
	 * For further details take a look at the property definition: {@link #placeMethod}.
	 * 
	 */
	getPlaceMethod : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property position.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	getPosition : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property domMove
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #domMove}.
	 * 
	 */
	initDomMove : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property offsetBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #offsetBottom}.
	 * 
	 */
	initOffsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property offsetLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #offsetLeft}.
	 * 
	 */
	initOffsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property offsetRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #offsetRight}.
	 * 
	 */
	initOffsetRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property offsetTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #offsetTop}.
	 * 
	 */
	initOffsetTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property placementModeX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #placementModeX}.
	 * 
	 */
	initPlacementModeX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property placementModeY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #placementModeY}.
	 * 
	 */
	initPlacementModeY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property placeMethod
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #placeMethod}.
	 * 
	 */
	initPlaceMethod : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property position
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	initPosition : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property domMove equals true.
	 * 
	 * For further details take a look at the property definition: {@link #domMove}.
	 * 
	 */
	isDomMove : vjo.NEEDS_IMPL,


	/**
	 * Sets the position. Uses low-level, high-performance DOM
	 * methods when the property {@link #domMove} is enabled.
	 * Checks if an always visible element is set and moves the widget to not
	 * overlay the always visible widget if possible. The algorithm tries to
	 * move the widget as far left as necessary but not of the screen.
	 * ({@link #setVisibleElement})
	 * 
	 */
	moveTo : vjo.NEEDS_IMPL,


	/**
	 * Places the widget to any (rendered) DOM element.
	 * 
	 */
	placeToElement : vjo.NEEDS_IMPL,


	/**
	 * Places the widget to the mouse cursor position.
	 * 
	 */
	placeToMouse : vjo.NEEDS_IMPL,


	/**
	 * Places the widget in relation to the given point
	 * 
	 */
	placeToPoint : vjo.NEEDS_IMPL,


	/**
	 * Places the widget to another (at least laid out) widget. The DOM
	 * element is not needed, but the bounds are needed to compute the
	 * location of the widget to align to.
	 * 
	 */
	placeToWidget : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property domMove.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #domMove}.
	 * 
	 */
	resetDomMove : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property offsetBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #offsetBottom}.
	 * 
	 */
	resetOffsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property offsetLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #offsetLeft}.
	 * 
	 */
	resetOffsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property offsetRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #offsetRight}.
	 * 
	 */
	resetOffsetRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property offsetTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #offsetTop}.
	 * 
	 */
	resetOffsetTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property placementModeX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #placementModeX}.
	 * 
	 */
	resetPlacementModeX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property placementModeY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #placementModeY}.
	 * 
	 */
	resetPlacementModeY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property placeMethod.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #placeMethod}.
	 * 
	 */
	resetPlaceMethod : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property position.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	resetPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property domMove.
	 * 
	 * For further details take a look at the property definition: {@link #domMove}.
	 * 
	 */
	setDomMove : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group offset.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #offset}.
	 * 
	 */
	setOffset : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property offsetBottom.
	 * 
	 * For further details take a look at the property definition: {@link #offsetBottom}.
	 * 
	 */
	setOffsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property offsetLeft.
	 * 
	 * For further details take a look at the property definition: {@link #offsetLeft}.
	 * 
	 */
	setOffsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property offsetRight.
	 * 
	 * For further details take a look at the property definition: {@link #offsetRight}.
	 * 
	 */
	setOffsetRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property offsetTop.
	 * 
	 * For further details take a look at the property definition: {@link #offsetTop}.
	 * 
	 */
	setOffsetTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property placementModeX.
	 * 
	 * For further details take a look at the property definition: {@link #placementModeX}.
	 * 
	 */
	setPlacementModeX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property placementModeY.
	 * 
	 * For further details take a look at the property definition: {@link #placementModeY}.
	 * 
	 */
	setPlacementModeY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property placeMethod.
	 * 
	 * For further details take a look at the property definition: {@link #placeMethod}.
	 * 
	 */
	setPlaceMethod : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property position.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	setPosition : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property domMove.
	 * 
	 * For further details take a look at the property definition: {@link #domMove}.
	 * 
	 */
	toggleDomMove : vjo.NEEDS_IMPL
})
.endType();