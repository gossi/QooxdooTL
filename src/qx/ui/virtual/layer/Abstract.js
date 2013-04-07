/**
 * EXPERIMENTAL!
 * 
 * Abstract base class for layers of a virtual pane.
 * 
 * This class queues calls to {@link #fullUpdate}, {@link #updateLayerWindow}
 * and {@link #updateLayerData} and only performs the absolute necessary
 * actions. Concrete implementation of this class must at least implement
 * the {@link #_fullUpdate} method. Additionally the two methods
 * {@link #_updateLayerWindow} and {@link #_updateLayerData} may be implemented
 * to increase the performance.
 */
//>public abstract
vjo.ctype('qx.ui.virtual.layer.Abstract')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.virtual.core.ILayer')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Do a complete update of the layer. All cached data should be discarded.
	 * This method is called e.g. after changes to the grid geometry
	 * (row/column sizes, row/column count, ...).
	 * 
	 * Note: It is guaranteed that this method is only called after the layer
	 * has been rendered.
	 * 
	 */
	_fullUpdate : vjo.NEEDS_IMPL,


	/**
	 * Update the layer to reflect changes in the data the layer displays.
	 * 
	 * Note: It is guaranteed that this method is only called after the layer
	 * has been rendered.
	 * 
	 */
	_updateLayerData : vjo.NEEDS_IMPL,


	/**
	 * Update the layer to display a different window of the virtual grid.
	 * This method is called if the pane is scrolled, resized or cells
	 * are prefetched. The implementation can assume that no other grid
	 * data has been changed since the last &#8220;fullUpdate&#8221; of &#8220;updateLayerWindow&#8221;
	 * call.
	 * 
	 * Note: It is guaranteed that this method is only called after the layer
	 * has been rendered.
	 * 
	 */
	_updateLayerWindow : vjo.NEEDS_IMPL,


	/**
	 * Get the sizes of the rendered column
	 * 
	 */
	getColumnSizes : vjo.NEEDS_IMPL,


	/**
	 * Get the first rendered column
	 * 
	 */
	getFirstColumn : vjo.NEEDS_IMPL,


	/**
	 * Get the first rendered row
	 * 
	 */
	getFirstRow : vjo.NEEDS_IMPL,


	/**
	 * Get the sizes of the rendered rows
	 * 
	 */
	getRowSizes : vjo.NEEDS_IMPL,


	/**
	 */
	syncWidget : vjo.NEEDS_IMPL
})
.endType();