/**
 * A cell renderer factory which can dynamically exchange the cell renderer
 * based on information retrieved at runtime. This is useful when different
 * rows in a column should have different cell renderer based on cell content
 * or row metadata. A typical example would be a spreadsheet that has different
 * kind of data in one column.
 */
//>public
vjo.ctype('qx.ui.table.cellrenderer.Dynamic')
.inherits('qx.ui.table.cellrenderer.Default')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Overridden; called whenever the cell updates. The cell will call the
	 * function stored in the cellRendererFactoryFunction to retrieve the
	 * cell renderer which should be used for this particular cell
	 * 
	 */
	createDataCellHtml : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property cellRendererFactoryFunction.
	 * 
	 * For further details take a look at the property definition: {@link #cellRendererFactoryFunction}.
	 * 
	 */
	getCellRendererFactoryFunction : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property cellRendererFactoryFunction
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #cellRendererFactoryFunction}.
	 * 
	 */
	initCellRendererFactoryFunction : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property cellRendererFactoryFunction.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #cellRendererFactoryFunction}.
	 * 
	 */
	resetCellRendererFactoryFunction : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property cellRendererFactoryFunction.
	 * 
	 * For further details take a look at the property definition: {@link #cellRendererFactoryFunction}.
	 * 
	 */
	setCellRendererFactoryFunction : vjo.NEEDS_IMPL
})
.endType();