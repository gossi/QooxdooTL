/**
 * This interface needs to implemented from all {@link qx.ui.list.List} providers.
 */
//>internal
vjo.itype('qx.ui.list.provider.IListProvider')
.protos({
	/**
	 * Creates a renderer for group rendering.
	 * 
	 */
	createGroupRenderer : vjo.NEEDS_IMPL,


	/**
	 * Creates a renderer for item rendering.
	 * 
	 */
	createItemRenderer : vjo.NEEDS_IMPL,


	/**
	 * Creates a layer for item and group rendering.
	 * 
	 */
	createLayer : vjo.NEEDS_IMPL,


	/**
	 * Returns if the passed row can be selected or not.
	 * 
	 */
	isSelectable : vjo.NEEDS_IMPL,


	/**
	 * Remove all bindings from all bounded items.
	 * 
	 */
	removeBindings : vjo.NEEDS_IMPL,


	/**
	 * Delegation object, which can have one or more functions defined by the
	 * {@link qx.ui.list.core.IListDelegate} interface.
	 * 
	 */
	setDelegate : vjo.NEEDS_IMPL,


	/**
	 * A map containing the options for the icon binding. The possible keys
	 * can be found in the {@link qx.data.SingleValueBinding} documentation.
	 * 
	 */
	setIconOptions : vjo.NEEDS_IMPL,


	/**
	 * The path to the property which holds the information that should be
	 * shown as an icon. This is only needed if objects are stored in the model
	 * and if the icon should be shown.
	 * 
	 */
	setIconPath : vjo.NEEDS_IMPL,


	/**
	 * A map containing the options for the label binding. The possible keys
	 * can be found in the {@link qx.data.SingleValueBinding} documentation.
	 * 
	 */
	setLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * The path to the property which holds the information that should be
	 * shown as a label. This is only needed if objects are stored in the model.
	 * 
	 */
	setLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Styles a selected item.
	 * 
	 */
	styleSelectabled : vjo.NEEDS_IMPL,


	/**
	 * Styles a not selected item.
	 * 
	 */
	styleUnselectabled : vjo.NEEDS_IMPL
})
.endType();