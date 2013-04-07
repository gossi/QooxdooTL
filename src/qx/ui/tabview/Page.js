/**
 * A page is the way to add content to a {@link TabView}. Each page gets a
 * button to switch to the page. Only one page is visible at a time.
 */
//>public
vjo.ctype('qx.ui.tabview.Page')
.inherits('qx.ui.container.Composite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	_applyIcon : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	_applyLabel : vjo.NEEDS_IMPL,


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
	 * Fires an &#8220;close&#8221; event when the close button of the TabButton of the page
	 * is clicked.
	 * 
	 */
	_onButtonClose : vjo.NEEDS_IMPL,


	/**
	 * Returns the button used within this page. This method is used by
	 * the TabView to access the button.
	 * 
	 */
	getButton : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	getIcon : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	getLabel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showCloseButton.
	 * 
	 * For further details take a look at the property definition: {@link #showCloseButton}.
	 * 
	 */
	getShowCloseButton : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property icon
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	initIcon : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property label
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	initLabel : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property icon.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	resetIcon : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property label.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	resetLabel : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	setIcon : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	setLabel : vjo.NEEDS_IMPL,


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