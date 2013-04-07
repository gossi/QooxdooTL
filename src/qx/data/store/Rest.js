/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * Handles response associated to a resource&#8217;s action. The model property is
 * populated with the marshaled response. Note the action is invoked on the
 * resource, not the store.
 */
//>public
vjo.ctype('qx.data.store.Rest')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Listen to events fired by the resource.
	 * 
	 */
	__addListeners : vjo.NEEDS_IMPL,


	/**
	 * Configure the resource&#8217;s request by processing the delegate.
	 * 
	 */
	__configureRequest : vjo.NEEDS_IMPL,


	/**
	 * Handle actionSuccess event.
	 * 
	 * Updates model with marshaled response.
	 * 
	 */
	__onActionSuccess : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property actionName.
	 * 
	 * For further details take a look at the property definition: {@link #actionName}.
	 * 
	 */
	getActionName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property resource.
	 * 
	 * For further details take a look at the property definition: {@link #resource}.
	 * 
	 */
	getResource : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property actionName
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #actionName}.
	 * 
	 */
	initActionName : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property model
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	initModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property resource
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #resource}.
	 * 
	 */
	initResource : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property actionName.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #actionName}.
	 * 
	 */
	resetActionName : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property model.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	resetModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property resource.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #resource}.
	 * 
	 */
	resetResource : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property actionName.
	 * 
	 * For further details take a look at the property definition: {@link #actionName}.
	 * 
	 */
	setActionName : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property resource.
	 * 
	 * For further details take a look at the property definition: {@link #resource}.
	 * 
	 */
	setResource : vjo.NEEDS_IMPL
})
.endType();