/**
 * Rich text editor widget which encapsulates the low-level {@link qx.bom.htmlarea.HtmlArea}
 * component to offer editing features.
 * 
 * Optimized for the use at a RIA.
 */
//>public
vjo.ctype('qx.ui.embed.HtmlArea')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * Constructor
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds the &#8220;appear&#8221; listener for correct startup
	 * 
	 */
	__addAppearListener : vjo.NEEDS_IMPL,


	/**
	 * Applies the postponed properties to the editor component
	 * 
	 */
	__applyPostPonedProperties : vjo.NEEDS_IMPL,


	/**
	 * Clones the incoming data event and fires it at itself to let the application
	 * developers listen to the widget instance.
	 * 
	 */
	__delegateDataEvent : vjo.NEEDS_IMPL,


	/**
	 * Clones the incoming event and fires it at itself to let the application
	 * developers listen to the widget instance.
	 * 
	 */
	__delegateEvent : vjo.NEEDS_IMPL,


	/**
	 * Focus the document content
	 * 
	 */
	__focusContent : vjo.NEEDS_IMPL,


	/**
	 * Setup listeners for events of the low-level editing component and fires
	 * them at the editing widget.
	 * 
	 */
	__setupDelegateListeners : vjo.NEEDS_IMPL,


	/**
	 * Setup the low-level editor component and the listener delegate methods.
	 * 
	 */
	__setupEditorComponent : vjo.NEEDS_IMPL,


	/**
	 * Listens to DOM changes of the container element to get informed when the
	 * HtmlArea is moved to another container.
	 * 
	 * This method is only implemented for Gecko browsers.
	 * 
	 */
	__setupInvalidateListener : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property contentType.
	 * 
	 * For further details take a look at the property definition: {@link #contentType}.
	 * 
	 */
	_applyContentType : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property defaultFontFamily.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFontFamily}.
	 * 
	 */
	_applyDefaultFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property defaultFontSize.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFontSize}.
	 * 
	 */
	_applyDefaultFontSize : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property insertLinebreakOnCtrlEnter.
	 * 
	 * For further details take a look at the property definition: {@link #insertLinebreakOnCtrlEnter}.
	 * 
	 */
	_applyInsertLinebreakOnCtrlEnter : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property insertParagraphOnLinebreak.
	 * 
	 * For further details take a look at the property definition: {@link #insertParagraphOnLinebreak}.
	 * 
	 */
	_applyInsertParagraphOnLinebreak : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property messengerMode.
	 * 
	 * For further details take a look at the property definition: {@link #messengerMode}.
	 * 
	 */
	_applyMessengerMode : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property nativeContextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	_applyNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property postProcess.
	 * 
	 * For further details take a look at the property definition: {@link #postProcess}.
	 * 
	 */
	_applyPostProcess : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property useUndoRedo.
	 * 
	 * For further details take a look at the property definition: {@link #useUndoRedo}.
	 * 
	 */
	_applyUseUndoRedo : vjo.NEEDS_IMPL,


	/**
	 * Creates  element which is aligned over iframe node to avoid losing mouse events.
	 * 
	 */
	_createBlockerElement : vjo.NEEDS_IMPL,


	/**
	 * Initializes the blocker element if (yet) not available
	 * 
	 */
	_initBlockerElement : vjo.NEEDS_IMPL,


	/**
	 * Cover the iframe with a transparent blocker div element. This prevents
	 * mouse or key events to be handled by the iframe. To release the blocker
	 * use {@link #release}.
	 * 
	 */
	block : vjo.NEEDS_IMPL,


	/**
	 * Clears the current selection
	 * 
	 */
	clearSelection : vjo.NEEDS_IMPL,


	/**
	 * Helper function to examine if HTMLArea is empty, except for
	 * place holder(s) needed by some browsers.
	 * 
	 */
	containsOnlyPlaceholder : vjo.NEEDS_IMPL,


	/**
	 */
	focus : vjo.NEEDS_IMPL,


	/**
	 * Forces the htmlArea to reset the document editable. This method can
	 * be useful (especially for Gecko) whenever the HtmlArea was hidden and
	 * gets visible again.
	 * 
	 */
	forceEditable : vjo.NEEDS_IMPL,


	/**
	 * Getter for command manager.
	 * 
	 */
	getCommandManager : vjo.NEEDS_IMPL,


	/**
	 * Returns the complete content of the editor
	 * 
	 */
	getCompleteHtml : vjo.NEEDS_IMPL,


	/**
	 * Getting the computed value of the editor.
	 * This method returns the current value of the editor traversing
	 * the elements below the body element. With this method you always
	 * get the current value, but it is much more expensive. So use it
	 * carefully.
	 * 
	 */
	getComputedValue : vjo.NEEDS_IMPL,


	/**
	 * Returns the body of the document
	 * 
	 */
	getContentBody : vjo.NEEDS_IMPL,


	/**
	 * Returns the document of the iframe
	 * 
	 */
	getContentDocument : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property contentType.
	 * 
	 * For further details take a look at the property definition: {@link #contentType}.
	 * 
	 */
	getContentType : vjo.NEEDS_IMPL,


	/**
	 * Returns the body of the document
	 * 
	 */
	getContentWindow : vjo.NEEDS_IMPL,


	/**
	 * Returns the information about the current context (focusNode). It&#8217;s a
	 * map with information about &#8220;bold&#8221;, &#8220;italic&#8221;, &#8220;underline&#8221;, etc.
	 * 
	 */
	getContextInformation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property defaultFontFamily.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFontFamily}.
	 * 
	 */
	getDefaultFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property defaultFontSize.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFontSize}.
	 * 
	 */
	getDefaultFontSize : vjo.NEEDS_IMPL,


	/**
	 * Whether the document is in editable mode
	 * 
	 */
	getEditable : vjo.NEEDS_IMPL,


	/**
	 * Returns the node where the selection ends
	 * 
	 */
	getFocusNode : vjo.NEEDS_IMPL,


	/**
	 * Get html content (call own recursive method)
	 * 
	 */
	getHtml : vjo.NEEDS_IMPL,


	/**
	 * Returns the iframe object which is used to render the content
	 * 
	 */
	getIframeObject : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property insertLinebreakOnCtrlEnter.
	 * 
	 * For further details take a look at the property definition: {@link #insertLinebreakOnCtrlEnter}.
	 * 
	 */
	getInsertLinebreakOnCtrlEnter : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property insertParagraphOnLinebreak.
	 * 
	 * For further details take a look at the property definition: {@link #insertParagraphOnLinebreak}.
	 * 
	 */
	getInsertParagraphOnLinebreak : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property messengerMode.
	 * 
	 * For further details take a look at the property definition: {@link #messengerMode}.
	 * 
	 */
	getMessengerMode : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property postProcess.
	 * 
	 * For further details take a look at the property definition: {@link #postProcess}.
	 * 
	 */
	getPostProcess : vjo.NEEDS_IMPL,


	/**
	 * Returns the range of the current selection
	 * 
	 */
	getRange : vjo.NEEDS_IMPL,


	/**
	 * Returns the current stored range.
	 * 
	 */
	getSavedRange : vjo.NEEDS_IMPL,


	/**
	 * Returns the content of the actual range as text
	 * 
	 */
	getSelectedHtml : vjo.NEEDS_IMPL,


	/**
	 * Returns the currently selected text.
	 * 
	 */
	getSelectedText : vjo.NEEDS_IMPL,


	/**
	 * Returns the current selection object
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * *** IN DEVELOPMENT! ***
	 * Returns all text nodes
	 * 
	 */
	getTextNodes : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property useUndoRedo.
	 * 
	 * For further details take a look at the property definition: {@link #useUndoRedo}.
	 * 
	 */
	getUseUndoRedo : vjo.NEEDS_IMPL,


	/**
	 * Getting the value of the editor.
	 * Attention: The content of the editor is synced
	 * at focus/blur events, but not on every input. This method
	 * is not delivering the current content in a stable manner.
	 * To get the current value of the editor use the {@link #getComputedValue}
	 * method instead.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Returns all the words that are contained in a node.
	 * 
	 */
	getWords : vjo.NEEDS_IMPL,


	/**
	 * *** IN DEVELOPMENT! ***
	 * Returns all words
	 * 
	 */
	getWordsWithElement : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property contentType
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #contentType}.
	 * 
	 */
	initContentType : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property defaultFontFamily
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFontFamily}.
	 * 
	 */
	initDefaultFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property defaultFontSize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFontSize}.
	 * 
	 */
	initDefaultFontSize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property insertLinebreakOnCtrlEnter
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #insertLinebreakOnCtrlEnter}.
	 * 
	 */
	initInsertLinebreakOnCtrlEnter : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property insertParagraphOnLinebreak
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #insertParagraphOnLinebreak}.
	 * 
	 */
	initInsertParagraphOnLinebreak : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property messengerMode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #messengerMode}.
	 * 
	 */
	initMessengerMode : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property postProcess
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #postProcess}.
	 * 
	 */
	initPostProcess : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property useUndoRedo
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #useUndoRedo}.
	 * 
	 */
	initUseUndoRedo : vjo.NEEDS_IMPL,


	/**
	 * Inserts a horizontal ruler
	 * 
	 */
	insertHorizontalRuler : vjo.NEEDS_IMPL,


	/**
	 * Inserts html content on the current selection
	 * 
	 */
	insertHtml : vjo.NEEDS_IMPL,


	/**
	 * Inserts a hyperlink
	 * 
	 */
	insertHyperLink : vjo.NEEDS_IMPL,


	/**
	 * Insert an image
	 * 
	 */
	insertImage : vjo.NEEDS_IMPL,


	/**
	 * Indents the current selection
	 * 
	 */
	insertIndent : vjo.NEEDS_IMPL,


	/**
	 * Inserts an ordered list
	 * 
	 */
	insertOrderedList : vjo.NEEDS_IMPL,


	/**
	 * Outdents the current selection
	 * 
	 */
	insertOutdent : vjo.NEEDS_IMPL,


	/**
	 * Inserts an unordered list
	 * 
	 */
	insertUnorderedList : vjo.NEEDS_IMPL,


	/**
	 * Whether the document is in editable mode
	 * 
	 */
	isEditable : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property insertLinebreakOnCtrlEnter equals true.
	 * 
	 * For further details take a look at the property definition: {@link #insertLinebreakOnCtrlEnter}.
	 * 
	 */
	isInsertLinebreakOnCtrlEnter : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property insertParagraphOnLinebreak equals true.
	 * 
	 * For further details take a look at the property definition: {@link #insertParagraphOnLinebreak}.
	 * 
	 */
	isInsertParagraphOnLinebreak : vjo.NEEDS_IMPL,


	/**
	 * Service method to check if the component is already loaded.
	 * Overrides the base method.
	 * 
	 */
	isLoaded : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property messengerMode equals true.
	 * 
	 * For further details take a look at the property definition: {@link #messengerMode}.
	 * 
	 */
	isMessengerMode : vjo.NEEDS_IMPL,


	/**
	 * Whether the editor is ready to accept commands etc.
	 * 
	 */
	isReady : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property useUndoRedo equals true.
	 * 
	 * For further details take a look at the property definition: {@link #useUndoRedo}.
	 * 
	 */
	isUseUndoRedo : vjo.NEEDS_IMPL,


	/**
	 * Redo last undo
	 * 
	 */
	redo : vjo.NEEDS_IMPL,


	/**
	 * Release the blocker set by {@link #block}.
	 * 
	 */
	release : vjo.NEEDS_IMPL,


	/**
	 * Alias for setBackgroundColor(&#8220;transparent&#8221;);
	 * 
	 */
	removeBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Alias for setBackgroundImage(null);
	 * 
	 */
	removeBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Removes all formatting styles on the current selection content and resets
	 * the font family and size to the default ones. See {@link #defaultFontSize}
	 * and {@link #defaultFontFamily}.
	 * 
	 */
	removeFormat : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property contentType.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #contentType}.
	 * 
	 */
	resetContentType : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property defaultFontFamily.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFontFamily}.
	 * 
	 */
	resetDefaultFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property defaultFontSize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFontSize}.
	 * 
	 */
	resetDefaultFontSize : vjo.NEEDS_IMPL,


	/**
	 * Resets the content of the editor
	 * 
	 */
	resetHtml : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insertLinebreakOnCtrlEnter.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insertLinebreakOnCtrlEnter}.
	 * 
	 */
	resetInsertLinebreakOnCtrlEnter : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insertParagraphOnLinebreak.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insertParagraphOnLinebreak}.
	 * 
	 */
	resetInsertParagraphOnLinebreak : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property messengerMode.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #messengerMode}.
	 * 
	 */
	resetMessengerMode : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property postProcess.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #postProcess}.
	 * 
	 */
	resetPostProcess : vjo.NEEDS_IMPL,


	/**
	 * Resets the current saved range.
	 * 
	 */
	resetSavedRange : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property useUndoRedo.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #useUndoRedo}.
	 * 
	 */
	resetUseUndoRedo : vjo.NEEDS_IMPL,


	/**
	 * Safes the current range to let the next command operate on this range.
	 * Currently only interesting for IE browsers, since they loose the range /
	 * selection whenever an element is clicked which need to have a focus (e.g.
	 * a textfield widget).
	 * 
	 * NOTE: the next executed command will reset this range.
	 * 
	 */
	saveRange : vjo.NEEDS_IMPL,


	/**
	 * Selects the whole content
	 * 
	 */
	selectAll : vjo.NEEDS_IMPL,


	/**
	 * Sets the background color of the editor
	 * 
	 */
	setBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Inserts an background image
	 * 
	 */
	setBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Sets the current selection content to bold font style
	 * 
	 */
	setBold : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property contentType.
	 * 
	 * For further details take a look at the property definition: {@link #contentType}.
	 * 
	 */
	setContentType : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property defaultFontFamily.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFontFamily}.
	 * 
	 */
	setDefaultFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property defaultFontSize.
	 * 
	 * For further details take a look at the property definition: {@link #defaultFontSize}.
	 * 
	 */
	setDefaultFontSize : vjo.NEEDS_IMPL,


	/**
	 * Whether the document is in editable mode
	 * 
	 */
	setEditable : vjo.NEEDS_IMPL,


	/**
	 * Sets the current selection content to the specified font family
	 * 
	 */
	setFontFamily : vjo.NEEDS_IMPL,


	/**
	 * Sets the current selection content to the specified font size
	 * 
	 */
	setFontSize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property insertLinebreakOnCtrlEnter.
	 * 
	 * For further details take a look at the property definition: {@link #insertLinebreakOnCtrlEnter}.
	 * 
	 */
	setInsertLinebreakOnCtrlEnter : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property insertParagraphOnLinebreak.
	 * 
	 * For further details take a look at the property definition: {@link #insertParagraphOnLinebreak}.
	 * 
	 */
	setInsertParagraphOnLinebreak : vjo.NEEDS_IMPL,


	/**
	 * Sets the current selection content to italic font style
	 * 
	 */
	setItalic : vjo.NEEDS_IMPL,


	/**
	 * Center-justifies the current selection
	 * 
	 */
	setJustifyCenter : vjo.NEEDS_IMPL,


	/**
	 * Full-justifies the current selection
	 * 
	 */
	setJustifyFull : vjo.NEEDS_IMPL,


	/**
	 * Left-justifies the current selection
	 * 
	 */
	setJustifyLeft : vjo.NEEDS_IMPL,


	/**
	 * Right-justifies the current selection
	 * 
	 */
	setJustifyRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property messengerMode.
	 * 
	 * For further details take a look at the property definition: {@link #messengerMode}.
	 * 
	 */
	setMessengerMode : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property postProcess.
	 * 
	 * For further details take a look at the property definition: {@link #postProcess}.
	 * 
	 */
	setPostProcess : vjo.NEEDS_IMPL,


	/**
	 * Sets the current selection content to strikethrough font style
	 * 
	 */
	setStrikeThrough : vjo.NEEDS_IMPL,


	/**
	 * Sets the current selection content to the specified background color
	 * 
	 */
	setTextBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the current selection content to the specified font color
	 * 
	 */
	setTextColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the current selection content to underline font style
	 * 
	 */
	setUnderline : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property useUndoRedo.
	 * 
	 * For further details take a look at the property definition: {@link #useUndoRedo}.
	 * 
	 */
	setUseUndoRedo : vjo.NEEDS_IMPL,


	/**
	 * Setting the value of the editor if it&#8217;s initialized
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 */
	tabFocus : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property insertLinebreakOnCtrlEnter.
	 * 
	 * For further details take a look at the property definition: {@link #insertLinebreakOnCtrlEnter}.
	 * 
	 */
	toggleInsertLinebreakOnCtrlEnter : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property insertParagraphOnLinebreak.
	 * 
	 * For further details take a look at the property definition: {@link #insertParagraphOnLinebreak}.
	 * 
	 */
	toggleInsertParagraphOnLinebreak : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property messengerMode.
	 * 
	 * For further details take a look at the property definition: {@link #messengerMode}.
	 * 
	 */
	toggleMessengerMode : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property useUndoRedo.
	 * 
	 * For further details take a look at the property definition: {@link #useUndoRedo}.
	 * 
	 */
	toggleUseUndoRedo : vjo.NEEDS_IMPL,


	/**
	 * Undo last operation
	 * 
	 */
	undo : vjo.NEEDS_IMPL
})
.endType();