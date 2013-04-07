/**
 * Each object, which should support single selection have to
 * implement this interface.
 */
//>public
vjo.itype('qx.ui.core.ISingleSelection')
.protos({
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