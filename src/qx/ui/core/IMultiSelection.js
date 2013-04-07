/**
 * Each object, which should support multiselection selection have to
 * implement this interface.
 */
//>public
vjo.itype('qx.ui.core.IMultiSelection')
.protos({
	/**
	 * Adds the given item to the existing selection.
	 * 
	 */
	addToSelection : vjo.NEEDS_IMPL,


	/**
	 * Removes the given item from the selection.
	 * 
	 * Use {@link qx.ui.core.ISingleSelection#resetSelection} when you
	 * want to clear the whole selection at once.
	 * 
	 */
	removeFromSelection : vjo.NEEDS_IMPL,


	/**
	 * Selects all items of the managed object.
	 * 
	 */
	selectAll : vjo.NEEDS_IMPL
})
.endType();