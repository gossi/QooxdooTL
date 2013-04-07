/**
 * EXPERIMENTAL!
 * 
 * Objects, which are used as delegates for a virtual selection manager may
 * implement any of the methods described in this interface. The delegate does
 * not need implement all of the methods of this interface. If a method is not
 * implemented the selection manager provides a default implementation.
 * 
 * Note: This interface is meant to document the delegate but should not be
 * listed in the implement key of a class unless all methods are
 * really implemented.
 */
//>public
vjo.itype('qx.ui.virtual.selection.ISelectionDelegate')
.protos({
	/**
	 * Returns whether the given item is selectable. The type of the item
	 * depends on the concrete selection manager implementation. The
	 * {@link Row} and {@link Column} selection manager use row/column indexes
	 * as items. The {@link qx.ui.virtual.cell.Cell} uses cells as items. Cells are represented by
	 * a map containing row and column keys.
	 * 
	 * If this method is not implemented by the delegate all items are selectable.
	 * 
	 */
	isItemSelectable : vjo.NEEDS_IMPL,


	/**
	 * Update the style (appearance) of the given item.
	 * 
	 */
	styleSelectable : vjo.NEEDS_IMPL
})
.endType();