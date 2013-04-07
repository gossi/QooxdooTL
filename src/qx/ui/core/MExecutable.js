/**
 * This mixin is included by all widgets, which support an &#8216;execute&#8217; like
 * buttons or menu entries.
 */
//>public
vjo.mtype('qx.ui.core.MExecutable')
.protos({
	/**
	 * Handler for the execute event of the command.
	 * 
	 */
	__onCommandExecute : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property command.
	 * 
	 * For further details take a look at the property definition: {@link #command}.
	 * 
	 */
	_applyCommand : vjo.NEEDS_IMPL,


	/**
	 * Initiate the execute action.
	 * 
	 */
	execute : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property command.
	 * 
	 * For further details take a look at the property definition: {@link #command}.
	 * 
	 */
	getCommand : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property command
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #command}.
	 * 
	 */
	initCommand : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property command.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #command}.
	 * 
	 */
	resetCommand : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property command.
	 * 
	 * For further details take a look at the property definition: {@link #command}.
	 * 
	 */
	setCommand : vjo.NEEDS_IMPL
})
.endType();