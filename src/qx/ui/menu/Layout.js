/**
 * Layouter used by the qooxdoo menu&#8217;s to render their buttons
 */
//>internal
vjo.ctype('qx.ui.menu.Layout')
.inherits('qx.ui.layout.VBox')
.protos({
	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property arrowColumnWidth.
	 * 
	 * For further details take a look at the property definition: {@link #arrowColumnWidth}.
	 * 
	 */
	getArrowColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Returns the column sizes detected during the pre-layout phase
	 * 
	 */
	getColumnSizes : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property columnSpacing.
	 * 
	 * For further details take a look at the property definition: {@link #columnSpacing}.
	 * 
	 */
	getColumnSpacing : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconColumnWidth.
	 * 
	 * For further details take a look at the property definition: {@link #iconColumnWidth}.
	 * 
	 */
	getIconColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spanColumn.
	 * 
	 * For further details take a look at the property definition: {@link #spanColumn}.
	 * 
	 */
	getSpanColumn : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property arrowColumnWidth
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #arrowColumnWidth}.
	 * 
	 */
	initArrowColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property columnSpacing
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #columnSpacing}.
	 * 
	 */
	initColumnSpacing : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconColumnWidth
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconColumnWidth}.
	 * 
	 */
	initIconColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property spanColumn
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #spanColumn}.
	 * 
	 */
	initSpanColumn : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property arrowColumnWidth.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #arrowColumnWidth}.
	 * 
	 */
	resetArrowColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property columnSpacing.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #columnSpacing}.
	 * 
	 */
	resetColumnSpacing : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconColumnWidth.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconColumnWidth}.
	 * 
	 */
	resetIconColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property spanColumn.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #spanColumn}.
	 * 
	 */
	resetSpanColumn : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property arrowColumnWidth.
	 * 
	 * For further details take a look at the property definition: {@link #arrowColumnWidth}.
	 * 
	 */
	setArrowColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property columnSpacing.
	 * 
	 * For further details take a look at the property definition: {@link #columnSpacing}.
	 * 
	 */
	setColumnSpacing : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconColumnWidth.
	 * 
	 * For further details take a look at the property definition: {@link #iconColumnWidth}.
	 * 
	 */
	setIconColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spanColumn.
	 * 
	 * For further details take a look at the property definition: {@link #spanColumn}.
	 * 
	 */
	setSpanColumn : vjo.NEEDS_IMPL
})
.endType();