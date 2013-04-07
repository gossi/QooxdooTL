/**
 * Performance test result object. Used to communicate measurements to the unit
 * testing framework.
 */
//>public
vjo.ctype('qx.dev.unit.MeasurementResult')
.inherits('Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns a readable summary of this result
	 * 
	 */
	toString : vjo.NEEDS_IMPL
})
.endType();