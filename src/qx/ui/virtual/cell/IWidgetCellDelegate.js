/**
 * Objects, which are used as delegates for {@link qx.ui.virtual.cell.WidgetCell} may
 * implement any of the methods described in this interface. The delegate does
 * not need implement all of the methods of this interface. If a method is not
 * implemented the {@link qx.ui.virtual.cell.WidgetCell} provides a default implementation.
 * 
 * Note: This interface is meant to document the delegate but should not be
 * listed in the implement key of a class unless all methods are
 * really implemented.
 */
//>public
vjo.itype('qx.ui.virtual.cell.IWidgetCellDelegate')
.protos({
	/**
	 * Creates a Widget which will be used for rendering.
	 * 
	 */
	createWidget : vjo.NEEDS_IMPL
})
.endType();