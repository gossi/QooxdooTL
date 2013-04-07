/**
 * The provider implements the {@link qx.ui.virtual.core.IWidgetCellProvider} API,
 * which can be used as delegate for the widget cell rendering and it
 * provides a API to bind the model with the rendered item.
 */
//>internal
vjo.ctype('qx.ui.list.provider.WidgetProvider')
.inherits('qx.core.Object')
.satisfies(['qx.ui.virtual.core.IWidgetCellProvider','qx.ui.list.provider.IListProvider'])
.mixin('qx.ui.list.core.MWidgetController')
.protos({
	/**
	 * Creates the WidgetProvider
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper method to get the widget from the passed row.
	 * 
	 */
	__getWidgetFrom : vjo.NEEDS_IMPL,


	/**
	 * Helper method to update the states from a widget.
	 * 
	 */
	__updateStates : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the change delegate event.
	 * 
	 */
	_onChangeDelegate : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the created item widget event.
	 * 
	 */
	_onGroupItemCreated : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the created item widget event.
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