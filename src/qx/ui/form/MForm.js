/**
 * Mixin handling the valid and required properties for the form widgets.
 */
//>public
vjo.mtype('qx.ui.form.MForm')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Locale change event handler
	 * 
	 */
	__onChangeLocale : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property valid.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	_applyValid : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property invalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	getInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property required.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	getRequired : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property requiredInvalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #requiredInvalidMessage}.
	 * 
	 */
	getRequiredInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property valid.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	getValid : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property invalidMessage
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	initInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property required
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	initRequired : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property requiredInvalidMessage
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #requiredInvalidMessage}.
	 * 
	 */
	initRequiredInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property valid
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	initValid : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property required equals true.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	isRequired : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property valid equals true.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	isValid : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property invalidMessage.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	resetInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property required.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	resetRequired : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property requiredInvalidMessage.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #requiredInvalidMessage}.
	 * 
	 */
	resetRequiredInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property valid.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	resetValid : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property invalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	setInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property required.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	setRequired : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property requiredInvalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #requiredInvalidMessage}.
	 * 
	 */
	setRequiredInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property valid.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	setValid : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property required.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	toggleRequired : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property valid.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	toggleValid : vjo.NEEDS_IMPL
})
.endType();