/**
 * Interface for a column menu item corresponding to a table column.
 */
//>public
vjo.itype('qx.ui.table.IColumnMenuItem')
.protos({
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
	setVisible : vjo.NEEDS_IMPL
})
.endType();