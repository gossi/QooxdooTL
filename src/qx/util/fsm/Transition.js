/**
 * Create a new possible transition from one state to another.
 */
//>public
vjo.ctype('qx.util.fsm.Transition')
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
	__transformAutoActionsAfterOntransition : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformAutoActionsBeforeOntransition : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformNextState : vjo.NEEDS_IMPL,


	/**
	 * Internal transform method
	 * 
	 */
	__transformOntransition : vjo.NEEDS_IMPL,


	/**
	 * Validate the predicate. Converts all incoming values to functions.
	 * 
	 */
	__transformPredicate : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoActionsAfterOntransition.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOntransition}.
	 * 
	 */
	getAutoActionsAfterOntransition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoActionsBeforeOntransition.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOntransition}.
	 * 
	 */
	getAutoActionsBeforeOntransition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	getName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property nextState.
	 * 
	 * For further details take a look at the property definition: {@link #nextState}.
	 * 
	 */
	getNextState : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property ontransition.
	 * 
	 * For further details take a look at the property definition: {@link #ontransition}.
	 * 
	 */
	getOntransition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property predicate.
	 * 
	 * For further details take a look at the property definition: {@link #predicate}.
	 * 
	 */
	getPredicate : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoActionsAfterOntransition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOntransition}.
	 * 
	 */
	initAutoActionsAfterOntransition : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoActionsBeforeOntransition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOntransition}.
	 * 
	 */
	initAutoActionsBeforeOntransition : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property nextState
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #nextState}.
	 * 
	 */
	initNextState : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property ontransition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #ontransition}.
	 * 
	 */
	initOntransition : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property predicate
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #predicate}.
	 * 
	 */
	initPredicate : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoActionsAfterOntransition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOntransition}.
	 * 
	 */
	resetAutoActionsAfterOntransition : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoActionsBeforeOntransition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOntransition}.
	 * 
	 */
	resetAutoActionsBeforeOntransition : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property nextState.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #nextState}.
	 * 
	 */
	resetNextState : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property ontransition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #ontransition}.
	 * 
	 */
	resetOntransition : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property predicate.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #predicate}.
	 * 
	 */
	resetPredicate : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property autoActionsAfterOntransition.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsAfterOntransition}.
	 * 
	 */
	setAutoActionsAfterOntransition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property autoActionsBeforeOntransition.
	 * 
	 * For further details take a look at the property definition: {@link #autoActionsBeforeOntransition}.
	 * 
	 */
	setAutoActionsBeforeOntransition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	setName : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property nextState.
	 * 
	 * For further details take a look at the property definition: {@link #nextState}.
	 * 
	 */
	setNextState : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property ontransition.
	 * 
	 * For further details take a look at the property definition: {@link #ontransition}.
	 * 
	 */
	setOntransition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property predicate.
	 * 
	 * For further details take a look at the property definition: {@link #predicate}.
	 * 
	 */
	setPredicate : vjo.NEEDS_IMPL
})
.endType();