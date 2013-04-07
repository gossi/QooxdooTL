/**
 * EXPERIMENTAL!
 * 
 * An extended WidgetCell layer, which adds the possibility to specify row and
 * column spans for specific cells.
 */
//>public
vjo.ctype('qx.ui.virtual.layer.WidgetCellSpan')
.inherits('qx.ui.virtual.layer.Abstract')
.mixin('qx.ui.core.MChildrenHandling')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Get the cell provider for the non spanning cells
	 * 
	 */
	__getCellProviderForNonSpanningCells : vjo.NEEDS_IMPL,


	/**
	 * Updates the fields _cells, _bounds and
	 * _spanMap according to the given grid window.
	 * 
	 */
	__updateCellSpanData : vjo.NEEDS_IMPL,


	/**
	 * Updates the widget in spanned cells.
	 * 
	 * Note: The method {@link #__updateCellSpanData} must be called before
	 * this method is called:
	 * 
	 */
	__updateCellSpanWidgets : vjo.NEEDS_IMPL,


	/**
	 */
	_fullUpdate : vjo.NEEDS_IMPL,


	/**
	 */
	_updateLayerWindow : vjo.NEEDS_IMPL,


	/**
	 * Returns the widget used to render the given cell. May return null if the
	 * cell isn&#8217;t rendered currently rendered.
	 * 
	 */
	getRenderedCellWidget : vjo.NEEDS_IMPL,


	/**
	 * Set the row and column span for a specific cell
	 * 
	 */
	setCellSpan : vjo.NEEDS_IMPL
})
.endType();