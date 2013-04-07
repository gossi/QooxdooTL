/**
 * The scroll bar widget, is a special slider, which is used in qooxdoo instead
 * of the native browser scroll bars.
 * 
 * Scroll bars are used by the {@link qx.ui.container.Scroll} container. Usually
 * a scroll bar is not used directly.
 */
//>public
vjo.ctype('qx.ui.core.scroll.ScrollBar')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.core.scroll.IScrollBar')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property knobFactor.
	 * 
	 * For further details take a look at the property definition: {@link #knobFactor}.
	 * 
	 */
	_applyKnobFactor : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property maximum.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	_applyMaximum : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	_applyOrientation : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property pageStep.
	 * 
	 * For further details take a look at the property definition: {@link #pageStep}.
	 * 
	 */
	_applyPageStep : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property position.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	_applyPosition : vjo.NEEDS_IMPL,


	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Change listener for slider value changes.
	 * 
	 */
	_onChangeSliderValue : vjo.NEEDS_IMPL,


	/**
	 * Executed when the up/left button is executed (pressed)
	 * 
	 */
	_onExecuteBegin : vjo.NEEDS_IMPL,


	/**
	 * Executed when the down/right button is executed (pressed)
	 * 
	 */
	_onExecuteEnd : vjo.NEEDS_IMPL,


	/**
	 * Hide the knob of the slider if the slidebar is too small or show it
	 * otherwise.
	 * 
	 */
	_onResizeSlider : vjo.NEEDS_IMPL,


	/**
	 * Change listener for slider animation end.
	 * 
	 */
	_onSlideAnimationEnd : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property knobFactor.
	 * 
	 * For further details take a look at the property definition: {@link #knobFactor}.
	 * 
	 */
	getKnobFactor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maximum.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	getMaximum : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	getOrientation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property pageStep.
	 * 
	 * For further details take a look at the property definition: {@link #pageStep}.
	 * 
	 */
	getPageStep : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property position.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	getPosition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property singleStep.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	getSingleStep : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property knobFactor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #knobFactor}.
	 * 
	 */
	initKnobFactor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maximum
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	initMaximum : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property pageStep
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #pageStep}.
	 * 
	 */
	initPageStep : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property singleStep
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	initSingleStep : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property knobFactor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #knobFactor}.
	 * 
	 */
	resetKnobFactor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maximum.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	resetMaximum : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property pageStep.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #pageStep}.
	 * 
	 */
	resetPageStep : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property singleStep.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	resetSingleStep : vjo.NEEDS_IMPL,


	/**
	 * Scrolls by the given offset.
	 * 
	 * This method automatically corrects the given position to respect
	 * the {@link #maximum}.
	 * 
	 */
	scrollBy : vjo.NEEDS_IMPL,


	/**
	 * Scrolls by the given number of steps.
	 * 
	 * This method automatically corrects the given position to respect
	 * the {@link #maximum}.
	 * 
	 */
	scrollBySteps : vjo.NEEDS_IMPL,


	/**
	 * Scrolls to the given position.
	 * 
	 * This method automatically corrects the given position to respect
	 * the {@link #maximum}.
	 * 
	 */
	scrollTo : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property knobFactor.
	 * 
	 * For further details take a look at the property definition: {@link #knobFactor}.
	 * 
	 */
	setKnobFactor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maximum.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	setMaximum : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	setOrientation : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property pageStep.
	 * 
	 * For further details take a look at the property definition: {@link #pageStep}.
	 * 
	 */
	setPageStep : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property position.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	setPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property singleStep.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	setSingleStep : vjo.NEEDS_IMPL
})
.endType();