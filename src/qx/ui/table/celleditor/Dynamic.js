/**
 * A cell editor factory which can dynamically exchange the cell editor
 * based on information retrieved at runtime. This is useful when different
 * rows in a column should have different cellEditors based on cell content
 * or row meta data. A typical example would be a spreadsheet that has different
 * kind of data in one column.
 */
//>public
vjo.ctype('qx.ui.table.celleditor.Dynamic')
.inherits('qx.core.Object')
.satisfies('qx.ui.table.ICellEditorFactory')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates the cell editor based on the cellEditorFactory instance
	 * returned by the function stored in the cellEditorFactoryFunction
	 * property. Passes the cellInfo map to the function.
	 * 
	 */
	createCellEditor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property cellEditorFactoryFunction.
	 * 
	 * For further details take a look at the property definition: {@link #cellEditorFactoryFunction}.
	 * 
	 */
	getCellEditorFactoryFunction : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property cellEditorFactoryFunction
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #cellEditorFactoryFunction}.
	 * 
	 */
	initCellEditorFactoryFunction : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property cellEditorFactoryFunction.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #cellEditorFactoryFunction}.
	 * 
	 */
	resetCellEditorFactoryFunction : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property cellEditorFactoryFunction.
	 * 
	 * For further details take a look at the property definition: {@link #cellEditorFactoryFunction}.
	 * 
	 */
	setCellEditorFactoryFunction : vjo.NEEDS_IMPL
})
.endType();