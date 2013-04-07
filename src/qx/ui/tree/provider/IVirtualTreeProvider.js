/**
 * This interface needs to implemented from all {@link qx.ui.tree.VirtualTree}
 * providers.
 */
//>internal
vjo.itype('qx.ui.tree.provider.IVirtualTreeProvider')
.protos({
	/**
	 * Creates a layer for node and leaf rendering.
	 * 
	 */
	createLayer : vjo.NEEDS_IMPL,


	/**
	 * Creates a renderer for rendering.
	 * 
	 */
	createRenderer : vjo.NEEDS_IMPL,


	/**
	 * Returns if the passed row can be selected or not.
	 * 
	 */
	isSelectable : vjo.NEEDS_IMPL,


	/**
	 * Sets the name of the property, where the children are stored in the model.
	 * 
	 */
	setChildProperty : vjo.NEEDS_IMPL,


	/**
	 * Sets the name of the property, where the value for the tree folders label
	 * is stored in the model classes.
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