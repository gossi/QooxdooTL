/**
 * The model of a table pane. This model works as proxy to a
 * {@link qx.ui.table.columnmodel.Basic} and manages the visual order of the columns shown in
 * a {@link Pane}.
 */
//>public
vjo.ctype('qx.ui.table.pane.Model')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property firstColumnX.
	 * 
	 * For further details take a look at the property definition: {@link #firstColumnX}.
	 * 
	 */
	_applyFirstColumnX : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property maxColumnCount.
	 * 
	 * For further details take a look at the property definition: {@link #maxColumnCount}.
	 * 
	 */
	_applyMaxColumnCount : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the visibility of a column has changed.
	 * 
	 */
	_onColVisibilityChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the cell renderer of a column has changed.
	 * 
	 */
	_onHeaderCellRendererChanged : vjo.NEEDS_IMPL,


	/**
	 * Returns the model index of the column at the position xPos.
	 * 
	 */
	getColumnAtX : vjo.NEEDS_IMPL,


	/**
	 * Returns the number of columns in this model.
	 * 
	 */
	getColumnCount : vjo.NEEDS_IMPL,


	/**
	 * Gets the position of the left side of a column (in pixels, relative to the
	 * left side of the table pane).
	 * 
	 * This value corresponds to the sum of the widths of all columns left of the
	 * column.
	 * 
	 */
	getColumnLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property firstColumnX.
	 * 
	 * For further details take a look at the property definition: {@link #firstColumnX}.
	 * 
	 */
	getFirstColumnX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxColumnCount.
	 * 
	 * For further details take a look at the property definition: {@link #maxColumnCount}.
	 * 
	 */
	getMaxColumnCount : vjo.NEEDS_IMPL,


	/**
	 * Returns the total width of all columns in the model.
	 * 
	 */
	getTotalWidth : vjo.NEEDS_IMPL,


	/**
	 * Returns the x position of the column col.
	 * 
	 */
	getX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property firstColumnX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #firstColumnX}.
	 * 
	 */
	initFirstColumnX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxColumnCount
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxColumnCount}.
	 * 
	 */
	initMaxColumnCount : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property firstColumnX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #firstColumnX}.
	 * 
	 */
	resetFirstColumnX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxColumnCount.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxColumnCount}.
	 * 
	 */
	resetMaxColumnCount : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property firstColumnX.
	 * 
	 * For further details take a look at the property definition: {@link #firstColumnX}.
	 * 
	 */
	setFirstColumnX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxColumnCount.
	 * 
	 * For further details take a look at the property definition: {@link #maxColumnCount}.
	 * 
	 */
	setMaxColumnCount : vjo.NEEDS_IMPL,


	/**
	 * Connects the table model to the column model
	 * 
	 */
	setTableColumnModel : vjo.NEEDS_IMPL
})
.endType();