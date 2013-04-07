/**
 * The Slider widget provides horizontal slider.
 * 
 * The Slider is the classic widget for controlling a bounded value.
 * It lets the user move a slider handle along a horizontal
 * groove and translates the handle&#8217;s position into an integer value
 * within the defined range.
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *    var slider= new qx.ui.mobile.form.Slider().set({
 *       minimum : 0,
 *       maximum : 10,
 *       step : 2
 *     });
 *     slider.addListener("changeValue", handler, this);
 * 
 *   this.getRoot.add(slider);
 * 
 * 
 * This example creates a slider and attaches an
 * event listener to the {@link #changeValue} event.
 */
//>public
vjo.ctype('qx.ui.mobile.form.Slider')
.inherits('qx.ui.mobile.core.Widget')
.satisfies(['qx.ui.form.IForm','qx.ui.form.IModel','qx.ui.form.INumberForm'])
.mixin(['qx.ui.mobile.form.MValue','qx.ui.form.MForm','qx.ui.form.MModelProperty','qx.ui.mobile.form.MState'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_createContainerElement : vjo.NEEDS_IMPL,


	/**
	 * Creates the knob element.
	 * 
	 */
	_createKnobElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the knob DOM element.
	 * 
	 */
	_getKnobElement : vjo.NEEDS_IMPL,


	/**
	 * Return the overall number of steps.
	 * 
	 */
	_getOverallSteps : vjo.NEEDS_IMPL,


	/**
	 * Return the number of pixels per step.
	 * 
	 */
	_getPixelPerStep : vjo.NEEDS_IMPL,


	/**
	 * Returns the current position of the knob.
	 * 
	 */
	_getPosition : vjo.NEEDS_IMPL,


	/**
	 * Return the range between {@link #maximum} and {@link #minimum}.
	 * 
	 */
	_getRange : vjo.NEEDS_IMPL,


	/**
	 * Gets the value [true/false] of this slider.
	 * It is called by getValue method of qx.ui.mobile.form.MValue mixin
	 * 
	 */
	_getValue : vjo.NEEDS_IMPL,


	/**
	 * Limits a value to the set {@link #minimum} and {@link #maximum} properties.
	 * 
	 */
	_limitValue : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the touch move event occurs.
	 * 
	 */
	_onTouchMove : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the touch start event occurs.
	 * 
	 */
	_onTouchStart : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the transition end event occurs.
	 * 
	 */
	_onTransitionEnd : vjo.NEEDS_IMPL,


	/**
	 * Converts the given percent to the position of the knob.
	 * 
	 */
	_percentToPosition : vjo.NEEDS_IMPL,


	/**
	 * Converts the given position to the corresponding value.
	 * 
	 */
	_positionToValue : vjo.NEEDS_IMPL,


	/**
	 * Refreshs the slider.
	 * 
	 */
	_refresh : vjo.NEEDS_IMPL,


	/**
	 * Registers all needed event listener.
	 * 
	 */
	_registerEventListener : vjo.NEEDS_IMPL,


	/**
	 * Sets the knob positon based on the give percent value.
	 * 
	 */
	_setKnobPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the indicator positon based on the give percent value.
	 * 
	 */
	_setProgressIndicatorPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the value of this slider.
	 * It is called by setValue method of qx.ui.mobile.form.MValue mixin
	 * 
	 */
	_setValue : vjo.NEEDS_IMPL,


	/**
	 * Unregisters all needed event listener.
	 * 
	 */
	_unregisterEventListener : vjo.NEEDS_IMPL,


	/**
	 * Updates the knob position based on the current value.
	 * 
	 */
	_updateKnobPosition : vjo.NEEDS_IMPL,


	/**
	 * Updates all internal sizes of the slider.
	 * 
	 */
	_updateSizes : vjo.NEEDS_IMPL,


	/**
	 * Converts the given value to percent.
	 * 
	 */
	_valueToPercent : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property reverseDirection.
	 * 
	 * For further details take a look at the property definition: {@link #reverseDirection}.
	 * 
	 */
	getReverseDirection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property step.
	 * 
	 * For further details take a look at the property definition: {@link #step}.
	 * 
	 */
	getStep : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property reverseDirection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #reverseDirection}.
	 * 
	 */
	initReverseDirection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property step
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #step}.
	 * 
	 */
	initStep : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property reverseDirection equals true.
	 * 
	 * For further details take a look at the property definition: {@link #reverseDirection}.
	 * 
	 */
	isReverseDirection : vjo.NEEDS_IMPL,


	/**
	 * Increments the current value.
	 * 
	 */
	nextValue : vjo.NEEDS_IMPL,


	/**
	 * Decrements the current value.
	 * 
	 */
	previousValue : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property reverseDirection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #reverseDirection}.
	 * 
	 */
	resetReverseDirection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property step.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #step}.
	 * 
	 */
	resetStep : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property reverseDirection.
	 * 
	 * For further details take a look at the property definition: {@link #reverseDirection}.
	 * 
	 */
	setReverseDirection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property step.
	 * 
	 * For further details take a look at the property definition: {@link #step}.
	 * 
	 */
	setStep : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property reverseDirection.
	 * 
	 * For further details take a look at the property definition: {@link #reverseDirection}.
	 * 
	 */
	toggleReverseDirection : vjo.NEEDS_IMPL
})
.endType();