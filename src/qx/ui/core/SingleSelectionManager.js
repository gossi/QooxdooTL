/**
 * Responsible for the single selection management.
 * 
 * The class manage a list of {@link qx.ui.core.Widget} which are returned from
 * {@link qx.ui.core.ISingleSelectionProvider#getItems}.
 */
//>internal
vjo.ctype('qx.ui.core.SingleSelectionManager')
.inherits('qx.core.Object')
.protos({
	/**
	 * Construct the single selection manager.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property allowEmptySelection.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	__applyAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Checks if passed element is a child element.
	 * 
	 */
	__isChildElement : vjo.NEEDS_IMPL,


	/**
	 * Set selected element.
	 * 
	 * If passes value is null, the selection will be reseted.
	 * 
	 */
	__setSelected : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowEmptySelection.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	getAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Returns all elements which are selectable.
	 * 
	 */
	getSelectables : vjo.NEEDS_IMPL,


	/**
	 * Returns the current selected element.
	 * 
	 */
	getSelected : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowEmptySelection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	initAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property allowEmptySelection equals true.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	isAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Return true if the passed element is selected.
	 * 
	 */
	isSelected : vjo.NEEDS_IMPL,


	/**
	 * Returns true if selection is empty.
	 * 
	 */
	isSelectionEmpty : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowEmptySelection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	resetAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Reset the current selection. If {@link #allowEmptySelection} is set to
	 * true the first element will be selected.
	 * 
	 */
	resetSelected : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowEmptySelection.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	setAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Selects the passed element.
	 * 
	 */
	setSelected : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property allowEmptySelection.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	toggleAllowEmptySelection : vjo.NEEDS_IMPL
})
.endType();