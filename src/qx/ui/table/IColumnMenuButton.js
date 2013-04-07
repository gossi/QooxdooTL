/**
 * Interface for creating the column visibility menu
 */
//>public
vjo.itype('qx.ui.table.IColumnMenuButton')
.protos({
	/**
	 * Empty the menu of all items, in preparation for building a new column
	 * visibility menu.
	 * 
	 */
	empty : vjo.NEEDS_IMPL,


	/**
	 * Instantiate a sub-widget.
	 * 
	 */
	factory : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	getMenu : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property menu
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	initMenu : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property menu.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	resetMenu : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	setMenu : vjo.NEEDS_IMPL
})
.endType();