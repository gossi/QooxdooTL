/**
 * Test result class, which can export the results to JSUnit
 */
//>public
vjo.ctype('qx.dev.unit.JsUnitTestResult')
.inherits('qx.dev.unit.TestResult')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Export the test functions to JSUnit
	 * 
	 */
	exportToJsUnit : vjo.NEEDS_IMPL,


	/**
	 * Run the test
	 * 
	 */
	run : vjo.NEEDS_IMPL
})
.endType();