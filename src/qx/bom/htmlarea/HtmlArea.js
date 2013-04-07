/**
 * Low-level Rich text editor which can be used by connecting it to an
 * existing DOM element (DIV node).
 * This component does not contain any {@link qx.ui} code resulting in a
 * smaller footprint.
 * 
 * Optimized for the use at a traditional webpage.
 */
//>public
vjo.ctype('qx.bom.htmlarea.HtmlArea')
.inherits('qx.core.Object')
.protos({
	/**
	 * Constructor
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Add focus event listeners.
	 * 
	 */
	__addFocusListeners : vjo.NEEDS_IMPL,


	/**
	 * Add key event listeners to the body element
	 * 
	 */
	__addKeyListeners : vjo.NEEDS_IMPL,


	/**
	 * Adds all needed eventlistener
	 * 
	 */
	__addListeners : vjo.NEEDS_IMPL,


	/**
	 * Add mouse event listeners.
	 * 
	 */
	__addMouseListeners : vjo.NEEDS_IMPL,


	/**
	 * Helper method which checks if content is available and if not sets the default content.
	 * 
	 */
	__checkForContentAndSetDefaultContent : vjo.NEEDS_IMPL,


	/**
	 * Create a &#8220;DIV&#8221; element which can be added to the document.
	 * This element is the container for the editable iframe element.
	 * 
	 */
	__connectToDomElement : vjo.NEEDS_IMPL,


	/**
	 * Returns a range for the current selection
	 * 
	 */
	__createRange : vjo.NEEDS_IMPL,


	/**
	 * Helper method to create an object which acts like a command manager
	 * instance to collect all commands which are executed BEFORE the command
	 * manager instance is ready.
	 * 
	 */
	__createStackCommandManager : vjo.NEEDS_IMPL,


	/**
	 * Examines the current context of the cursor (e.g. over bold text).
	 * This method will dispatch the data event &#8220;cursorContext&#8221; which holds a map
	 * with different keys like bold, italic, underline etc.
	 * The main purpose for this event is to be able to set the states of your toolbar
	 * buttons so you can e.g. visualize that the cursor is currently over bold text.
	 * 
	 * The possible values are
	 * -1 = command is not possible at the moment. Used to disable the corresponding buttons
	 *  0 = command is possible at the moment. Used to enable the corresponding buttons (e.g. bold/italic/underline etc.)
	 *  1 = cursor is over content which already received that command. Used to to activate the corresponding buttons (e.g. bold/italic/underline etc.)
	 * 
	 */
	__examineCursorContext : vjo.NEEDS_IMPL,


	/**
	 * Executes a method and prevent default
	 * 
	 */
	__executeHotkey : vjo.NEEDS_IMPL,


	/**
	 * Generates the default content and inserts the given string
	 * 
	 */
	__generateDefaultContent : vjo.NEEDS_IMPL,


	/**
	 * Returns the document skeleton with content usable for the editor
	 * 
	 */
	__generateDocumentSkeleton : vjo.NEEDS_IMPL,


	/**
	 * Returns the CSS styles which should be exported as a CSS string.
	 * This prevents that styles which are only for internal use appear in the
	 * result (e.g. overflow settings).
	 * 
	 */
	__getBodyStyleToExport : vjo.NEEDS_IMPL,


	/**
	 * Returns style attribute as string of a given element
	 * 
	 */
	__getElementStyleAsString : vjo.NEEDS_IMPL,


	/**
	 * Browser-specific implementation to get the current range contents
	 * 
	 */
	__getRangeContents : vjo.NEEDS_IMPL,


	/**
	 * Initial content which is written dynamically into the iframe&#8217;s document
	 * 
	 */
	__initDocumentSkeletonParts : vjo.NEEDS_IMPL,


	/**
	 * Helper function which inserts an linebreak at the selection.
	 * 
	 */
	__insertWebkitLineBreak : vjo.NEEDS_IMPL,


	/**
	 * Checks whether content is available
	 * 
	 */
	__isContentAvailable : vjo.NEEDS_IMPL,


	/**
	 * Check the selection focus node if it&#8217;s an element.
	 * Used a paragraph handling &#8211; if the focus node is an
	 * element it&#8217;s not necessary to intercept the paragraph handling.
	 * 
	 * ATTENTION: Currently only implemented for Gecko
	 * 
	 */
	__isFocusNodeAnElement : vjo.NEEDS_IMPL,


	/**
	 * Checks if the cursor is within a word boundary.
	 * ATTENTION: Currently only implemented for Gecko
	 * 
	 */
	__isSelectionWithinWordBoundary : vjo.NEEDS_IMPL,


	/**
	 * Process the stacked commands if available.
	 * This feature is necessary at startup when the command manager is yet
	 * not ready to execute the commands after the initialization.
	 * 
	 */
	__processStackedCommands : vjo.NEEDS_IMPL,


	/**
	 * Opens a new document and sets the content (if available)
	 * 
	 */
	__renderContent : vjo.NEEDS_IMPL,


	/**
	 * Called when the iframes is loaded and the HtmlArea is in the &#8220;invalid&#8221;
	 * state. Re-initializes the HtmlArea and fires the {@link qx.bom.htmlarea.HtmlArea#readyAfterInvalid}
	 * event to offer a time moment for the application developer to execute
	 * commands after the re-location.
	 * 
	 * Only implemented for Gecko browser.
	 * 
	 */
	__resetEditorToValidState : vjo.NEEDS_IMPL,


	/**
	 * Resets the content and selects the default focus node
	 * 
	 */
	__resetToDefaultContentAndSelect : vjo.NEEDS_IMPL,


	/**
	 * Sets the designMode of the document
	 * 
	 */
	__setDesignMode : vjo.NEEDS_IMPL,


	/**
	 * Wrapper method to examine the current context
	 * 
	 */
	__startExamineCursorContext : vjo.NEEDS_IMPL,


	/**
	 * should be removed if someone find a better way to ensure that the document
	 * is ready in IE6
	 * 
	 */
	__waitForDocumentReady : vjo.NEEDS_IMPL,


	/**
	 * Adds the &#8220;load&#8221; listener to the iframe.
	 * 
	 */
	_addIframeLoadListener : vjo.NEEDS_IMPL,


	/**
	 * Cleaning up a given word (removing HTML code)
	 * 
	 */
	_cleanupWord : vjo.NEEDS_IMPL,


	/**
	 * Creates an iframe element with the given URI and adds it to
	 * the container element.
	 * 
	 */
	_createAndAddIframe : vjo.NEEDS_IMPL,


	/**
	 * *** IN DEVELOPMENT! ***
	 * Helper method for returning all text nodes
	 * 
	 */
	_fetchTextNodes : vjo.NEEDS_IMPL,


	/**
	 * Returns the document of the iframe.
	 * 
	 */
	_getIframeDocument : vjo.NEEDS_IMPL,


	/**
	 * Returns the window of the iframe.
	 * 
	 */
	_getIframeWindow : vjo.NEEDS_IMPL,


	/**
	 * Eventlistener for blur events
	 * 
	 */
	_handleBlurEvent : vjo.NEEDS_IMPL,


	/**
	 * If the property {@link #nativeContextMenu} is set to false this handler method
	 * stops the browser from displaying the native context menu and fires an own event for the
	 * application developers to position their own (qooxdoo) contextmenu.
	 * 
	 * Fires a data event with the following data:
	 * 
	 * 
	 * x &#8211; absolute x coordinate
	 *   * y &#8211; absolute y coordinate
	 *   * relX &#8211; relative x coordinate
	 *   * relY &#8211; relative y coordinate
	 *   * target &#8211; DOM element target
	 * 
	 * 
	 * Otherwise the native browser contextmenu is shown as usual.
	 * 
	 */
	_handleContextMenuEvent : vjo.NEEDS_IMPL,


	/**
	 * Eventlistener for focus events
	 * 
	 */
	_handleFocusEvent : vjo.NEEDS_IMPL,


	/**
	 * Eventlistener for focusout events &#8211; dispatched before &#8220;blur&#8221;
	 * 
	 */
	_handleFocusOutEvent : vjo.NEEDS_IMPL,


	/**
	 * All keyPress events are delegated to this method
	 * 
	 */
	_handleKeyPress : vjo.NEEDS_IMPL,


	/**
	 * All keyUp events are delegated to this method
	 * 
	 */
	_handleKeyUp : vjo.NEEDS_IMPL,


	/**
	 * Eventlistener for all mouse events.
	 * This method is invoked for mshtml on &#8220;click&#8221; events and
	 * on &#8220;mouseup&#8221; events for all others.
	 * 
	 */
	_handleMouseUpOnBody : vjo.NEEDS_IMPL,


	/**
	 * Checks if the user has performed a selection and released  the mouse
	 * button outside of the editor. If so the body element is re-activated
	 * to receive the keypress events correctly.
	 * 
	 */
	_handleMouseUpOnDocument : vjo.NEEDS_IMPL,


	/**
	 * Is executed when event &#8220;load&#8221; is fired
	 * 
	 */
	_loaded : vjo.NEEDS_IMPL,


	/**
	 * Initializes the command manager, sets the document editable, renders
	 * the content and adds a needed event listeners when the document is ready
	 * for it.
	 * After the successful startup the &#8220;ready&#8221; event is thrown.
	 * 
	 */
	_onDocumentIsReady : vjo.NEEDS_IMPL,


	/**
	 * Convenient function to select an element. The &#8220;set&#8221; method of qx.bom.Selection is not
	 * sufficient here. It does select the element, but does not show the caret.
	 * 
	 */
	_selectElement : vjo.NEEDS_IMPL,


	/**
	 * Can be used to set the user focus to the content. Also used when the &#8220;TAB&#8221; key is used to
	 * tab into the component. This method is also called by the {@link qx.ui.embed.HtmlArea} widget.
	 * 
	 */
	focusContent : vjo.NEEDS_IMPL,


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
	 * Returns the window of the iframe
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
	 * Returns the (computed) value of the property nativeContextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	getNativeContextMenu : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property nativeContextMenu
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	initNativeContextMenu : vjo.NEEDS_IMPL,


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
	 * Sets the editor for all gecko browsers into the state &#8220;invalid&#8221; to be
	 * able to re-initialize the editor with the next load of the iframe.
	 * 
	 * This &#8220;invalid&#8221; state is necessary whenever the whole HtmlArea high-level
	 * widget is moved around to another container.
	 * 
	 * Only implemented for Gecko browser.
	 * 
	 */
	invalidateEditor : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property nativeContextMenu equals true.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	isNativeContextMenu : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property nativeContextMenu.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	resetNativeContextMenu : vjo.NEEDS_IMPL,


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
	 * Saves the current range to let the next command operate on this range.
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
	 * Sets the user value of the property nativeContextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	setNativeContextMenu : vjo.NEEDS_IMPL,


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
	 * Setting the value of the editor
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


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
	 * Toggles the (computed) value of the boolean property nativeContextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	toggleNativeContextMenu : vjo.NEEDS_IMPL,


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