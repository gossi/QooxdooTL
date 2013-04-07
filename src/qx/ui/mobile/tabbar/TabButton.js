/**
 * A tab button widget.
 * 
 * A tab button can be added to the tab bar and is associated with a
 * {@link #view}.
 */
//>public
vjo.ctype('qx.ui.mobile.tabbar.TabButton')
.inherits('qx.ui.mobile.form.Button')
.protos({
	/**
	 * Applies changes of the property value of the property view.
	 * 
	 * For further details take a look at the property definition: {@link #view}.
	 * 
	 */
	_applyView : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property view.
	 * 
	 * For further details take a look at the property definition: {@link #view}.
	 * 
	 */
	getView : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property view
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #view}.
	 * 
	 */
	initView : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property view.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #view}.
	 * 
	 */
	resetView : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property view.
	 * 
	 * For further details take a look at the property definition: {@link #view}.
	 * 
	 */
	setView : vjo.NEEDS_IMPL
})
.endType();