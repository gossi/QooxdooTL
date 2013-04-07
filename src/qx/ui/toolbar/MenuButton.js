/**
 * The button to fill the menubar
 */
//>public
vjo.ctype('qx.ui.toolbar.MenuButton')
.inherits('qx.ui.menubar.Button')
.protos({
	/**
	 * Applies changes of the property value of the property showArrow.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	_applyShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	_applyVisibility : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showArrow.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	getShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showArrow
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	initShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showArrow equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	isShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showArrow.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	resetShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showArrow.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	setShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showArrow.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	toggleShowArrow : vjo.NEEDS_IMPL
})
.endType();