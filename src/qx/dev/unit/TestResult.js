/**
 * The test result class runs the test functions and fires events depending on
 * the result of the test run.
 */
//>public
vjo.ctype('qx.dev.unit.TestResult')
.inherits('qx.core.Object')
.protos({
	/**
	 * EXPERIMENTAL
	 * Removes any listeners left over after a test&#8217;s run.
	 * 
	 */
	__removeListeners : vjo.NEEDS_IMPL,


	/**
	 * EXPERIMENTAL
	 * Wraps the AUT&#8216;s qx.event.Registration.addListener function so that it
	 * stores references to all added listeners in an array attached to the
	 * current test function. This is done so that any listeners left over after
	 * test execution can be removed to make sure they don&#8217;t influence other
	 * tests.
	 * 
	 */
	__wrapAddListener : vjo.NEEDS_IMPL,


	/**
	 * Fire an error event
	 * 
	 */
	_createError : vjo.NEEDS_IMPL,


	/**
	 * Run the test
	 * 
	 */
	run : vjo.NEEDS_IMPL,


	/**
	 * Calls the generic tearDown method on the test class, then the specific
	 * tearDown for the test, if one is defined.
	 * 
	 */
	tearDown : vjo.NEEDS_IMPL
})
.endType();