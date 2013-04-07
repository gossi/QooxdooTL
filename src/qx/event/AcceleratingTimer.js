/**
 * Timer, which accelerates after each interval. The initial delay and the
 * interval time can be set using the properties {@link #firstInterval}
 * and {@link #interval}. The {@link #interval} events will be fired with
 * decreasing interval times while the timer is running, until the {@link #minimum}
 * is reached. The {@link #decrease} property sets the amount of milliseconds
 * which will decreased after every firing.
 * 
 * This class is e.g. used in the {@link qx.ui.form.RepeatButton} and
 * {@link qx.ui.form.HoverButton} widgets.
 */
//>public
vjo.ctype('qx.event.AcceleratingTimer')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Interval event handler
	 * 
	 */
	_onInterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property decrease.
	 * 
	 * For further details take a look at the property definition: {@link #decrease}.
	 * 
	 */
	getDecrease : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property firstInterval.
	 * 
	 * For further details take a look at the property definition: {@link #firstInterval}.
	 * 
	 */
	getFirstInterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property interval.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	getInterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property minimum.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	getMinimum : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property decrease
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #decrease}.
	 * 
	 */
	initDecrease : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property firstInterval
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #firstInterval}.
	 * 
	 */
	initFirstInterval : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property interval
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	initInterval : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property decrease.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #decrease}.
	 * 
	 */
	resetDecrease : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property firstInterval.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #firstInterval}.
	 * 
	 */
	resetFirstInterval : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property interval.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	resetInterval : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property decrease.
	 * 
	 * For further details take a look at the property definition: {@link #decrease}.
	 * 
	 */
	setDecrease : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property firstInterval.
	 * 
	 * For further details take a look at the property definition: {@link #firstInterval}.
	 * 
	 */
	setFirstInterval : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property interval.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	setInterval : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property minimum.
	 * 
	 * For further details take a look at the property definition: {@link #minimum}.
	 * 
	 */
	setMinimum : vjo.NEEDS_IMPL,


	/**
	 * Reset and start the timer.
	 * 
	 */
	start : vjo.NEEDS_IMPL,


	/**
	 * Stop the timer
	 * 
	 */
	stop : vjo.NEEDS_IMPL
})
.endType();