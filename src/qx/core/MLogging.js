/**
 * This mixin offers the basic logging features offered by {@link qx.log.Logger}.
 */
//>public
vjo.mtype('qx.core.MLogging')
.protos({
	/**
	 * Helper that calls the appropriate logger function with the current object
	 * and any number of items.
	 * 
	 */
	__logMessage : vjo.NEEDS_IMPL,


	/**
	 * Logs a debug message.
	 * 
	 */
	debug : vjo.NEEDS_IMPL,


	/**
	 * Logs an error message.
	 * 
	 */
	error : vjo.NEEDS_IMPL,


	/**
	 * Logs an info message.
	 * 
	 */
	info : vjo.NEEDS_IMPL,


	/**
	 * Prints the current stack trace
	 * 
	 */
	trace : vjo.NEEDS_IMPL,


	/**
	 * Logs a warning message.
	 * 
	 */
	warn : vjo.NEEDS_IMPL
})
.endType();