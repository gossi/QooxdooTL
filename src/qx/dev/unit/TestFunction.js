/**
 * Wrapper object for a method containing unit test code.
 */
//>public
vjo.ctype('qx.dev.unit.TestFunction')
.inherits('qx.core.Object')
.protos({
	/**
	 * There are two ways to define a test function. First by passing a class
	 * and a method name to the contructor or second by giving a the method
	 * directly.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property className.
	 * 
	 * For further details take a look at the property definition: {@link #className}.
	 * 
	 */
	getClassName : vjo.NEEDS_IMPL,


	/**
	 * Get the full name of the test.
	 * 
	 */
	getFullName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	getName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property testClass.
	 * 
	 * For further details take a look at the property definition: {@link #testClass}.
	 * 
	 */
	getTestClass : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property testFunction.
	 * 
	 * For further details take a look at the property definition: {@link #testFunction}.
	 * 
	 */
	getTestFunction : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property className
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #className}.
	 * 
	 */
	initClassName : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property name
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	initName : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property testClass
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #testClass}.
	 * 
	 */
	initTestClass : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property testFunction
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #testFunction}.
	 * 
	 */
	initTestFunction : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property className.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #className}.
	 * 
	 */
	resetClassName : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property name.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	resetName : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property testClass.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #testClass}.
	 * 
	 */
	resetTestClass : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property testFunction.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #testFunction}.
	 * 
	 */
	resetTestFunction : vjo.NEEDS_IMPL,


	/**
	 * Runs the test and logs the test result to a {@link TestResult} instance,
	 * 
	 */
	run : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property className.
	 * 
	 * For further details take a look at the property definition: {@link #className}.
	 * 
	 */
	setClassName : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	setName : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property testClass.
	 * 
	 * For further details take a look at the property definition: {@link #testClass}.
	 * 
	 */
	setTestClass : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property testFunction.
	 * 
	 * For further details take a look at the property definition: {@link #testFunction}.
	 * 
	 */
	setTestFunction : vjo.NEEDS_IMPL,


	/**
	 * Call the test class&#8217; setUp method.
	 * 
	 */
	setUp : vjo.NEEDS_IMPL,


	/**
	 * Call the test class&#8217; tearDown method.
	 * 
	 */
	tearDown : vjo.NEEDS_IMPL
})
.endType();