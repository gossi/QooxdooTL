/**
 * EXPERIMENTAL!
 * 
 * A widget cell provider provides the {@link qx.ui.virtual.layer.WidgetCell}
 * with configured widgets to render the cells and pools/releases unused
 * cell widgets.
 */
//>public
vjo.itype('qx.ui.virtual.core.IWidgetCellProvider')
.protos({
	/**
	 * This method returns the configured cell for the given cell. The return
	 * value may be null to indicate that the cell should be empty.
	 * 
	 */
	getCellWidget : vjo.NEEDS_IMPL,


	/**
	 * Release the given cell widget. Either pool or destroy the widget.
	 * 
	 */
	poolCellWidget : vjo.NEEDS_IMPL
})
.endType();