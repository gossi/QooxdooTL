/**
 * The Slider widget provides a vertical or horizontal slider.
 * 
 * The Slider is the classic widget for controlling a bounded value.
 * It lets the user move a slider handle along a horizontal or vertical
 * groove and translates the handle&#8217;s position into an integer value
 * within the defined range.
 * 
 * The Slider has very few of its own functions.
 * The most useful functions are slideTo() to set the slider directly to some
 * value; setSingleStep(), setPageStep() to set the steps; and setMinimum()
 * and setMaximum() to define the range of the slider.
 * 
 * A slider accepts focus on Tab and provides both a mouse wheel and
 * a keyboard interface. The keyboard interface is the following:
 * 
 * 
 * Left/Right move a horizontal slider by one single step.
 * Up/Down move a vertical slider by one single step.
 * PageUp moves up one page.
 * PageDown moves down one page.
 * Home moves to the start (minimum).
 * End moves to the end (maximum).
 * 
 * 
 * Here are the main properties of the class:
 * 
 * 
 * value: The bounded integer that {@link qx.ui.form.INumberForm}
 * maintains.
 * minimum: The lowest possible value.
 * maximum: The highest possible value.
 * singleStep: The smaller of two natural steps that an abstract
 * sliders provides and typically corresponds to the user pressing an arrow key.
 * pageStep: The larger of two natural steps that an abstract
 * slider provides and typically corresponds to the user pressing PageUp or
 * PageDown.

 */
//>public
vjo.ctype('qx.ui.form.Slider')
.inherits('qx.ui.core.Widget')
.satisfies(['qx.ui.form.IForm','qx.ui.form.INumberForm','qx.ui.form.IRange'])
.mixin('qx.ui.form.MForm')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Animation helper which takes care of the animated slide.
	 * 
	 */
	__animateTo : vjo.NEEDS_IMPL,


	/**
	 * Computes the value where the tracking should end depending on
	 * the current mouse position.
	 * 
	 */
	__computeTrackingEnd : vjo.NEEDS_IMPL,


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
	 * Applies changes of the property value of the property minimum.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	_applyMinimum : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	_applyOrientation : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	_applyValue : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Helper for applyValue which fires the changeValue event.
	 * 
	 */
	_fireValue : vjo.NEEDS_IMPL,


	/**
	 * Listener of interval event by the internal timer. Only used
	 * in tracking sequences.
	 * 
	 */
	_onInterval : vjo.NEEDS_IMPL,


	/**
	 * Event handler for keypress events.
	 * 
	 * Adds support for arrow keys, page up, page down, home and end keys.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousedown event. Initializes drag or tracking mode.
	 * 
	 */
	_onMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousemove event for the knob. Only used in drag mode.
	 * 
	 */
	_onMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Event handler for mouseout events at the knob child control.
	 * 
	 * Removes the &#8216;hovered&#8217; state
	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Event handler for mouseover events at the knob child control.
	 * 
	 * Adds the &#8216;hovered&#8217; state
	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 * Listener of mouseup event. Used for cleanup of previously
	 * initialized modes.
	 * 
	 */
	_onMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousewheel event
	 * 
	 */
	_onMouseWheel : vjo.NEEDS_IMPL,


	/**
	 * Listener of resize event for both the slider itself and the knob.
	 * 
	 */
	_onUpdate : vjo.NEEDS_IMPL,


	/**
	 * Converts the given position to a value.
	 * 
	 * Does not respect single or page step.
	 * 
	 */
	_positionToValue : vjo.NEEDS_IMPL,


	/**
	 * Moves the knob to the given position.
	 * 
	 */
	_setKnobPosition : vjo.NEEDS_IMPL,


	/**
	 * Updates the knob position following the currently configured
	 * value. Useful on reflows where the dimensions of the slider
	 * itself have been modified.
	 * 
	 */
	_updateKnobPosition : vjo.NEEDS_IMPL,


	/**
	 * Reconfigures the size of the knob depending on
	 * the optionally defined {@link #knobFactor}.
	 * 
	 */
	_updateKnobSize : vjo.NEEDS_IMPL,


	/**
	 * Converts the given value to a position to place
	 * the knob to.
	 * 
	 */
	_valueToPosition : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property minimum.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	getMinimum : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property singleStep.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	getSingleStep : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property minimum
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	initMinimum : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property singleStep
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	initSingleStep : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property value
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	initValue : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property minimum.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	resetMinimum : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property value.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property minimum.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	setMinimum : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property singleStep.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	setSingleStep : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Slides backward (to left or top depending on orientation)
	 * 
	 */
	slideBack : vjo.NEEDS_IMPL,


	/**
	 * Slides by the given offset.
	 * 
	 * This method works with the value, not with the coordinate.
	 * 
	 */
	slideBy : vjo.NEEDS_IMPL,


	/**
	 * Slides forward (right or bottom depending on orientation)
	 * 
	 */
	slideForward : vjo.NEEDS_IMPL,


	/**
	 * Slides a page backward (to left or top depending on orientation)
	 * 
	 */
	slidePageBack : vjo.NEEDS_IMPL,


	/**
	 * Slides a page forward (to right or bottom depending on orientation)
	 * 
	 */
	slidePageForward : vjo.NEEDS_IMPL,


	/**
	 * Slides to the given value
	 * 
	 * This method works with the value, not with the coordinate.
	 * 
	 */
	slideTo : vjo.NEEDS_IMPL,


	/**
	 * Slides backward to the minimum value
	 * 
	 */
	slideToBegin : vjo.NEEDS_IMPL,


	/**
	 * Slides forward to the maximum value
	 * 
	 */
	slideToEnd : vjo.NEEDS_IMPL
})
.endType();