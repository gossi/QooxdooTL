/**
 * Base class for all unit tests.
 */
//>public
vjo.ctype('qx.dev.unit.TestCase')
.inherits('qx.core.Object')
.mixin('qx.core.MAssert')
.protos({
	/**
	 * Returns the (computed) value of the property testFunc.
	 * 
	 * For further details take a look at the property definition: {@link #testFunc}.
	 * 
	 */
	getTestFunc : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property testResult.
	 * 
	 * For further details take a look at the property definition: {@link #testResult}.
	 * 
	 */
	getTestResult : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property testFunc
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #testFunc}.
	 * 
	 */
	initTestFunc : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property testResult
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #testResult}.
	 * 
	 */
	initTestResult : vjo.NEEDS_IMPL,


	/**
	 * Whether If debugging code is enabled. (i.e. the setting
	 * qx.debug has the value on.)
	 * 
	 */
	isDebugOn : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property testFunc.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #testFunc}.
	 * 
	 */
	resetTestFunc : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property testResult.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #testResult}.
	 * 
	 */
	resetTestResult : vjo.NEEDS_IMPL,


	/**
	 * Cancel a timeout started with wait() and run the given
	 * function. Used for asynchronous tests, e.g. in a listener&#8217;s callback
	 * function.
	 * 
	 * Important
	 * 
	 * The used deferredFunction is the last function which is executed before
	 * the whole test case is disposed. You have to make sure that this resume
	 * function is only used once in the whole test case.
	 * 
	 */
	resume : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property testFunc.
	 * 
	 * For further details take a look at the property definition: {@link #testFunc}.
	 * 
	 */
	setTestFunc : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property testResult.
	 * 
	 * For further details take a look at the property definition: {@link #testResult}.
	 * 
	 */
	setTestResult : vjo.NEEDS_IMPL,


	/**
	 * Skip this test. Any code after a call to this method will not be executed.
	 * 
	 */
	skip : vjo.NEEDS_IMPL,


	/**
	 * Instruct the test to wait. Used for asynchronous tests.
	 * 
	 */
	wait : vjo.NEEDS_IMPL
})
.endType();