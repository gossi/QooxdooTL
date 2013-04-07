/**
 * A date chooser is a small calendar including a navigation bar to switch the shown
 * month. It includes a column for the calendar week and shows one month. Selecting
 * a date is as easy as clicking on it.
 * 
 * To be conform with all form widgets, the {@link qx.ui.form.IForm} interface
 * is implemented.
 * 
 * The following example creates and adds a date chooser to the root element.
 * A listener alerts the user if a new date is selected.
 * 
 * 
 * var chooser = new qx.ui.control.DateChooser();
 * this.getRoot().add(chooser, { left : 20, top: 20});
 * 
 * chooser.addListener("changeValue", function(e) {
 *   alert(e.getData());
 * });
 * 
 * 
 * Additionally to a selection event an execute event is available which is
 * fired by doubleclick or taping the space / enter key. With this event you
 * can for example save the selection and close the date chooser.
 */
//>public
vjo.ctype('qx.ui.control.DateChooser')
.inherits('qx.ui.core.Widget')
.satisfies(['qx.ui.form.IExecutable','qx.ui.form.IForm','qx.ui.form.IDateForm'])
.mixin(['qx.ui.core.MExecutable','qx.ui.form.MForm'])
.protos({
	/**
	 * 
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
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when a day has been clicked.
	 * 
	 */
	_onDayClicked : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when a day has been double-clicked.
	 * 
	 */
	_onDayDblClicked : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when a key was pressed.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Handler which stops the propagation of the click event if
	 * the navigation bar or calendar headers will be clicked.
	 * 
	 */
	_onMouseUpDown : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when a navigation button has been clicked.
	 * 
	 */
	_onNavButtonClicked : vjo.NEEDS_IMPL,


	/**
	 * Updates the date pane.
	 * 
	 */
	_updateDatePane : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property shownMonth.
	 * 
	 * For further details take a look at the property definition: {@link #shownMonth}.
	 * 
	 */
	getShownMonth : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property shownYear.
	 * 
	 * For further details take a look at the property definition: {@link #shownYear}.
	 * 
	 */
	getShownYear : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Used to handle the key events.
	 * 
	 */
	handleKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property shownMonth
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #shownMonth}.
	 * 
	 */
	initShownMonth : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property shownYear
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #shownYear}.
	 * 
	 */
	initShownYear : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property shownMonth.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #shownMonth}.
	 * 
	 */
	resetShownMonth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property shownYear.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #shownYear}.
	 * 
	 */
	resetShownYear : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property shownMonth.
	 * 
	 * For further details take a look at the property definition: {@link #shownMonth}.
	 * 
	 */
	setShownMonth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property shownYear.
	 * 
	 * For further details take a look at the property definition: {@link #shownYear}.
	 * 
	 */
	setShownYear : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Shows a certain month.
	 * 
	 */
	showMonth : vjo.NEEDS_IMPL
})
.endType();