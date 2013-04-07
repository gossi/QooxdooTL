/**
 * Root widget for the mobile application.
 */
//>public
vjo.ctype('qx.ui.mobile.core.Root')
.inherits('qx.ui.mobile.container.Composite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showScrollbarY.
	 * 
	 * For further details take a look at the property definition: {@link #showScrollbarY}.
	 * 
	 */
	_applyShowScrollbarY : vjo.NEEDS_IMPL,


	/**
	 */
	_createContainerElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showScrollbarY.
	 * 
	 * For further details take a look at the property definition: {@link #showScrollbarY}.
	 * 
	 */
	getShowScrollbarY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showScrollbarY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showScrollbarY}.
	 * 
	 */
	initShowScrollbarY : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showScrollbarY equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showScrollbarY}.
	 * 
	 */
	isShowScrollbarY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showScrollbarY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showScrollbarY}.
	 * 
	 */
	resetShowScrollbarY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showScrollbarY.
	 * 
	 * For further details take a look at the property definition: {@link #showScrollbarY}.
	 * 
	 */
	setShowScrollbarY : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showScrollbarY.
	 * 
	 * For further details take a look at the property definition: {@link #showScrollbarY}.
	 * 
	 */
	toggleShowScrollbarY : vjo.NEEDS_IMPL
})
.endType();