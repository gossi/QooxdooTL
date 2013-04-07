/**
 * This error is thrown by the unit test class if an infrastructure requirement
 * is not met. The unit testing framework should skip the test and visually mark
 * the test as not having been executed.
 */
//>public
vjo.ctype('qx.dev.unit.RequirementError')
.inherits('Error')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the ID of the requirement that was not satisfied.
	 * 
	 */
	getRequirement : vjo.NEEDS_IMPL,


	/**
	 * Returns a string representation of the error.
	 * 
	 */
	toString : vjo.NEEDS_IMPL
})
.endType();