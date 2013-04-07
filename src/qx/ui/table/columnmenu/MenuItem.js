/**
 * A menu item.
 */
//>public
vjo.ctype('qx.ui.table.columnmenu.MenuItem')
.inherits('qx.ui.menu.CheckBox')
.satisfies('qx.ui.table.IColumnMenuItem')
.protos({
	/**
	 * Create a new instance of an item for insertion into the table column
	 * visibility menu.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Keep menu in sync with programmatic changes of visibility
	 * 
	 */
	_applyVisible : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property visible.
	 * 
	 * For further details take a look at the property definition: {@link #visible}.
	 * 
	 */
	getVisible : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property visible
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #visible}.
	 * 
	 */
	initVisible : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property visible equals true.
	 * 
	 * For further details take a look at the property definition: {@link #visible}.
	 * 
	 */
	isVisible : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property visible.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #visible}.
	 * 
	 */
	resetVisible : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property visible.
	 * 
	 * For further details take a look at the property definition: {@link #visible}.
	 * 
	 */
	setVisible : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property visible.
	 * 
	 * For further details take a look at the property definition: {@link #visible}.
	 * 
	 */
	toggleVisible : vjo.NEEDS_IMPL
})
.endType();