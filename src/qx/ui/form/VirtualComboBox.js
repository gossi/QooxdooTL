/**
 * A virtual form widget that allows text entry as well as selection from a
 * drop-down.
 */
//>public
vjo.ctype('qx.ui.form.VirtualComboBox')
.inherits('qx.ui.form.core.AbstractVirtualBox')
.satisfies('qx.ui.form.IStringForm')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper method to convert the model item to a String.
	 * 
	 */
	__convertValue : vjo.NEEDS_IMPL,


	/**
	 * Handler to synchronize selection changes with the value property.
	 * 
	 */
	__onSelectionChange : vjo.NEEDS_IMPL,


	/**
	 * Selects the first list item that starts with the text field&#8217;s value.
	 * 
	 */
	__selectFirstMatch : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	_applyPlaceholder : vjo.NEEDS_IMPL,


	/**
	 */
	_beforeOpen : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 */
	_getAction : vjo.NEEDS_IMPL,


	/**
	 */
	_handleKeyboard : vjo.NEEDS_IMPL,


	/**
	 */
	_handleMouse : vjo.NEEDS_IMPL,


	/**
	 * Clears the current selection. This method only works if the widget is
	 * already created and added to the document.
	 * 
	 */
	clearTextSelection : vjo.NEEDS_IMPL,


	/**
	 */
	focus : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property defaultFormat.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFormat}.
	 * 
	 */
	getDefaultFormat : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	getPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Returns the current selection. This method only works if the widget is
	 * already created and added to the document.
	 * 
	 */
	getTextSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the current selection length. This method only works if the
	 * widget is already created and added to the document.
	 * 
	 */
	getTextSelectionLength : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property defaultFormat
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFormat}.
	 * 
	 */
	initDefaultFormat : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property value
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	initValue : vjo.NEEDS_IMPL,


	/**
	 * Clear any text selection, then select all text.
	 * 
	 */
	resetAllTextSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property defaultFormat.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFormat}.
	 * 
	 */
	resetDefaultFormat : vjo.NEEDS_IMPL,


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
	 * Selects the whole content.
	 * 
	 */
	selectAllText : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property defaultFormat.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFormat}.
	 * 
	 */
	setDefaultFormat : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	setPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Set the selection to the given start and end (zero-based). If no end
	 * value is given the selection will extend to the end of the textfield&#8217;s
	 * content. This method only works if the widget is already created and
	 * added to the document.
	 * 
	 */
	setTextSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 */
	tabFocus : vjo.NEEDS_IMPL
})
.endType();