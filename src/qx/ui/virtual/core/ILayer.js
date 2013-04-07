/**
 * EXPERIMENTAL!
 * 
 * A layer is responsible to render one aspect of a virtual pane. The pane tells
 * each layer to render/update a specific window of the virtual grid.
 */
//>public
vjo.itype('qx.ui.virtual.core.ILayer')
.protos({
	/**
	 * Do a complete update of the layer. All cached data should be discarded.
	 * This method is called e.g. after changes to the grid geometry
	 * (row/column sizes, row/column count, ...).
	 * 
	 * Note: This method can only be called after the widgets initial appear
	 * event has been fired because it may work with the widget&#8217;s DOM elements.
	 * 
	 */
	fullUpdate : vjo.NEEDS_IMPL,


	/**
	 * Update the layer to reflect changes in the data the layer displays.
	 * 
	 */
	updateLayerData : vjo.NEEDS_IMPL,


	/**
	 * Update the layer to display a different window of the virtual grid.
	 * This method is called if the pane is scrolled, resized or cells
	 * are prefetched. The implementation can assume that no other grid
	 * data has been changed since the last &#8220;fullUpdate&#8221; of &#8220;updateLayerWindow&#8221;
	 * call.
	 * 
	 * Note: This method can only be called after the widgets initial appear
	 * event has been fired because it may work with the widget&#8217;s DOM elements.
	 * 
	 */
	updateLayerWindow : vjo.NEEDS_IMPL
})
.endType();