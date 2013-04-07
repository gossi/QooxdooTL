/**
 * A data cell renderer for boolean values.
 */
//>public
vjo.ctype('qx.ui.table.cellrenderer.Boolean')
.inherits('qx.ui.table.cellrenderer.AbstractImage')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property iconFalse.
	 * 
	 * For further details take a look at the property definition: {@link #iconFalse}.
	 * 
	 */
	_applyIconFalse : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property iconTrue.
	 * 
	 * For further details take a look at the property definition: {@link #iconTrue}.
	 * 
	 */
	_applyIconTrue : vjo.NEEDS_IMPL,


	/**
	 */
	_getCellStyle : vjo.NEEDS_IMPL,


	/**
	 */
	_identifyImage : vjo.NEEDS_IMPL,


	/**
	 * Handler for theme changes.
	 * 
	 */
	_onChangeTheme : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconFalse.
	 * 
	 * For further details take a look at the property definition: {@link #iconFalse}.
	 * 
	 */
	getIconFalse : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconTrue.
	 * 
	 * For further details take a look at the property definition: {@link #iconTrue}.
	 * 
	 */
	getIconTrue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconFalse
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconFalse}.
	 * 
	 */
	initIconFalse : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconTrue
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconTrue}.
	 * 
	 */
	initIconTrue : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconFalse.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconFalse}.
	 * 
	 */
	resetIconFalse : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconTrue.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconTrue}.
	 * 
	 */
	resetIconTrue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconFalse.
	 * 
	 * For further details take a look at the property definition: {@link #iconFalse}.
	 * 
	 */
	setIconFalse : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconTrue.
	 * 
	 * For further details take a look at the property definition: {@link #iconTrue}.
	 * 
	 */
	setIconTrue : vjo.NEEDS_IMPL
})
.endType();