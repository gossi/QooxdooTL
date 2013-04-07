/**
 * Abstract base class for widget based cell renderer.
 */
//>public
vjo.ctype('qx.ui.virtual.cell.AbstractWidget')
.inherits('qx.core.Object')
.satisfies('qx.ui.virtual.cell.IWidgetCell')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns a LayoutItem from the pool, when the pool is empty
	 * a new LayoutItem is created.
	 * 
	 */
	__getWidgetFromPool : vjo.NEEDS_IMPL,


	/**
	 * Cleanup all LayoutItem and destroy them.
	 * 
	 */
	_cleanupPool : vjo.NEEDS_IMPL,


	/**
	 * Creates the widget instance.
	 * 
	 */
	_createWidget : vjo.NEEDS_IMPL
})
.endType();