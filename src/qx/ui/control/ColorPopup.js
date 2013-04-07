/**
 * A popup which contains palettes of colors and the possibility to open the
 * Colorselector to choose a color.
 */
//>public
vjo.ctype('qx.ui.control.ColorPopup')
.inherits('qx.ui.popup.Popup')
.satisfies('qx.ui.form.IColorForm')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	_applyValue : vjo.NEEDS_IMPL,


	/**
	 * Creates the GroupBoxes containing the colored fields.
	 * 
	 */
	_createBoxes : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Creates the ColorSelector and adds buttons.
	 * 
	 */
	_createColorSelector : vjo.NEEDS_IMPL,


	/**
	 * Listener of execute event on the &#8220;cancel&#8221; button.
	 * Hides the ColorPopup and resets it&#8217;s color value.
	 * 
	 */
	_onAutomaticBtnExecute : vjo.NEEDS_IMPL,


	/**
	 * Listener for visibility changes.
	 * Sets preview pane&#8217;s background color to the current color,
	 * when the popup is visible.
	 * 
	 */
	_onChangeVisibility : vjo.NEEDS_IMPL,


	/**
	 * Listener of execute event on the &#8220;Cancel&#8221; button.
	 * Hides the ColorPopup.
	 * 
	 */
	_onColorSelectorCancel : vjo.NEEDS_IMPL,


	/**
	 * Listener of execute event on the &#8220;OK&#8221; button.
	 * Hides the ColorPopup and sets it&#8217;s color value to the selected color.
	 * 
	 */
	_onColorSelectorOk : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousedown event on a color field. Sets the ColorPoup&#8217;s value
	 * to field&#8217;s color value and paint the preview pane.
	 * 
	 */
	_onFieldMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Listener of mouseout event on a color field. Reset the preview pane&#8217;s
	 * background color to the old color value.
	 * 
	 */
	_onFieldMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Listener of mousemove event on a color field. Sets preview pane&#8217;s
	 * background color to the field&#8217;s color value.
	 * 
	 */
	_onFieldMouseOver : vjo.NEEDS_IMPL,


	/**
	 * Listener of execute event on the &#8220;Open ColorSelector&#8221; button.
	 * Opens a ColorSelector widget and hides the ColorPopup.
	 * 
	 */
	_onSelectorButtonExecute : vjo.NEEDS_IMPL,


	/**
	 * Adds the most recent selected color to the &#8220;Recent colors&#8221; list.
	 * If this list is full, the first color will be removed before inserting
	 * the new one.
	 * 
	 */
	_rotatePreviousColors : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property blue.
	 * 
	 * For further details take a look at the property definition: {@link #blue}.
	 * 
	 */
	getBlue : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property green.
	 * 
	 * For further details take a look at the property definition: {@link #green}.
	 * 
	 */
	getGreen : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property red.
	 * 
	 * For further details take a look at the property definition: {@link #red}.
	 * 
	 */
	getRed : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
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
	 * Calls the apply method and dispatches the change event of the property green
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #green}.
	 * 
	 */
	initGreen : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property value
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	initValue : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property blue.
	 * 
	 * For further details take a look at the property definition: {@link #blue}.
	 * 
	 */
	setBlue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property green.
	 * 
	 * For further details take a look at the property definition: {@link #green}.
	 * 
	 */
	setGreen : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property red.
	 * 
	 * For further details take a look at the property definition: {@link #red}.
	 * 
	 */
	setRed : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL
})
.endType();