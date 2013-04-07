/**
 * A finite state machine.
 * 
 * See {@link qx.util.fsm.State} for details on creating States,
 * and {@link qx.util.fsm.Transition} for details on creating
 * transitions between states.
 */
//>public
vjo.ctype('qx.util.fsm.FiniteStateMachine')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Process all of the events on the event queue.
	 * 
	 */
	__processEvents : vjo.NEEDS_IMPL,


	/**
	 * Run the finite state machine to process a single event.
	 * 
	 */
	__run : vjo.NEEDS_IMPL,


	/**
	 * Get internal data for debugging
	 * 
	 */
	_getInternalData : vjo.NEEDS_IMPL,


	/**
	 * Add an object (typically a widget) that is to be accessed during state
	 * transitions, to the finite state machine.
	 * 
	 */
	addObject : vjo.NEEDS_IMPL,


	/**
	 * Add a state to the finite state machine.
	 * 
	 */
	addState : vjo.NEEDS_IMPL,


	/**
	 * Display all of the saved objects and their reverse mappings.
	 * 
	 */
	displayAllObjects : vjo.NEEDS_IMPL,


	/**
	 * Enqueue an event for processing
	 * 
	 */
	enqueueEvent : vjo.NEEDS_IMPL,


	/**
	 * Event listener for all event types in the finite state machine
	 * 
	 */
	eventListener : vjo.NEEDS_IMPL,


	/**
	 * Create an event and send it immediately to the finite state machine.
	 * 
	 */
	fireImmediateEvent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property debugFlags.
	 * 
	 * For further details take a look at the property definition: {@link #debugFlags}.
	 * 
	 */
	getDebugFlags : vjo.NEEDS_IMPL,


	/**
	 * Get the friendly name of an object.
	 * 
	 */
	getFriendlyName : vjo.NEEDS_IMPL,


	/**
	 * Retrieve the list of objects which have registered, via {@link
	 * #addObject} as being members of the specified group.
	 * 
	 */
	getGroupObjects : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxSavedStates.
	 * 
	 * For further details take a look at the property definition: {@link #maxSavedStates}.
	 * 
	 */
	getMaxSavedStates : vjo.NEEDS_IMPL,


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
	 * Retrieve an object previously saved via {@link #addObject}, using its
	 * Friendly Name.
	 * 
	 */
	getObject : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property previousState.
	 * 
	 * For further details take a look at the property definition: {@link #previousState}.
	 * 
	 */
	getPreviousState : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	getState : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property debugFlags
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #debugFlags}.
	 * 
	 */
	initDebugFlags : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxSavedStates
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxSavedStates}.
	 * 
	 */
	initMaxSavedStates : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property previousState
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #previousState}.
	 * 
	 */
	initPreviousState : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property state
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	initState : vjo.NEEDS_IMPL,


	/**
	 * Pop the saved state stack.
	 * 
	 */
	popState : vjo.NEEDS_IMPL,


	/**
	 * Add the specified event to a list of events to be passed to the next
	 * state following state transition.
	 * 
	 */
	postponeEvent : vjo.NEEDS_IMPL,


	/**
	 * Save the current or previous state on the saved-state stack.  A future
	 * transition can then provide, as its nextState value, the class
	 * constant:
	 * 
	 * 
	 *   qx.util.fsm.FiniteStateMachine.StateChange.POP_STATE_STACK
	 *   
	 * 
	 * which will cause the next state to be whatever is at the top of the
	 * saved-state stack, and remove that top element from the saved-state
	 * stack.
	 * 
	 */
	pushState : vjo.NEEDS_IMPL,


	/**
	 * Remove an object which had previously been added by {@link #addObject}.
	 * 
	 */
	removeObject : vjo.NEEDS_IMPL,


	/**
	 * Replace a state in the finite state machine.  This is useful if
	 * initially &#8220;dummy&#8221; states are created which load the real state table
	 * for a series of operations (and possibly also load the gui associated
	 * with the new states at the same time).  Having portions of the finite
	 * state machine and their associated gui pages loaded at run time can
	 * help prevent long delays at application start-up time.
	 * 
	 */
	replaceState : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property debugFlags.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #debugFlags}.
	 * 
	 */
	resetDebugFlags : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxSavedStates.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxSavedStates}.
	 * 
	 */
	resetMaxSavedStates : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property previousState.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #previousState}.
	 * 
	 */
	resetPreviousState : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property state.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	resetState : vjo.NEEDS_IMPL,


	/**
	 * Create and schedule an event to be sent to the finite state machine
	 * &#8220;shortly&#8221;.  This allows such things as letting a progress cursor
	 * display prior to handling the event.
	 * 
	 */
	scheduleEvent : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property debugFlags.
	 * 
	 * For further details take a look at the property definition: {@link #debugFlags}.
	 * 
	 */
	setDebugFlags : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxSavedStates.
	 * 
	 * For further details take a look at the property definition: {@link #maxSavedStates}.
	 * 
	 */
	setMaxSavedStates : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property previousState.
	 * 
	 * For further details take a look at the property definition: {@link #previousState}.
	 * 
	 */
	setPreviousState : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	setState : vjo.NEEDS_IMPL,


	/**
	 * Start (or restart, after it has terminated) the finite state machine
	 * from the starting state.  The starting state is defined as the first
	 * state added to the finite state machine.
	 * 
	 */
	start : vjo.NEEDS_IMPL
})
.endType();