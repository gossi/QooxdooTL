/**
 * A header cell renderer which renders an icon (only). The icon cannot be combined
 * with text.
 */
//>public
vjo.ctype('qx.ui.table.headerrenderer.Icon')
.inherits('qx.ui.table.headerrenderer.Default')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconUrl.
	 * 
	 * For further details take a look at the property definition: {@link #iconUrl}.
	 * 
	 */
	getIconUrl : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconUrl
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconUrl}.
	 * 
	 */
	initIconUrl : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconUrl.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconUrl}.
	 * 
	 */
	resetIconUrl : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconUrl.
	 * 
	 * For further details take a look at the property definition: {@link #iconUrl}.
	 * 
	 */
	setIconUrl : vjo.NEEDS_IMPL,


	/**
	 */
	updateHeaderCell : vjo.NEEDS_IMPL
})
.endType();