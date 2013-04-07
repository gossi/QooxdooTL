/**
 * This is a basic form field with common functionality for
 * {@link TextArea} and {@link TextField}.
 * 
 * On every keystroke the value is synchronized with the
 * value of the textfield. Value changes can be monitored by listening to the
 * {@link #input} or {@link #changeValue} events, respectively.
 */
//>public abstract
vjo.ctype('qx.ui.form.AbstractField')
.inherits('qx.ui.core.Widget')
.satisfies(['qx.ui.form.IStringForm','qx.ui.form.IForm'])
.mixin('qx.ui.form.MForm')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Handles the firing of the changeValue event including the local cache
	 * for sending the old value in the event.
	 * 
	 */
	__fireChangeValueEvent : vjo.NEEDS_IMPL,


	/**
	 * Returns the placeholder label and creates it if necessary.
	 * 
	 */
	__getPlaceholderElement : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property font.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	_applyFont : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	_applyPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property readOnly.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	_applyReadOnly : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property textAlign.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	_applyTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property textColor.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	_applyTextColor : vjo.NEEDS_IMPL,


	/**
	 */
	_createContentElement : vjo.NEEDS_IMPL,


	/**
	 * Creates the input element. Derived classes may override this
	 * method, to create different input elements.
	 * 
	 */
	_createInputElement : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHint : vjo.NEEDS_IMPL,


	/**
	 * Returns the text size.
	 * 
	 */
	_getTextSize : vjo.NEEDS_IMPL,


	/**
	 * Event listener for change event of content element
	 * 
	 */
	_onChangeContent : vjo.NEEDS_IMPL,


	/**
	 * Locale change event handler
	 * 
	 */
	_onChangeLocale : vjo.NEEDS_IMPL,


	/**
	 */
	_onChangeTheme : vjo.NEEDS_IMPL,


	/**
	 * Event listener for native input events. Redirects the event
	 * to the widget. Also checks for the filter and max length.
	 * 
	 */
	_onHtmlInput : vjo.NEEDS_IMPL,


	/**
	 * Triggers text size recalculation after a web font was loaded
	 * 
	 */
	_onWebFontStatusChange : vjo.NEEDS_IMPL,


	/**
	 * Helper to remove the placeholder. Deletes the placeholder text from the
	 * field and removes the state.
	 * 
	 */
	_removePlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Hook into {@link qx.ui.form.AbstractField#renderLayout} method.
	 * Called after the contentElement has a width and an innerWidth.
	 * 
	 * Note: This was introduced to fix BUG#1585
	 * 
	 */
	_renderContentElement : vjo.NEEDS_IMPL,


	/**
	 * Helper to show the placeholder text in the field. It checks for all
	 * states and possible conditions and shows the placeholder only if allowed.
	 * 
	 */
	_showPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Updates the placeholder text with the DOM
	 * 
	 */
	_syncPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Clears the current selection.
	 * This method only works if the widget is already created and
	 * added to the document.
	 * 
	 */
	clearTextSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property filter.
	 * 
	 * For further details take a look at the property definition: {@link #filter}.
	 * 
	 */
	getFilter : vjo.NEEDS_IMPL,


	/**
	 */
	getFocusElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property liveUpdate.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	getLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxLength.
	 * 
	 * For further details take a look at the property definition: {@link #maxLength}.
	 * 
	 */
	getMaxLength : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	getPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property readOnly.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	getReadOnly : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property textAlign.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	getTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Returns the current selection.
	 * This method only works if the widget is already created and
	 * added to the document.
	 * 
	 */
	getTextSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the end of the text selection
	 * 
	 */
	getTextSelectionEnd : vjo.NEEDS_IMPL,


	/**
	 * Returns the current selection length.
	 * This method only works if the widget is already created and
	 * added to the document.
	 * 
	 */
	getTextSelectionLength : vjo.NEEDS_IMPL,


	/**
	 * Returns the start of the text selection
	 * 
	 */
	getTextSelectionStart : vjo.NEEDS_IMPL,


	/**
	 * Returns the current value of the textfield.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property filter
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #filter}.
	 * 
	 */
	initFilter : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property liveUpdate
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	initLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxLength
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxLength}.
	 * 
	 */
	initMaxLength : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property readOnly
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	initReadOnly : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property textAlign
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	initTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property liveUpdate equals true.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	isLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property readOnly equals true.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	isReadOnly : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property filter.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #filter}.
	 * 
	 */
	resetFilter : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property liveUpdate.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	resetLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxLength.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxLength}.
	 * 
	 */
	resetMaxLength : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property readOnly.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	resetReadOnly : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property textAlign.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	resetTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Resets the value to the default
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


	/**
	 * Selects the whole content
	 * 
	 */
	selectAllText : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property filter.
	 * 
	 * For further details take a look at the property definition: {@link #filter}.
	 * 
	 */
	setFilter : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property liveUpdate.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	setLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxLength.
	 * 
	 * For further details take a look at the property definition: {@link #maxLength}.
	 * 
	 */
	setMaxLength : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	setPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property readOnly.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	setReadOnly : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property textAlign.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	setTextAlign : vjo.NEEDS_IMPL,


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
	 * Sets the value of the textfield to the given value.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 */
	tabFocus : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property liveUpdate.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	toggleLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property readOnly.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	toggleReadOnly : vjo.NEEDS_IMPL
})
.endType();