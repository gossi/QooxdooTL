/**
 * The default header cell renderer.
 */
//>public
vjo.ctype('qx.ui.table.headerrenderer.Default')
.inherits('qx.core.Object')
.satisfies('qx.ui.table.IHeaderRenderer')
.protos({
	/**
	 * Returns the (computed) value of the property toolTip.
	 * 
	 * For further details take a look at the property definition: {@link #toolTip}.
	 * 
	 */
	getToolTip : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property toolTip
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #toolTip}.
	 * 
	 */
	initToolTip : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property toolTip.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #toolTip}.
	 * 
	 */
	resetToolTip : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property toolTip.
	 * 
	 * For further details take a look at the property definition: {@link #toolTip}.
	 * 
	 */
	setToolTip : vjo.NEEDS_IMPL
})
.endType();