/**
 * Assertion errors are thrown if an assertion in {@link qx.core.Assert}
 * fails.
 */
//>public
vjo.ctype('qx.core.AssertionError')
.inherits('qx.type.BaseError')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Stack trace of the error
	 * 
	 */
	getStackTrace : vjo.NEEDS_IMPL
})
.endType();