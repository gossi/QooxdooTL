/**
 * A date field is like a combo box with the date as popup. As button to
 * open the calendar a calendar icon is shown at the right to the textfield.
 * 
 * To be conform with all form widgets, the {@link qx.ui.form.IForm} interface
 * is implemented.
 * 
 * The following example creates a date field and sets the current
 * date as selected.
 * 
 * 
 * var dateField = new qx.ui.form.DateField();
 * this.getRoot().add(dateField, {top: 20, left: 20});
 * dateField.setValue(new Date());

 */
//>public
vjo.ctype('qx.ui.form.DateField')
.inherits('qx.ui.core.Widget')
.satisfies(['qx.ui.form.IForm','qx.ui.form.IDateForm'])
.mixin(['qx.ui.core.MRemoteChildrenHandling','qx.ui.form.MForm'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * 
	 */
	_addLocaleChangeLeistener : vjo.NEEDS_IMPL,


	/**
	 * Checks for &#8220;qx.dynlocale&#8221; and adds a listener to the locale changes.
	 * On every change, {@link #_setDefaultDateFormat} is called to reinitialize
	 * the format. You can easily override that method to prevent that behavior.
	 * 
	 */
	_addLocaleChangeListener : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property dateFormat.
	 * 
	 * For further details take a look at the property definition: {@link #dateFormat}.
	 * 
	 */
	_applyDateFormat : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	_applyPlaceholder : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Handler for the blur event of the current widget.
	 * 
	 */
	_onBlur : vjo.NEEDS_IMPL,


	/**
	 * Handler method which handles the click on the calender popup.
	 * 
	 */
	_onChangeDate : vjo.NEEDS_IMPL,


	/**
	 * Toggles the popup&#8217;s visibility.
	 * 
	 */
	_onClick : vjo.NEEDS_IMPL,


	/**
	 * Handler method which handles the key press. It forwards all key event
	 * to the opened date chooser except the escape key event. Escape closes
	 * the popup.
	 * If the list is cloned, all key events will not be processed further.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Redirects changeVisibility event from the list to this widget.
	 * 
	 */
	_onPopupChangeVisibility : vjo.NEEDS_IMPL,


	/**
	 * Reacts on value changes of the text field and syncs the
	 * value to the combobox.
	 * 
	 */
	_onTextFieldChangeValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the default date format which is returned by
	 * {@link #getDefaultDateFormatter}. You can overrride this method to
	 * define your own default format.
	 * 
	 */
	_setDefaultDateFormat : vjo.NEEDS_IMPL,


	/**
	 * Hides the date chooser popup.
	 * 
	 */
	close : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property dateFormat.
	 * 
	 * For further details take a look at the property definition: {@link #dateFormat}.
	 * 
	 */
	getDateFormat : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	getPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Returns the current set date, parsed from the input-field
	 * corresponding to the {@link #dateFormat}.
	 * If the given text could not be parsed, null will be returned.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property dateFormat
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #dateFormat}.
	 * 
	 */
	initDateFormat : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property placeholder
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	initPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Checks if the textfield of the DateField is empty.
	 * 
	 */
	isEmpty : vjo.NEEDS_IMPL,


	/**
	 * Shows the date chooser popup.
	 * 
	 */
	open : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property dateFormat.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #dateFormat}.
	 * 
	 */
	resetDateFormat : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property placeholder.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	resetPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Resets the DateField. The textfield will be empty and the datechooser
	 * will also have no selection.
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property dateFormat.
	 * 
	 * For further details take a look at the property definition: {@link #dateFormat}.
	 * 
	 */
	setDateFormat : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	setPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * This method sets the date, which will be formatted according to
	 * #dateFormat to the date field. It will also select the date in the
	 * calendar popup.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Toggles the date chooser popup visibility.
	 * 
	 */
	toggle : vjo.NEEDS_IMPL
})
.endType();