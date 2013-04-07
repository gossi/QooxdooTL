/**
 * This appender is used to log to an existing DOM element
 */
//>public
vjo.ctype('qx.log.appender.Element')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Clears the current output.
	 * 
	 */
	clear : vjo.NEEDS_IMPL,


	/**
	 * Processes a single log entry
	 * 
	 */
	process : vjo.NEEDS_IMPL,


	/**
	 * Configures the DOM element to use.
	 * 
	 */
	setElement : vjo.NEEDS_IMPL
})
.endType();