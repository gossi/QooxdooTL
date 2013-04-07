/**
 * Implements the different selection modes single, multi, additive and one
 * selection with there drag and quick selection.
 * 
 * Example how to use selection:
 * 
 * 
 * var rawData = [];
 * for (var i = 0; i < 2500; i++) {
 *  rawData[i] = "Item No " + i;
 * }
 * 
 * var model = qx.data.marshal.Json.createModel(rawData);
 * var list = new qx.ui.list.List(model);
 * 
 * // Pre-Select "Item No 20"
 * list.getSelection().push(model.getItem(20));
 * 
 * // log change selection
 * list.getSelection().addListener("change", function(e) {
 *   this.debug("Selection: " + list.getSelection().getItem(0));
 * }, this);

 */
//>internal
vjo.mtype('qx.ui.virtual.selection.MModel')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Checks whether the local and the manager selection is equals.
	 * 
	 */
	__isSelectionEquals : vjo.NEEDS_IMPL,


	/**
	 * Replace the current selection with the passed selection Array.
	 * 
	 */
	__replaceSelection : vjo.NEEDS_IMPL,


	/**
	 * Synchronized the selection form the manager with the local one.
	 * 
	 */
	__synchronizeSelection : vjo.NEEDS_IMPL,


	/**
	 * Helper Method to select default item.
	 * 
	 */
	_applyDefaultSelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property dragSelection.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	_applyDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property quickSelection.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	_applyQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	_applySelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selectionMode.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	_applySelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Initialize the selection manager with his delegate.
	 * 
	 */
	_initSelectionManager : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the internal selection change {@link #selection}.
	 * 
	 */
	_onChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the selection change from the _manager.
	 * 
	 */
	_onManagerChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Method to update the selection, this method can be used when the model has
	 * changes.
	 * 
	 */
	_updateSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property dragSelection.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	getDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property quickSelection.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	getQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectionMode.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	getSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property dragSelection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	initDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property quickSelection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	initQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	initSelection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selectionMode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	initSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property dragSelection equals true.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	isDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property quickSelection equals true.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	isQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property dragSelection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	resetDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property quickSelection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	resetQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	resetSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selectionMode.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	resetSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property dragSelection.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	setDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property quickSelection.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	setQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectionMode.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	setSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property dragSelection.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	toggleDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property quickSelection.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	toggleQuickSelection : vjo.NEEDS_IMPL
})
.endType();