/**
 * The NumberField is a single-line number input field. It uses HTML5 input field type
 * &#8220;number&#8221;.
 */
//>public
vjo.ctype('qx.ui.mobile.form.NumberField')
.inherits('qx.ui.mobile.form.Input')
.satisfies('qx.ui.form.IStringForm')
.mixin(['qx.ui.mobile.form.MValue','qx.ui.mobile.form.MText'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_getType : vjo.NEEDS_IMPL,


	/**
	 * Called when changed the property maximum.
	 * Delegates value change on DOM element.
	 * 
	 */
	_onChangeMaximum : vjo.NEEDS_IMPL,


	/**
	 * Called when changed the property minimum.
	 * Delegates value change on DOM element.
	 * 
	 */
	_onChangeMinimum : vjo.NEEDS_IMPL,


	/**
	 * Called when changed the property step.
	 * Delegates value change on DOM element.
	 * 
	 */
	_onChangeStep : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maximum.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	getMaximum : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property minimum.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	getMinimum : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property step.
	 * 
	 * For further details take a look at the property definition: {@link #step}.
	 * 
	 */
	getStep : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maximum
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	initMaximum : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property minimum
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	initMinimum : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property step
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #step}.
	 * 
	 */
	initStep : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maximum.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	resetMaximum : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property minimum.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	resetMinimum : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property step.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #step}.
	 * 
	 */
	resetStep : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maximum.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	setMaximum : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property minimum.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	setMinimum : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property step.
	 * 
	 * For further details take a look at the property definition: {@link #step}.
	 * 
	 */
	setStep : vjo.NEEDS_IMPL
})
.endType();