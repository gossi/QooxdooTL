/**
 * A TestSuite is a collection of test functions, classes and other test suites,
 * which should be run together.
 */
//>public
vjo.ctype('qx.dev.unit.TestSuite')
.inherits('qx.dev.unit.AbstractTestSuite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Add a test class or namespace to the suite
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Add a test class to the suite
	 * 
	 */
	addTestClass : vjo.NEEDS_IMPL,


	/**
	 * Add all tests from the given namespace to the suite
	 * 
	 */
	addTestNamespace : vjo.NEEDS_IMPL,


	/**
	 * Get a list of all test classes in the suite
	 * 
	 */
	getTestClasses : vjo.NEEDS_IMPL
})
.endType();