/**
 * The mixin contains all functionality to provide common properties for
 * text fields.
 */
//>public
vjo.mtype('qx.ui.mobile.form.MText')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property maxLength.
	 * 
	 * For further details take a look at the property definition: {@link #maxLength}.
	 * 
	 */
	_applyMaxLength : vjo.NEEDS_IMPL,


	/**
	 * Removes the focus from this widget.
	 * 
	 */
	blur : vjo.NEEDS_IMPL,


	/**
	 * Points the focus of the form to this widget.
	 * 
	 */
	focus : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxLength.
	 * 
	 * For further details take a look at the property definition: {@link #maxLength}.
	 * 
	 */
	getMaxLength : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	getPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property readOnly.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	getReadOnly : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxLength
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxLength}.
	 * 
	 */
	initMaxLength : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property placeholder
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	initPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property readOnly
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	initReadOnly : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property readOnly equals true.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	isReadOnly : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxLength.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxLength}.
	 * 
	 */
	resetMaxLength : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property placeholder.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	resetPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property readOnly.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	resetReadOnly : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxLength.
	 * 
	 * For further details take a look at the property definition: {@link #maxLength}.
	 * 
	 */
	setMaxLength : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property placeholder.
	 * 
	 * For further details take a look at the property definition: {@link #placeholder}.
	 * 
	 */
	setPlaceholder : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property readOnly.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	setReadOnly : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property readOnly.
	 * 
	 * For further details take a look at the property definition: {@link #readOnly}.
	 * 
	 */
	toggleReadOnly : vjo.NEEDS_IMPL
})
.endType();