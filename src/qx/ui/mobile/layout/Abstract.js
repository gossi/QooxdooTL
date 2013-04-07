/**
 * Base class for all layout managers.
 * 
 * Custom layout managers must derive from
 * this class and implement the methods {@link #_getCssClasses},
 * {@link #_getSupportedChildLayoutProperties} and {@link #_setLayoutProperty}.
 */
//>public abstract
vjo.ctype('qx.ui.mobile.layout.Abstract')
.inherits('qx.core.Object')
.protos({
	/**
	 * Returns the child layout property cache.
	 * 
	 */
	__getChildLayoutPropertyCache : vjo.NEEDS_IMPL,


	/**
	 * Adds a property to the cache. Needed when the layout is not yet
	 * connected with the widget.
	 * 
	 */
	_addCachedProperty : vjo.NEEDS_IMPL,


	/**
	 * Adds a child layout property to the cache. When the value is
	 * null the property will be deleted from the cache.
	 * 
	 */
	_addPropertyToChildLayoutCache : vjo.NEEDS_IMPL,


	/**
	 * Returns a child layout property value.
	 * 
	 */
	_getChildLayoutPropertyValue : vjo.NEEDS_IMPL,


	/**
	 * Returns the css classes in an array that the layout is using.
	 * 
	 */
	_getCssClasses : vjo.NEEDS_IMPL,


	/**
	 * Returns the supported child layout properites. Needed to validate
	 * the incoming layout properites. Override this function in your implementation.
	 * 
	 */
	_getSupportedChildLayoutProperties : vjo.NEEDS_IMPL,


	/**
	 * Abstracts method. Override this in your implementation.
	 * The function is called for all given layout properties once.
	 * 
	 */
	_setLayoutProperty : vjo.NEEDS_IMPL,


	/**
	 * Connects the layout to a given child widget. Can be overridden in a concrete
	 * interface implementation.
	 * 
	 */
	connectToChildWidget : vjo.NEEDS_IMPL,


	/**
	 * This method is called by the widget to connect the widget with the layout.
	 * 
	 */
	connectToWidget : vjo.NEEDS_IMPL,


	/**
	 * Disconnects the layout from a given child widget. Can be overridden in a concrete
	 * interface implementation.
	 * 
	 */
	disconnectFromChildWidget : vjo.NEEDS_IMPL,


	/**
	 * Sets the given layout properties to a widget.
	 * 
	 */
	setLayoutProperties : vjo.NEEDS_IMPL,


	/**
	 * Updates the layout. Method is called by a widget, when it changes its state.
	 * 
	 */
	updateLayout : vjo.NEEDS_IMPL
})
.endType();