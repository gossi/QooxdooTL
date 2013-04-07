/**
 * Measures JavaScript execution and rendering time for singular or repeated
 * operations.
 */
//>public
vjo.mtype('qx.dev.unit.MMeasure')
.protos({
	/**
	 * Logs a single measurement result
	 * 
	 */
	log : vjo.NEEDS_IMPL,


	/**
	 * Executes a given callback function once and measures JavaScript execution
	 * and rendering time
	 * 
	 */
	measure : vjo.NEEDS_IMPL,


	/**
	 * Repeatedly runs code and measures execution and rendering times
	 * 
	 */
	measureRepeated : vjo.NEEDS_IMPL
})
.endType();