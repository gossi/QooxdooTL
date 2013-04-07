/**
 * Mixin for the selection in the data binding controller.
 * It contains an selection property which can be manipulated.
 * Remember to call the method {@link #_addChangeTargetListener} on every
 * change of the target.
 * It is also important that the elements stored in the target e.g. ListItems
 * do have the corresponding model stored as user data under the &#8220;model&#8221; key.
 */
//>public
vjo.mtype('qx.data.controller.MSelection')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the change of the data array holding the selection.
	 * If a change is in the selection array, the selection update will be
	 * invoked.
	 * 
	 */
	__changeSelectionArray : vjo.NEEDS_IMPL,


	/**
	 * Returns the list item storing the given model in its model property.
	 * 
	 */
	__getSelectableForModel : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for selecting an item in the target. The item to select
	 * is defined by a given model item.
	 * 
	 */
	__selectItem : vjo.NEEDS_IMPL,


	/**
	 * Helper-method returning true, if the target supports multi selection.
	 * 
	 */
	__targetSupportsMultiSelection : vjo.NEEDS_IMPL,


	/**
	 * Helper-method returning true, if the target supports single selection.
	 * 
	 */
	__targetSupportsSingleSelection : vjo.NEEDS_IMPL,


	/**
	 * Helper method which should be called by the classes including this
	 * Mixin when the target changes.
	 * 
	 */
	_addChangeTargetListener : vjo.NEEDS_IMPL,


	/**
	 * Apply-method for setting a new selection array. Only the change listener
	 * will be removed from the old array and added to the new.
	 * 
	 */
	_applySelection : vjo.NEEDS_IMPL,


	/**
	 * Event handler for a change in the target selection.
	 * If the selection in the target has changed, the selected model objects
	 * will be found and added to the selection array.
	 * 
	 */
	_changeTargetSelection : vjo.NEEDS_IMPL,


	/**
	 * Helper-Method signaling that the internal changing of the targets
	 * selection is over.
	 * {@link #_startSelectionModification}
	 * 
	 */
	_endSelectionModification : vjo.NEEDS_IMPL,


	/**
	 * Helper-Method for checking the state of the selection modification.
	 * {@link #_startSelectionModification}
	 * {@link #_endSelectionModification}
	 * 
	 */
	_inSelectionModification : vjo.NEEDS_IMPL,


	/**
	 * Helper-Method signaling that currently the selection of the target is
	 * in change. That will block the change of the internal selection.
	 * {@link #_endSelectionModification}
	 * 
	 */
	_startSelectionModification : vjo.NEEDS_IMPL,


	/**
	 * Method for updating the selection. It checks for the case of single or
	 * multi selection and after that checks if the selection in the selection
	 * array is the same as in the target widget.
	 * 
	 */
	_updateSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL
})
.endType();