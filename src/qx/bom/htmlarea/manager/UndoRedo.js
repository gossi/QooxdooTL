/**
 * Decorator for CommandManager instance to implement Undo/Redo functionality
 */
//>public
vjo.ctype('qx.bom.htmlarea.manager.UndoRedo')
.inherits('qx.core.Object')
.protos({
	/**
	 * Constructor
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Add additional &#8220;Content&#8221; undo step if the last is no &#8220;Content&#8221; undo step.
	 * 
	 */
	__addAdditionalContentUndoStep : vjo.NEEDS_IMPL,


	/**
	 * Utility method to add an entry to the redoStack.
	 * 
	 */
	__addToRedoStack : vjo.NEEDS_IMPL,


	/**
	 * Utility method to add an entry to the undoStack.
	 * 
	 */
	__addToUndoStack : vjo.NEEDS_IMPL,


	/**
	 * Checks the next redo step with specific conditions
	 * 
	 */
	__checkForNextRedoStep : vjo.NEEDS_IMPL,


	/**
	 * Checks the next undo step with specific conditions
	 * 
	 */
	__checkForNextUndoStep : vjo.NEEDS_IMPL,


	/**
	 * Sometimes it is necessary to perform two redo steps at once. Helper method.
	 * 
	 */
	__executeExtraRedoStep : vjo.NEEDS_IMPL,


	/**
	 * Sometimes it&#8217;s necessary to perform two undo steps. Helper method to
	 * to keep the stacks in correct state.
	 * 
	 */
	__executeExtraUndoStep : vjo.NEEDS_IMPL,


	/**
	 * Fires the &#8220;undoRedoState&#8221; event to inform external components (like a toolbar)
	 * about the current state of the undo/redo.
	 * The event itself is fired from the HtmlArea instance and with a
	 * timeout to not interfere with the current key event.
	 * 
	 */
	__fireUndoRedoStateEvent : vjo.NEEDS_IMPL,


	/**
	 * Returns the current focused paragraph or null if the no paragraph
	 * is within the selection.
	 * 
	 */
	__getFocusedParagraph : vjo.NEEDS_IMPL,


	/**
	 * A content change which is handled as separate undo step is marked.
	 * 
	 */
	__markContentChange : vjo.NEEDS_IMPL,


	/**
	 * Wrapper method for redo execCommand to prevent any exceptions bubbling
	 * up to the user.
	 * 
	 */
	__performRedo : vjo.NEEDS_IMPL,


	/**
	 * Wrapper method for undo execCommand to prevent any exceptions bubbling
	 * up to the user.
	 * 
	 */
	__performUndo : vjo.NEEDS_IMPL,


	/**
	 * Populates the internal command list. This list determines
	 * which commands are handled directly by the undo manager and
	 * which commands are passed through (without added to the undo/redo
	 * history).
	 * 
	 */
	__populateCommandList : vjo.NEEDS_IMPL,


	/**
	 * Redo a browser-supported command.
	 * 
	 */
	__redoCommand : vjo.NEEDS_IMPL,


	/**
	 * Redo a content manipulation
	 * 
	 */
	__redoContent : vjo.NEEDS_IMPL,


	/**
	 * Redo a custom command.
	 * 
	 */
	__redoCustom : vjo.NEEDS_IMPL,


	/**
	 * Redo an internal change like resizing an image/add table cell
	 * 
	 */
	__redoInternal : vjo.NEEDS_IMPL,


	/**
	 * Undo a browser-supported command.
	 * 
	 */
	__undoCommand : vjo.NEEDS_IMPL,


	/**
	 * Undo content manipulation.
	 * 
	 */
	__undoContent : vjo.NEEDS_IMPL,


	/**
	 * Undo an internal change like resizing an image/add table cell
	 * 
	 */
	__undoInternal : vjo.NEEDS_IMPL,


	/**
	 * Adds the occurred changes to the undo history and
	 * sets a flag for the redo action.
	 * 
	 */
	__updateUndoStack : vjo.NEEDS_IMPL,


	/**
	 * Key press handler for the undo manager. Only acts on specific events which
	 * are important to the undo manager.
	 * 
	 */
	_handleKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Public API method to add an undo step
	 * 
	 */
	addUndoStep : vjo.NEEDS_IMPL,


	/**
	 * Executes the given command and collects (if necessary) undo information.
	 * 
	 */
	execute : vjo.NEEDS_IMPL,


	/**
	 * Helper method to get an undo object which is added to the undoStack
	 * 
	 */
	getUndoRedoObject : vjo.NEEDS_IMPL,


	/**
	 * Inserts a paragraph when hitting the &#8220;enter&#8221; key.
	 * Delegates to the real command manager instance.
	 * 
	 */
	insertParagraphOnLinebreak : vjo.NEEDS_IMPL,


	/**
	 * Service method to check if a redo operation is currently possible
	 * 
	 */
	isRedoPossible : vjo.NEEDS_IMPL,


	/**
	 * Service method to check if an undo operation is currently possible
	 * 
	 */
	isUndoPossible : vjo.NEEDS_IMPL,


	/**
	 * Redo facade method. The different types of redo (command/custom/content)
	 * are delegated to their specialized implementation.
	 * 
	 */
	redo : vjo.NEEDS_IMPL,


	/**
	 * Register a handler for a customized actionType. This handler methods
	 * (undo and redo) are called whenever the UndoManager encounters the
	 * given actionType to undo/redo the change.
	 * 
	 */
	registerHandler : vjo.NEEDS_IMPL,


	/**
	 * Set the document instance on which the UndoManager should perform his actions.
	 * 
	 */
	setContentDocument : vjo.NEEDS_IMPL,


	/**
	 * Undo facade method. The different types of undo (command/custom/content)
	 * are delegated to their specialized implementation.
	 * 
	 */
	undo : vjo.NEEDS_IMPL
})
.endType();