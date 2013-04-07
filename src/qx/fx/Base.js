/**
 * Basic class for all core and combination effects.
 */
//>public
vjo.ctype('qx.fx.Base')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Apply method for duration. Should be overwritten if needed.
	 * 
	 */
	_applyDuration : vjo.NEEDS_IMPL,


	/**
	 * Returns the effect&#8217;s DOM element
	 * 
	 */
	_getElement : vjo.NEEDS_IMPL,


	/**
	 * Sets the element to be animated.
	 * 
	 */
	_setElement : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called after
	 * the effect actually has ended.
	 * 
	 */
	afterFinish : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called before
	 * &#8220;afterFinished&#8221; and after the effect
	 * actually has ended.
	 * 
	 */
	afterFinishInternal : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called after
	 * the effect&#8217;s &#8220;setup&#8221; method has been called.
	 * 
	 */
	afterSetup : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called before
	 * &#8220;afterSetup&#8221; and after the effect&#8217;s
	 * &#8220;setup&#8221; method has been called.
	 * 
	 */
	afterSetupInternal : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called
	 * each time after the effect&#8217;s &#8220;update&#8221; method is called.
	 * 
	 */
	afterUpdate : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called before
	 * &#8220;afterUpdate&#8221; and each time after
	 * the effect&#8217;s &#8220;update&#8221; method is called.
	 * 
	 */
	afterUpdateInternal : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called before
	 * the effect actually ends.
	 * 
	 */
	beforeFinish : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called before
	 * &#8220;beforeFinished&#8221; and before the effect
	 * actually ends.
	 * 
	 */
	beforeFinishInternal : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called before
	 * the effect&#8217;s &#8220;setup&#8221; method gets called.
	 * 
	 */
	beforeSetup : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called before
	 * &#8220;beforeSetup&#8221; and before the effect&#8217;s
	 * &#8220;setup&#8221; method gets called.
	 * 
	 */
	beforeSetupInternal : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called
	 * before the effect actually starts.
	 * 
	 */
	beforeStart : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called before
	 * &#8220;beforeStartInternal&#8221; and before the effect
	 * actually starts.
	 * 
	 */
	beforeStartInternal : vjo.NEEDS_IMPL,


	/**
	 * This internal function is each time before
	 * the effect&#8217;s &#8220;update&#8221; method is called.
	 * 
	 */
	beforeUpdate : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called before
	 * &#8220;beforeUpdateInternal&#8221; and each time before
	 * the effect&#8217;s &#8220;update&#8221; method is called.
	 * 
	 */
	beforeUpdateInternal : vjo.NEEDS_IMPL,


	/**
	 * Removes effect from queue and sets state to finished.
	 * 
	 */
	cancel : vjo.NEEDS_IMPL,


	/**
	 * Ends the effect
	 * 
	 */
	end : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called
	 * when the effect has finished.
	 * 
	 * Fires &#8220;finish&#8221; event.
	 * 
	 */
	finish : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delay.
	 * 
	 * For further details take a look at the property definition: {@link #delay}.
	 * 
	 */
	getDelay : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property duration.
	 * 
	 * For further details take a look at the property definition: {@link #duration}.
	 * 
	 */
	getDuration : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property fps.
	 * 
	 * For further details take a look at the property definition: {@link #fps}.
	 * 
	 */
	getFps : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property from.
	 * 
	 * For further details take a look at the property definition: {@link #from}.
	 * 
	 */
	getFrom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property queue.
	 * 
	 * For further details take a look at the property definition: {@link #queue}.
	 * 
	 */
	getQueue : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property sync.
	 * 
	 * For further details take a look at the property definition: {@link #sync}.
	 * 
	 */
	getSync : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property to.
	 * 
	 * For further details take a look at the property definition: {@link #to}.
	 * 
	 */
	getTo : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property transition.
	 * 
	 * For further details take a look at the property definition: {@link #transition}.
	 * 
	 */
	getTransition : vjo.NEEDS_IMPL,


	/**
	 * This internal function is used to update
	 * properties before the effect starts.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property delay
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #delay}.
	 * 
	 */
	initDelay : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property duration
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #duration}.
	 * 
	 */
	initDuration : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property fps
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #fps}.
	 * 
	 */
	initFps : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property from
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #from}.
	 * 
	 */
	initFrom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property queue
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #queue}.
	 * 
	 */
	initQueue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property sync
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #sync}.
	 * 
	 */
	initSync : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property to
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #to}.
	 * 
	 */
	initTo : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property transition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #transition}.
	 * 
	 */
	initTransition : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the effect is active
	 * 
	 */
	isActive : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property sync equals true.
	 * 
	 * For further details take a look at the property definition: {@link #sync}.
	 * 
	 */
	isSync : vjo.NEEDS_IMPL,


	/**
	 * Invokes update() if effect&#8217;s remaining duration is
	 * bigger than zero, or ends the effect otherwise.
	 * 
	 */
	loop : vjo.NEEDS_IMPL,


	/**
	 * Calls update(), or invokes the effect, if not running.
	 * 
	 */
	render : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property delay.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #delay}.
	 * 
	 */
	resetDelay : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property duration.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #duration}.
	 * 
	 */
	resetDuration : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property fps.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #fps}.
	 * 
	 */
	resetFps : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property from.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #from}.
	 * 
	 */
	resetFrom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property queue.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #queue}.
	 * 
	 */
	resetQueue : vjo.NEEDS_IMPL,


	/**
	 * Resets the state to default.
	 * 
	 */
	resetState : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property sync.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #sync}.
	 * 
	 */
	resetSync : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property to.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #to}.
	 * 
	 */
	resetTo : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property transition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #transition}.
	 * 
	 */
	resetTransition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property delay.
	 * 
	 * For further details take a look at the property definition: {@link #delay}.
	 * 
	 */
	setDelay : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property duration.
	 * 
	 * For further details take a look at the property definition: {@link #duration}.
	 * 
	 */
	setDuration : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property fps.
	 * 
	 * For further details take a look at the property definition: {@link #fps}.
	 * 
	 */
	setFps : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property from.
	 * 
	 * For further details take a look at the property definition: {@link #from}.
	 * 
	 */
	setFrom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property queue.
	 * 
	 * For further details take a look at the property definition: {@link #queue}.
	 * 
	 */
	setQueue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property sync.
	 * 
	 * For further details take a look at the property definition: {@link #sync}.
	 * 
	 */
	setSync : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property to.
	 * 
	 * For further details take a look at the property definition: {@link #to}.
	 * 
	 */
	setTo : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property transition.
	 * 
	 * For further details take a look at the property definition: {@link #transition}.
	 * 
	 */
	setTransition : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called
	 * before the effect starts to configure
	 * the element or prepare other effects.
	 * 
	 * Fires &#8220;setup&#8221; event.
	 * 
	 */
	setup : vjo.NEEDS_IMPL,


	/**
	 * Starts the effect
	 * 
	 */
	start : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property sync.
	 * 
	 * For further details take a look at the property definition: {@link #sync}.
	 * 
	 */
	toggleSync : vjo.NEEDS_IMPL,


	/**
	 * This internal function is called
	 * each time the effect performs an
	 * step of the animation.
	 * 
	 * Sub classes will overwrite this to
	 * perform the actual changes on element
	 * properties.
	 * 
	 */
	update : vjo.NEEDS_IMPL
})
.endType();