/**
 * An abstract cell editor factory creating text/password/spinner/... fields.
 */
//>public abstract
vjo.ctype('qx.ui.table.celleditor.AbstractField')
.inherits('qx.core.Object')
.satisfies('qx.ui.table.ICellEditorFactory')
.protos({
	/**
	 * Factory to create the editor widget
	 * 
	 */
	_createEditor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property validationFunction.
	 * 
	 * For further details take a look at the property definition: {@link #validationFunction}.
	 * 
	 */
	getValidationFunction : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property validationFunction
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #validationFunction}.
	 * 
	 */
	initValidationFunction : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property validationFunction.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #validationFunction}.
	 * 
	 */
	resetValidationFunction : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property validationFunction.
	 * 
	 * For further details take a look at the property definition: {@link #validationFunction}.
	 * 
	 */
	setValidationFunction : vjo.NEEDS_IMPL
})
.endType();