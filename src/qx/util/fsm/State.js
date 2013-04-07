/**
 * Create a new state which may be added to a finite state machine.
 */
//>public
vjo.ctype('qx.util.fsm.State')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * If given a function, bind it to a specified context.
	 * 
	 */
	__bindIfFunction : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformAutoActionsAfterOnentry : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformAutoActionsAfterOnexit : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformAutoActionsBeforeOnentry : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformAutoActionsBeforeOnexit : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformEvents : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformName : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformOnentry : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformOnexit : vjo.NEEDS_IMPL,


	/**
	 * Add a transition to a state
	 * 
	 */
	addTransition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoActionsAfterOnentry.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOnentry}.
	 * 
	 */
	getAutoActionsAfterOnentry : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoActionsAfterOnexit.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOnexit}.
	 * 
	 */
	getAutoActionsAfterOnexit : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoActionsBeforeOnentry.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOnentry}.
	 * 
	 */
	getAutoActionsBeforeOnentry : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoActionsBeforeOnexit.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOnexit}.
	 * 
	 */
	getAutoActionsBeforeOnexit : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property events.
	 * 
	 * For further details take a look at the property definition: {@link #events}.
	 * 
	 */
	getEvents : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	getName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property onentry.
	 * 
	 * For further details take a look at the property definition: {@link #onentry}.
	 * 
	 */
	getOnentry : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property onexit.
	 * 
	 * For further details take a look at the property definition: {@link #onexit}.
	 * 
	 */
	getOnexit : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoActionsAfterOnentry
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOnentry}.
	 * 
	 */
	initAutoActionsAfterOnentry : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoActionsAfterOnexit
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOnexit}.
	 * 
	 */
	initAutoActionsAfterOnexit : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoActionsBeforeOnentry
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOnentry}.
	 * 
	 */
	initAutoActionsBeforeOnentry : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoActionsBeforeOnexit
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOnexit}.
	 * 
	 */
	initAutoActionsBeforeOnexit : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property events
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #events}.
	 * 
	 */
	initEvents : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property onentry
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #onentry}.
	 * 
	 */
	initOnentry : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property onexit
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #onexit}.
	 * 
	 */
	initOnexit : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoActionsAfterOnentry.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOnentry}.
	 * 
	 */
	resetAutoActionsAfterOnentry : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoActionsAfterOnexit.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOnexit}.
	 * 
	 */
	resetAutoActionsAfterOnexit : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoActionsBeforeOnentry.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOnentry}.
	 * 
	 */
	resetAutoActionsBeforeOnentry : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoActionsBeforeOnexit.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOnexit}.
	 * 
	 */
	resetAutoActionsBeforeOnexit : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property events.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #events}.
	 * 
	 */
	resetEvents : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property onentry.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #onentry}.
	 * 
	 */
	resetOnentry : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property onexit.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #onexit}.
	 * 
	 */
	resetOnexit : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property autoActionsAfterOnentry.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOnentry}.
	 * 
	 */
	setAutoActionsAfterOnentry : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property autoActionsAfterOnexit.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOnexit}.
	 * 
	 */
	setAutoActionsAfterOnexit : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property autoActionsBeforeOnentry.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOnentry}.
	 * 
	 */
	setAutoActionsBeforeOnentry : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property autoActionsBeforeOnexit.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOnexit}.
	 * 
	 */
	setAutoActionsBeforeOnexit : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property events.
	 * 
	 * For further details take a look at the property definition: {@link #events}.
	 * 
	 */
	setEvents : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	setName : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property onentry.
	 * 
	 * For further details take a look at the property definition: {@link #onentry}.
	 * 
	 */
	setOnentry : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property onexit.
	 * 
	 * For further details take a look at the property definition: {@link #onexit}.
	 * 
	 */
	setOnexit : vjo.NEEDS_IMPL
})
.endType();