/**
 * Popups are widgets, which can be placed on top of the application.
 * They are automatically added to the application root.
 * 
 * Popups are used to display menus, the lists of combo or select boxes,
 * tooltips, etc.
 */
//>public
vjo.ctype('qx.ui.popup.Popup')
.inherits('qx.ui.container.Composite')
.mixin('qx.ui.core.MPlacement')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	_applyVisibility : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoHide.
	 * 
	 * For further details take a look at the property definition: {@link #autoHide}.
	 * 
	 */
	getAutoHide : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoHide
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoHide}.
	 * 
	 */
	initAutoHide : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property autoHide equals true.
	 * 
	 * For further details take a look at the property definition: {@link #autoHide}.
	 * 
	 */
	isAutoHide : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoHide.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoHide}.
	 * 
	 */
	resetAutoHide : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property autoHide.
	 * 
	 * For further details take a look at the property definition: {@link #autoHide}.
	 * 
	 */
	setAutoHide : vjo.NEEDS_IMPL,


	/**
	 */
	show : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property autoHide.
	 * 
	 * For further details take a look at the property definition: {@link #autoHide}.
	 * 
	 */
	toggleAutoHide : vjo.NEEDS_IMPL
})
.endType();