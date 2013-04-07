/**
 * An appender that writes all messages to a memory container. The messages
 * can be retrieved later, f. i. when an error dialog pops up and the question
 * arises what actions have caused the error.
 * 
 * A mark feature also exists which can be used to remember a point in time.
 * When retrieving log events, it is possible to get only those events
 * after the marked time. This is useful if data from the buffer is extracted
 * and f. i. sent to a logging system. Whenever this happens, a mark() call
 * can be used so that the next extraction will only get new data.
 */
//>public
vjo.ctype('qx.log.appender.RingBuffer')
.inherits('qx.util.RingBuffer')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Clears the log history
	 * 
	 */
	clearHistory : vjo.NEEDS_IMPL,


	/**
	 * Returns all stored log events
	 * 
	 */
	getAllLogEvents : vjo.NEEDS_IMPL,


	/**
	 * Get the maximum number of messages to hold
	 * 
	 */
	getMaxMessages : vjo.NEEDS_IMPL,


	/**
	 * Processes a single log entry
	 * 
	 */
	process : vjo.NEEDS_IMPL,


	/**
	 * Returns log events which have been logged previously.
	 * 
	 */
	retrieveLogEvents : vjo.NEEDS_IMPL,


	/**
	 * Set the maximum number of messages to hold. If null the number of
	 * messages is not limited.
	 * 
	 * Warning: Changing this property will clear the events logged so far.
	 * 
	 */
	setMaxMessages : vjo.NEEDS_IMPL
})
.endType();