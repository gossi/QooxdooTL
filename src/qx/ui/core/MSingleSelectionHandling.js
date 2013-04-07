/**
 * This mixin links all methods to manage the single selection.
 * 
 * The class which includes the mixin has to implements two methods:
 * 
 * 
 * _getItems, this method has to return a Array
 *    of qx.ui.core.Widget that should be managed from the manager.
 * 
 * _isAllowEmptySelection, this method has to return a
 *    Boolean value for allowing empty selection or not.
 * 

 */
//>public
vjo.mtype('qx.ui.core.MSingleSelectionHandling')
.protos({
	/**
	 * Return the selection manager if it is already exists, otherwise creates
	 * the manager.
	 * 
	 */
	__getManager : vjo.NEEDS_IMPL,


	/**
	 * Event listener for changeSelected event on single
	 * selection manager.
	 * 
	 */
	_onChangeSelected : vjo.NEEDS_IMPL,


	/**
	 * Returns all elements which are selectable.
	 * 
	 */
	getSelectables : vjo.NEEDS_IMPL,


	/**
	 * Returns an array of currently selected items.
	 * 
	 * Note: The result is only a set of selected items, so the order can
	 * differ from the sequence in which the items were added.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Detects whether the given item is currently selected.
	 * 
	 */
	isSelected : vjo.NEEDS_IMPL,


	/**
	 * Whether the selection is empty.
	 * 
	 */
	isSelectionEmpty : vjo.NEEDS_IMPL,


	/**
	 * Clears the whole selection at once.
	 * 
	 */
	resetSelection : vjo.NEEDS_IMPL,


	/**
	 * Replaces current selection with the given items.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL
})
.endType();