/**
 * This mixin contains the methods needed to implement a loader that will
 * create a suite of unit tests from a given namespace and run it directly or
 * provide the necessary information to a more advanced runner application
 */
//>public
vjo.mtype('qx.dev.unit.MTestLoader')
.protos({
	/**
	 * Parses the url parameters and tries to find the classes to test.
	 * The pattern is like index.html?testclass=qx.test
	 * 
	 */
	_getClassNameFromUrl : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property suite.
	 * 
	 * For further details take a look at the property definition: {@link #suite}.
	 * 
	 */
	getSuite : vjo.NEEDS_IMPL,


	/**
	 * Get a list of test descriptions
	 * 
	 */
	getTestDescriptions : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property suite
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #suite}.
	 * 
	 */
	initSuite : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property suite.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #suite}.
	 * 
	 */
	resetSuite : vjo.NEEDS_IMPL,


	/**
	 * Run all tests and export the results to JSUnit
	 * 
	 */
	runJsUnit : vjo.NEEDS_IMPL,


	/**
	 * Run tests as standalone application
	 * 
	 */
	runStandAlone : vjo.NEEDS_IMPL,


	/**
	 * Runs exactly one test from the test suite
	 * 
	 */
	runTests : vjo.NEEDS_IMPL,


	/**
	 * Runs all tests inside of the given namespace
	 * 
	 */
	runTestsFromNamespace : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property suite.
	 * 
	 * For further details take a look at the property definition: {@link #suite}.
	 * 
	 */
	setSuite : vjo.NEEDS_IMPL,


	/**
	 * Sets the top level namespace of the test cases to test. All classes
	 * below this namespace extending {@link TestCase} will be tested.
	 * 
	 */
	setTestNamespace : vjo.NEEDS_IMPL
})
.endType();