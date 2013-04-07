/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * Rest event object.
 */
//>public
vjo.ctype('qx.event.type.Rest')
.inherits('qx.event.type.Data')
.protos({
	/**
	 * Get a copy of this object
	 * 
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property action.
	 * 
	 * For further details take a look at the property definition: {@link #action}.
	 * 
	 */
	getAction : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property id.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	getId : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property phase.
	 * 
	 * For further details take a look at the property definition: {@link #phase}.
	 * 
	 */
	getPhase : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property request.
	 * 
	 * For further details take a look at the property definition: {@link #request}.
	 * 
	 */
	getRequest : vjo.NEEDS_IMPL,


	/**
	 * Initializes an event object.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property action
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #action}.
	 * 
	 */
	initAction : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property id
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	initId : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property phase
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #phase}.
	 * 
	 */
	initPhase : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property request
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #request}.
	 * 
	 */
	initRequest : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property action.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #action}.
	 * 
	 */
	resetAction : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property id.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	resetId : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property phase.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #phase}.
	 * 
	 */
	resetPhase : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property request.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #request}.
	 * 
	 */
	resetRequest : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property action.
	 * 
	 * For further details take a look at the property definition: {@link #action}.
	 * 
	 */
	setAction : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property id.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	setId : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property phase.
	 * 
	 * For further details take a look at the property definition: {@link #phase}.
	 * 
	 */
	setPhase : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property request.
	 * 
	 * For further details take a look at the property definition: {@link #request}.
	 * 
	 */
	setRequest : vjo.NEEDS_IMPL
})
.endType();