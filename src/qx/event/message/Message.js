/**
 * A message to be dispatched on the message bus.
 */
//>public
vjo.ctype('qx.event.message.Message')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property data.
	 * 
	 * For further details take a look at the property definition: {@link #data}.
	 * 
	 */
	getData : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	getName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property sender.
	 * 
	 * For further details take a look at the property definition: {@link #sender}.
	 * 
	 */
	getSender : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property data
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #data}.
	 * 
	 */
	initData : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property name
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	initName : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property sender
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #sender}.
	 * 
	 */
	initSender : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property data.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #data}.
	 * 
	 */
	resetData : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property name.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	resetName : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property sender.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #sender}.
	 * 
	 */
	resetSender : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property data.
	 * 
	 * For further details take a look at the property definition: {@link #data}.
	 * 
	 */
	setData : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	setName : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property sender.
	 * 
	 * For further details take a look at the property definition: {@link #sender}.
	 * 
	 */
	setSender : vjo.NEEDS_IMPL
})
.endType();