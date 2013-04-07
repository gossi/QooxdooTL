/**
 * A TabButton is the clickable part sitting on the {@link qx.ui.tabview.Page}.
 * By clicking on the TabButton the user can set a Page active.
 */
//>public
vjo.ctype('qx.ui.tabview.TabButton')
.inherits('qx.ui.form.RadioButton')
.satisfies('qx.ui.form.IRadioItem')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property center.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	_applyCenter : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property iconPosition.
	 * 
	 * For further details take a look at the property definition: {@link #iconPosition}.
	 * 
	 */
	_applyIconPosition : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showCloseButton.
	 * 
	 * For further details take a look at the property definition: {@link #showCloseButton}.
	 * 
	 */
	_applyShowCloseButton : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Fires a &#8220;close&#8221; event when the close button is clicked.
	 * 
	 */
	_onCloseButtonClick : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showCloseButton.
	 * 
	 * For further details take a look at the property definition: {@link #showCloseButton}.
	 * 
	 */
	getShowCloseButton : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showCloseButton
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showCloseButton}.
	 * 
	 */
	initShowCloseButton : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showCloseButton equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showCloseButton}.
	 * 
	 */
	isShowCloseButton : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showCloseButton.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showCloseButton}.
	 * 
	 */
	resetShowCloseButton : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showCloseButton.
	 * 
	 * For further details take a look at the property definition: {@link #showCloseButton}.
	 * 
	 */
	setShowCloseButton : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showCloseButton.
	 * 
	 * For further details take a look at the property definition: {@link #showCloseButton}.
	 * 
	 */
	toggleShowCloseButton : vjo.NEEDS_IMPL
})
.endType();