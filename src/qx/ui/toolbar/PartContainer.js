/**
 * The container used by {@link Part} to insert the buttons.
 */
//>internal
vjo.ctype('qx.ui.toolbar.PartContainer')
.inherits('qx.ui.container.Composite')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	getShow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property show
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	initShow : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property show.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	resetShow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	setShow : vjo.NEEDS_IMPL
})
.endType();