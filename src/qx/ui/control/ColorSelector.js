/**
 * A typical color selector as known from native applications.
 * 
 * Includes support for RGB and HSB color areas.
 */
//>public
vjo.ctype('qx.ui.control.ColorSelector')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.form.IColorForm')
.protos({
	/**
	 * Creates a ColorSelector.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper for firing the changeValue event and checking for the mutex.
	 * 
	 */
	__fireChangeValueEvent : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property blue.
	 * 
	 * For further details take a look at the property definition: {@link #blue}.
	 * 
	 */
	_applyBlue : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property brightness.
	 * 
	 * For further details take a look at the property definition: {@link #brightness}.
	 * 
	 */
	_applyBrightness : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property green.
	 * 
	 * For further details take a look at the property definition: {@link #green}.
	 * 
	 */
	_applyGreen : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property hue.
	 * 
	 * For further details take a look at the property definition: {@link #hue}.
	 * 
	 */
	_applyHue : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property red.
	 * 
	 * For further details take a look at the property definition: {@link #red}.
	 * 
	 */
	_applyRed : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property saturation.
	 * 
	 * For further details take a look at the property definition: {@link #saturation}.
	 * 
	 */
	_applySaturation : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Listener for appear.
	 * Sets preview pane&#8217;s background color to the current color.
	 * 
	 */
	_onAppear : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousedown event on the brightness field.
	 * Adjusts the color by changing the brightness.
	 * 
	 */
	_onBrightnessFieldMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousedown event on the brightness handle.
	 * Adjusts the color by changing the brightness.
	 * 
	 */
	_onBrightnessHandleMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousemove event on the brightness handle.
	 * Forwards the event to _setBrightnessOnFieldEvent().
	 * 
	 */
	_onBrightnessHandleMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Listener of mouseup event on the brightness handle.
	 * Releases the capture.
	 * 
	 */
	_onBrightnessHandleMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousewheel event on the brightness pane.
	 * Adjusts the color by changing the brightness.
	 * 
	 */
	_onBrightnessPaneMouseWheel : vjo.NEEDS_IMPL,


	/**
	 * Listener of click event on the color field.
	 * Sets red, green and blue values to clicked color field&#8217;s background color.
	 * 
	 */
	_onColorFieldClick : vjo.NEEDS_IMPL,


	/**
	 * Changes red, green and blue value to the corresponding hexfield value.
	 * 
	 */
	_onHexFieldChange : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousedown event on the saturation field.
	 * Adjusts the color by changing the saturation.
	 * Sets mouse capture.
	 * 
	 */
	_onHueSaturationFieldMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousemove event on the saturation handle.
	 * Forwards the event to _onHueSaturationHandleMouseMove().
	 * 
	 */
	_onHueSaturationHandleMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Listener of mouseup event on the saturation handle.
	 * Releases mouse capture.
	 * 
	 */
	_onHueSaturationHandleMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousewheel event on the saturation pane.
	 * Adjusts the color by changing the saturation.
	 * 
	 */
	_onHueSaturationPaneMouseWheel : vjo.NEEDS_IMPL,


	/**
	 * Sets widget&#8217;s blue value to spinner&#8217;s value.
	 * 
	 */
	_setBlueFromSpinner : vjo.NEEDS_IMPL,


	/**
	 * Sets widget&#8217;s brightness value to spinner&#8217;s value.
	 * 
	 */
	_setBrightnessFromSpinner : vjo.NEEDS_IMPL,


	/**
	 * Updates the background of the brightness field to give a nicer gradient
	 * 
	 */
	_setBrightnessGradiant : vjo.NEEDS_IMPL,


	/**
	 * Sets the brightness and moves the brightness handle.
	 * 
	 */
	_setBrightnessOnFieldEvent : vjo.NEEDS_IMPL,


	/**
	 * Sets widget&#8217;s green value to spinner&#8217;s value.
	 * 
	 */
	_setGreenFromSpinner : vjo.NEEDS_IMPL,


	/**
	 * Sets hexfield value to it&#8217;s corresponding red, green and blue value.
	 * 
	 */
	_setHexFromRgb : vjo.NEEDS_IMPL,


	/**
	 * Sets hue value to it&#8217;s corresponding red, green and blue value.
	 * 
	 */
	_setHueFromRgb : vjo.NEEDS_IMPL,


	/**
	 * Sets widget&#8217;s hue value to spinner&#8217;s value.
	 * 
	 */
	_setHueFromSpinner : vjo.NEEDS_IMPL,


	/**
	 * Sets the saturation and moves the saturation handle.
	 * 
	 */
	_setHueSaturationOnFieldEvent : vjo.NEEDS_IMPL,


	/**
	 * Sets preview pane&#8217;s background color to corresponding red, green and blue color values.
	 * 
	 */
	_setPreviewFromRgb : vjo.NEEDS_IMPL,


	/**
	 * Sets widget&#8217;s red value to spinner&#8217;s value.
	 * 
	 */
	_setRedFromSpinner : vjo.NEEDS_IMPL,


	/**
	 * Sets red, green and blue value to corresponding hue value.
	 * 
	 */
	_setRgbFromHue : vjo.NEEDS_IMPL,


	/**
	 * Sets widget&#8217;s saturation value to spinner&#8217;s value.
	 * 
	 */
	_setSaturationFromSpinner : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property blue.
	 * 
	 * For further details take a look at the property definition: {@link #blue}.
	 * 
	 */
	getBlue : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property brightness.
	 * 
	 * For further details take a look at the property definition: {@link #brightness}.
	 * 
	 */
	getBrightness : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property green.
	 * 
	 * For further details take a look at the property definition: {@link #green}.
	 * 
	 */
	getGreen : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property hue.
	 * 
	 * For further details take a look at the property definition: {@link #hue}.
	 * 
	 */
	getHue : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property red.
	 * 
	 * For further details take a look at the property definition: {@link #red}.
	 * 
	 */
	getRed : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property saturation.
	 * 
	 * For further details take a look at the property definition: {@link #saturation}.
	 * 
	 */
	getSaturation : vjo.NEEDS_IMPL,


	/**
	 * Returns the currently selected color.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property blue
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #blue}.
	 * 
	 */
	initBlue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property brightness
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #brightness}.
	 * 
	 */
	initBrightness : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property green
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #green}.
	 * 
	 */
	initGreen : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property hue
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #hue}.
	 * 
	 */
	initHue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property red
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #red}.
	 * 
	 */
	initRed : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property saturation
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #saturation}.
	 * 
	 */
	initSaturation : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property blue.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #blue}.
	 * 
	 */
	resetBlue : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property brightness.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #brightness}.
	 * 
	 */
	resetBrightness : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property green.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #green}.
	 * 
	 */
	resetGreen : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property hue.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #hue}.
	 * 
	 */
	resetHue : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property red.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #red}.
	 * 
	 */
	resetRed : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property saturation.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #saturation}.
	 * 
	 */
	resetSaturation : vjo.NEEDS_IMPL,


	/**
	 * Resets the color to null.
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property blue.
	 * 
	 * For further details take a look at the property definition: {@link #blue}.
	 * 
	 */
	setBlue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property brightness.
	 * 
	 * For further details take a look at the property definition: {@link #brightness}.
	 * 
	 */
	setBrightness : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property green.
	 * 
	 * For further details take a look at the property definition: {@link #green}.
	 * 
	 */
	setGreen : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property hue.
	 * 
	 * For further details take a look at the property definition: {@link #hue}.
	 * 
	 */
	setHue : vjo.NEEDS_IMPL,


	/**
	 * Sets previous color&#8217;s to given values.
	 * 
	 */
	setPreviousColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property red.
	 * 
	 * For further details take a look at the property definition: {@link #red}.
	 * 
	 */
	setRed : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property saturation.
	 * 
	 * For further details take a look at the property definition: {@link #saturation}.
	 * 
	 */
	setSaturation : vjo.NEEDS_IMPL,


	/**
	 * The value of the ColorSelector is a string containing the HEX value of
	 * the currently selected color. Take a look at
	 * {@link qx.util.ColorUtil#stringToRgb} to see what kind of input the
	 * method can handle.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL
})
.endType();