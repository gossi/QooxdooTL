/**
 * Provides a list item element for a certain row and its data.
 * Uses the {@link qx.ui.mobile.list.renderer.Default} list item renderer as a
 * default renderer when no other renderer is given by the {@link qx.ui.mobile.list.List#delegate}.
 */
//>public
vjo.ctype('qx.ui.mobile.list.provider.Provider')
.inherits('qx.core.Object')
.protos({
	/**
	 * Applies changes of the property value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	_applyDelegate : vjo.NEEDS_IMPL,


	/**
	 * Configure the list item renderer with the given data.
	 * 
	 */
	_configureItem : vjo.NEEDS_IMPL,


	/**
	 * Creates an instance of the item renderer to use. When no delegate method
	 * is given the function will return an instance of {@link qx.ui.mobile.list.renderer.Default}.
	 * 
	 */
	_createItemRenderer : vjo.NEEDS_IMPL,


	/**
	 * Returns the set item renderer.
	 * 
	 */
	_getItemRenderer : vjo.NEEDS_IMPL,


	/**
	 * Sets the item renderer.
	 * 
	 */
	_setItemRenderer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	getDelegate : vjo.NEEDS_IMPL,


	/**
	 * Returns the list item element for a given row.
	 * 
	 */
	getItemElement : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property delegate
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	initDelegate : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property delegate.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	resetDelegate : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	setDelegate : vjo.NEEDS_IMPL
})
.endType();