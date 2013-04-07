/**
 * A toggle Button widget
 * 
 * If the user presses the button by clicking on it pressing the enter or
 * space key, the button toggles between the pressed an not pressed states.
 * There is no execute event, only a {@link qx.ui.form.ToggleButton#changeValue}
 * event.
 */
//>public
vjo.ctype('qx.ui.form.ToggleButton')
.inherits('qx.ui.basic.Atom')
.satisfies(['qx.ui.form.IBooleanForm','qx.ui.form.IExecutable','qx.ui.form.IRadioItem'])
.mixin('qx.ui.core.MExecutable')
.protos({
	/**
	 * Creates a ToggleButton.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * The assigned {@link qx.ui.form.RadioGroup} which handles the switching between registered buttons
	 * 
	 */
	_applyGroup : vjo.NEEDS_IMPL,


	/**
	 * Apply value property when triState property is modified.
	 * 
	 */
	_applyTriState : vjo.NEEDS_IMPL,


	/**
	 * Changes the state of the button dependent on the checked value.
	 * 
	 */
	_applyValue : vjo.NEEDS_IMPL,


	/**
	 * Handler for the execute event.
	 * 
	 */
	_onExecute : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;keydown&#8221; event.
	 * 
	 * Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state
	 * for the keys &#8220;Enter&#8221; or &#8220;Space&#8221;
	 * 
	 */
	_onKeyDown : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;keyup&#8221; event.
	 * 
	 * Removes &#8220;abandoned&#8221; and &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set)
	 * for the keys &#8220;Enter&#8221; or &#8220;Space&#8221;. It also toggles the {@link #value} property.
	 * 
	 */
	_onKeyUp : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mousedown&#8221; event.
	 * 
	 * Activates capturing
	 * Removes &#8220;abandoned&#8221; state
	 * Adds &#8220;pressed&#8221; state

	 * 
	 */
	_onMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseout&#8221; event.
	 * 
	 * Removes &#8220;hovered&#8221; state
	 * Adds &#8220;abandoned&#8221; state (if &#8220;pressed&#8221; state is set)
	 * Removes &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set and button is not checked)

	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseover&#8221; event.
	 * 
	 * Adds state &#8220;hovered&#8221;
	 * Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state (if &#8220;abandoned&#8221; state is set)

	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseup&#8221; event.
	 * 
	 * Releases capturing
	 * Removes &#8220;pressed&#8221; state (if not &#8220;abandoned&#8221; state is set and &#8220;pressed&#8221; state is set)
	 * Removes &#8220;abandoned&#8221; state (if set)
	 * Toggles {@link #value} (if state &#8220;abandoned&#8221; is not set and state &#8220;pressed&#8221; is set)

	 * 
	 */
	_onMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property group.
	 * 
	 * For further details take a look at the property definition: {@link #group}.
	 * 
	 */
	getGroup : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property triState.
	 * 
	 * For further details take a look at the property definition: {@link #triState}.
	 * 
	 */
	getTriState : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property group
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #group}.
	 * 
	 */
	initGroup : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property triState
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #triState}.
	 * 
	 */
	initTriState : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property triState equals true.
	 * 
	 * For further details take a look at the property definition: {@link #triState}.
	 * 
	 */
	isTriState : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property value equals true.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	isValue : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property group.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #group}.
	 * 
	 */
	resetGroup : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property triState.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #triState}.
	 * 
	 */
	resetTriState : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property group.
	 * 
	 * For further details take a look at the property definition: {@link #group}.
	 * 
	 */
	setGroup : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property triState.
	 * 
	 * For further details take a look at the property definition: {@link #triState}.
	 * 
	 */
	setTriState : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property triState.
	 * 
	 * For further details take a look at the property definition: {@link #triState}.
	 * 
	 */
	toggleTriState : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	toggleValue : vjo.NEEDS_IMPL
})
.endType();