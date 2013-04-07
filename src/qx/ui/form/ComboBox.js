/**
 * Basically a text fields which allows a selection from a list of
 * preconfigured options. Allows custom user input. Public API is value
 * oriented.
 * 
 * To work with selections without custom input the ideal candidates are
 * the {@link SelectBox} or the {@link RadioGroup}.
 */
//>public
vjo.ctype('qx.ui.form.ComboBox')
.inherits('qx.ui.form.AbstractSelectBox')
.satisfies('qx.ui.form.IStringForm')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


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
	 * Toggles the popup&#8217;s visibility.
	 * 
	 */
	_onClick : vjo.NEEDS_IMPL,


	/**
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 */
	_onListChangeSelection : vjo.NEEDS_IMPL,


	/**
	 */
	_onListMouseDown : vjo.NEEDS_IMPL,


	/**
	 */
	_onPopupChangeVisibility : vjo.NEEDS_IMPL,


	/**
	 * Reacts on value changes of the text field and syncs the
	 * value to the combobox.
	 * 
	 */
	_onTextFieldChangeValue : vjo.NEEDS_IMPL,


	/**
	 * Apply pre-selected item
	 * 
	 */
	_setPreselectedItem : vjo.NEEDS_IMPL,


	/**
	 * Clears the current selection.
	 * This method only works if the widget is already created and
	 * added to the document.
	 * 
	 */
	clearTextSelection : vjo.NEEDS_IMPL,


	/**
	 */
	focus : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	getPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Returns the current selection.
	 * This method only works if the widget is already created and
	 * added to the document.
	 * 
	 */
	getTextSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the current selection length.
	 * This method only works if the widget is already created and
	 * added to the document.
	 * 
	 */
	getTextSelectionLength : vjo.NEEDS_IMPL,


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
	 * Clear any text selection, then select all text
	 * 
	 */
	resetAllTextSelection : vjo.NEEDS_IMPL,


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
	 * Selects the whole content
	 * 
	 */
	selectAllText : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	setPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Set the selection to the given start and end (zero-based).
	 * If no end value is given the selection will extend to the
	 * end of the textfield&#8217;s content.
	 * This method only works if the widget is already created and
	 * added to the document.
	 * 
	 */
	setTextSelection : vjo.NEEDS_IMPL,


	/**
	 */
	tabFocus : vjo.NEEDS_IMPL
})
.endType();