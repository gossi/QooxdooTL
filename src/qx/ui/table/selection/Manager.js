/**
 * A selection manager. This is a helper class that handles all selection
 * related events and updates a SelectionModel.
 * 
 * Widgets that support selection should use this manager. This way the only
 * thing the widget has to do is mapping mouse or key events to indexes and
 * call the corresponding handler method.
 */
//>public
vjo.ctype('qx.ui.table.selection.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Handles a select event.
	 * 
	 */
	_handleSelectEvent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectionModel.
	 * 
	 * For further details take a look at the property definition: {@link #selectionModel}.
	 * 
	 */
	getSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Handles the mouse click event.
	 * 
	 */
	handleClick : vjo.NEEDS_IMPL,


	/**
	 * Handles the mouse down event.
	 * 
	 */
	handleMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Handles the mouse up event.
	 * 
	 */
	handleMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Handles a key down event that moved the focus (E.g. up, down, home, end, ...).
	 * 
	 */
	handleMoveKeyDown : vjo.NEEDS_IMPL,


	/**
	 * Handles the key down event that is used as replacement for mouse clicks
	 * (Normally space).
	 * 
	 */
	handleSelectKeyDown : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selectionModel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selectionModel}.
	 * 
	 */
	initSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selectionModel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selectionModel}.
	 * 
	 */
	resetSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectionModel.
	 * 
	 * For further details take a look at the property definition: {@link #selectionModel}.
	 * 
	 */
	setSelectionModel : vjo.NEEDS_IMPL
})
.endType();