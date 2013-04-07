/**
 * Defines the callback for the single selection manager.
 */
//>internal
vjo.itype('qx.ui.core.ISingleSelectionProvider')
.protos({
	/**
	 * Returns the elements which are part of the selection.
	 * 
	 */
	getItems : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the given item is selectable.
	 * 
	 */
	isItemSelectable : vjo.NEEDS_IMPL
})
.endType();