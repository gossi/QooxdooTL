/**
 * A TestSuite is a collection of test functions, classes and other test suites,
 * which should be run together.
 */
//>public abstract
vjo.ctype('qx.dev.unit.AbstractTestSuite')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Add a test function to the suite, which fails.
	 * 
	 */
	addFail : vjo.NEEDS_IMPL,


	/**
	 * Add a single function to test
	 * 
	 */
	addTestFunction : vjo.NEEDS_IMPL,


	/**
	 * Add a method from a class as test to the suite
	 * 
	 */
	addTestMethod : vjo.NEEDS_IMPL,


	/**
	 * Get a list of all test methods in the suite
	 * 
	 */
	getTestMethods : vjo.NEEDS_IMPL,


	/**
	 * Run all tests using the given test result
	 * 
	 */
	run : vjo.NEEDS_IMPL
})
.endType();