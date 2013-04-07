/**
 * Base class for all layout managers.
 * 
 * Custom layout manager must derive from
 * this class and implement the methods {@link #invalidateLayoutCache},
 * {@link #renderLayout} and {@link #getSizeHint}.
 */
//>public abstract
vjo.ctype('qx.ui.layout.Abstract')
.inherits('qx.core.Object')
.protos({
	/**
	 * Indicate that the layout has layout changed and propagate this information
	 * up the widget hierarchy.
	 * 
	 * Also a generic property apply method for all layout relevant properties.
	 * 
	 */
	_applyLayoutChange : vjo.NEEDS_IMPL,


	/**
	 * Remove all currently visible separators
	 * 
	 */
	_clearSeparators : vjo.NEEDS_IMPL,


	/**
	 * This computes the size hint of the layout and returns it.
	 * 
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 * Returns the list of all layout relevant children.
	 * 
	 */
	_getLayoutChildren : vjo.NEEDS_IMPL,


	/**
	 * Return the widget that is this layout is responsible for.
	 * 
	 */
	_getWidget : vjo.NEEDS_IMPL,


	/**
	 * Renders a separator between two children
	 * 
	 */
	_renderSeparator : vjo.NEEDS_IMPL,


	/**
	 * This method is called by the widget to connect the widget with the layout.
	 * 
	 */
	connectToWidget : vjo.NEEDS_IMPL,


	/**
	 * If layout wants to trade height for width it has to implement this
	 * method and return the preferred height if it is resized to
	 * the given width. This function returns null if the item
	 * do not support height for width.
	 * 
	 */
	getHeightForWidth : vjo.NEEDS_IMPL,


	/**
	 * Computes the layout dimensions and possible ranges of these.
	 * 
	 */
	getSizeHint : vjo.NEEDS_IMPL,


	/**
	 * Whether the layout manager supports height for width.
	 * 
	 */
	hasHeightForWidth : vjo.NEEDS_IMPL,


	/**
	 * This method is called, on each child &#8220;add&#8221; and &#8220;remove&#8221; action and
	 * whenever the layout data of a child is changed. The method should be used
	 * to clear any children relevant cached data.
	 * 
	 */
	invalidateChildrenCache : vjo.NEEDS_IMPL,


	/**
	 * Invalidate all layout relevant caches. Automatically deletes the size hint.
	 * 
	 */
	invalidateLayoutCache : vjo.NEEDS_IMPL,


	/**
	 * Applies the children layout.
	 * 
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Verifies the value of a layout property.
	 * 
	 * Note: This method is only available in the debug builds.
	 * 
	 */
	verifyLayoutProperty : vjo.NEEDS_IMPL
})
.endType();