/**
 * A widget cell renderer manages a pool of widgets to render cells in a
 * {@link qx.ui.virtual.layer.WidgetCell} layer.
 */
//>public
vjo.itype('qx.ui.virtual.cell.IWidgetCell')
.protos({
	/**
	 * Get a widget instance to render the cell
	 * 
	 */
	getCellWidget : vjo.NEEDS_IMPL,


	/**
	 * Release the given widget instance.
	 * 
	 * Either pool or dispose the widget.
	 * 
	 */
	pool : vjo.NEEDS_IMPL,


	/**
	 * Update the data the cell widget should display
	 * 
	 */
	updateData : vjo.NEEDS_IMPL,


	/**
	 * Update the states of the given widget.
	 * 
	 */
	updateStates : vjo.NEEDS_IMPL
})
.endType();