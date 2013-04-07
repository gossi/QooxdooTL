/**
 * A spinner is a control that allows you to adjust a numerical value,
 * typically within an allowed range. An obvious example would be to specify the
 * month of a year as a number in the range 1 &#8211; 12.
 * 
 * To do so, a spinner encompasses a field to display the current value (a
 * textfield) and controls such as up and down buttons to change that value. The
 * current value can also be changed by editing the display field directly, or
 * using mouse wheel and cursor keys.
 * 
 * An optional {@link #numberFormat} property allows you to control the format of
 * how a value can be entered and will be displayed.
 * 
 * A brief, but non-trivial example:
 * 
 * 
 * var s = new qx.ui.form.Spinner();
 * s.set({
 *   maximum: 3000,
 *   minimum: -3000
 * });
 * var nf = new qx.util.format.NumberFormat();
 * nf.setMaximumFractionDigits(2);
 * s.setNumberFormat(nf);
 * 
 * 
 * A spinner instance without any further properties specified in the
 * constructor or a subsequent set command will appear with default
 * values and behaviour.
 */
//>public
vjo.ctype('qx.ui.form.Spinner')
.inherits('qx.ui.core.Widget')
.satisfies(['qx.ui.form.INumberForm','qx.ui.form.IRange','qx.ui.form.IForm'])
.mixin(['qx.ui.core.MContentPadding','qx.ui.form.MForm'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Apply routine for the editable property.
	 * 
	 * It sets the textfield of the spinner to not read only.
	 * 
	 */
	_applyEditable : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Apply routine for the maximum property.
	 * 
	 * It sets the value of the spinner to the minimum of the current spinner
	 * value and the given max property value.
	 * 
	 */
	_applyMaximum : vjo.NEEDS_IMPL,


	/**
	 * Apply routine for the minimum property.
	 * 
	 * It sets the value of the spinner to the maximum of the current spinner
	 * value and the given min property value.
	 * 
	 */
	_applyMinimum : vjo.NEEDS_IMPL,


	/**
	 * Apply routine for the numberFormat property.
	 * 
	 * When setting a number format, the display of the
	 * value in the textfield will be changed immediately.
	 * 
	 */
	_applyNumberFormat : vjo.NEEDS_IMPL,


	/**
	 * Apply routine for the value property.
	 * 
	 * It checks the min and max values, disables / enables the
	 * buttons and handles the wrap around.
	 * 
	 */
	_applyValue : vjo.NEEDS_IMPL,


	/**
	 * Apply routine for the wrap property.
	 * 
	 * Enables all buttons if the wrapping is enabled.
	 * 
	 */
	_applyWrap : vjo.NEEDS_IMPL,


	/**
	 * Check whether the value being applied is allowed.
	 * 
	 * If you override this to change the allowed type, you will also
	 * want to override {@link #_applyValue}, {@link #_applyMinimum},
	 * {@link #_applyMaximum}, {@link #_countUp}, {@link #_countDown}, and
	 * {@link #_onTextChange} methods as those cater specifically to numeric
	 * values.
	 * 
	 */
	_checkValue : vjo.NEEDS_IMPL,


	/**
	 * Checks if the spinner is in page mode and counts either the single
	 * or page Step down.
	 * 
	 */
	_countDown : vjo.NEEDS_IMPL,


	/**
	 * Checks if the spinner is in page mode and counts either the single
	 * or page Step up.
	 * 
	 */
	_countUp : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Returns the element, to which the content padding should be applied.
	 * 
	 */
	_getContentPaddingTarget : vjo.NEEDS_IMPL,


	/**
	 * Returns the regular expression used as the text field&#8217;s filter
	 * 
	 */
	_getFilterRegExp : vjo.NEEDS_IMPL,


	/**
	 * Callback method for the locale Manager&#8217;s &#8220;changeLocale&#8221; event.
	 * 
	 */
	_onChangeLocale : vjo.NEEDS_IMPL,


	/**
	 * Callback method for the number format&#8217;s &#8220;changeNumberFormat&#8221; event.
	 * 
	 */
	_onChangeNumberFormat : vjo.NEEDS_IMPL,


	/**
	 * Callback for &#8220;keyDown&#8221; event.
	 * 
	 * Controls the interval mode (&#8220;single&#8221; or &#8220;page&#8221;)
	 * and the interval increase by detecting &#8220;Up&#8221;/&#8220;Down&#8221;
	 * and &#8220;PageUp&#8221;/&#8220;PageDown&#8221; keys.
	 * 
	 * The corresponding button will be pressed.
	 * 
	 */
	_onKeyDown : vjo.NEEDS_IMPL,


	/**
	 * Callback for &#8220;keyUp&#8221; event.
	 * 
	 * Detecting &#8220;Up&#8221;/&#8220;Down&#8221; and &#8220;PageUp&#8221;/&#8220;PageDown&#8221; keys.
	 * 
	 * Releases the button and disabled the page mode, if necessary.
	 * 
	 */
	_onKeyUp : vjo.NEEDS_IMPL,


	/**
	 * Callback method for the &#8220;mouseWheel&#8221; event.
	 * 
	 * Increments or decrements the value of the spinner.
	 * 
	 */
	_onMouseWheel : vjo.NEEDS_IMPL,


	/**
	 * Callback method for the &#8220;change&#8221; event of the textfield.
	 * 
	 */
	_onTextChange : vjo.NEEDS_IMPL,


	/**
	 * Checks the min and max values, disables / enables the
	 * buttons and handles the wrap around.
	 * 
	 */
	_updateButtons : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property editable.
	 * 
	 * For further details take a look at the property definition: {@link #editable}.
	 * 
	 */
	getEditable : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property numberFormat.
	 * 
	 * For further details take a look at the property definition: {@link #numberFormat}.
	 * 
	 */
	getNumberFormat : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	getWrap : vjo.NEEDS_IMPL,


	/**
	 * Normalizes the incoming value to be in the valid range and
	 * applies it to the {@link #value} afterwards.
	 * 
	 */
	gotoValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property editable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #editable}.
	 * 
	 */
	initEditable : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property numberFormat
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #numberFormat}.
	 * 
	 */
	initNumberFormat : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property wrap
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	initWrap : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property editable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #editable}.
	 * 
	 */
	isEditable : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property wrap equals true.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	isWrap : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property editable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #editable}.
	 * 
	 */
	resetEditable : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property numberFormat.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #numberFormat}.
	 * 
	 */
	resetNumberFormat : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property wrap.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	resetWrap : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property editable.
	 * 
	 * For further details take a look at the property definition: {@link #editable}.
	 * 
	 */
	setEditable : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property numberFormat.
	 * 
	 * For further details take a look at the property definition: {@link #numberFormat}.
	 * 
	 */
	setNumberFormat : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	setWrap : vjo.NEEDS_IMPL,


	/**
	 */
	tabFocus : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property editable.
	 * 
	 * For further details take a look at the property definition: {@link #editable}.
	 * 
	 */
	toggleEditable : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	toggleWrap : vjo.NEEDS_IMPL
})
.endType();