/**
 * The Row widget represents a row in a {@link Form}.
 */
//>public
vjo.ctype('qx.ui.mobile.form.Row')
.inherits('qx.ui.mobile.container.Composite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_getTagName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	getSelectable : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selectable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	initSelectable : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property selectable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	isSelectable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selectable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	resetSelectable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	setSelectable : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	toggleSelectable : vjo.NEEDS_IMPL
})
.endType();