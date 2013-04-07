/**
 * The provider implements the {@link qx.ui.virtual.core.IWidgetCellProvider}
 * API, which can be used as delegate for the widget cell rendering and it
 * provides a API to bind the model with the rendered item.
 */
//>internal
vjo.ctype('qx.ui.tree.provider.WidgetProvider')
.inherits('qx.core.Object')
.satisfies(['qx.ui.virtual.core.IWidgetCellProvider','qx.ui.tree.provider.IVirtualTreeProvider'])
.mixin('qx.ui.tree.core.MWidgetController')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Handler when a node changes opened or closed state.
	 * 
	 */
	__onOpenChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the change delegate event.
	 * 
	 */
	_onChangeDelegate : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the created item&#8217;s.
	 * 
	 */
	_onItemCreated : vjo.NEEDS_IMPL,


	/**
	 * Calls the delegate onPool method when it is used in the
	 * {@link #delegate} property.
	 * 
	 */
	_onPool : vjo.NEEDS_IMPL,


	/**
	 * Styles a selected item.
	 * 
	 */
	_styleSelectabled : vjo.NEEDS_IMPL,


	/**
	 * Styles a not selected item.
	 * 
	 */
	_styleUnselectabled : vjo.NEEDS_IMPL
})
.endType();