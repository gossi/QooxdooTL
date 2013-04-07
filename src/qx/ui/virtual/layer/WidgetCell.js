/**
 * EXPERIMENTAL!
 * 
 * The WidgetCell layer renders each cell with a qooxdoo widget. The concrete
 * widget instance for each cell is provided by a cell provider.
 */
//>public
vjo.ctype('qx.ui.virtual.layer.WidgetCell')
.inherits('qx.ui.virtual.layer.Abstract')
.mixin('qx.ui.core.MChildrenHandling')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Activates one of the still not empty items.
	 * 
	 */
	_activateNotEmptyChild : vjo.NEEDS_IMPL,


	/**
	 */
	_fullUpdate : vjo.NEEDS_IMPL,


	/**
	 * Get the spacer widget, for empty cells
	 * 
	 */
	_getSpacer : vjo.NEEDS_IMPL,


	/**
	 */
	_updateLayerWindow : vjo.NEEDS_IMPL,


	/**
	 * Returns the widget used to render the given cell. May return null if the
	 * cell isn&#8217;t rendered currently rendered.
	 * 
	 */
	getRenderedCellWidget : vjo.NEEDS_IMPL
})
.endType();