/**
 * The test loader is the base class of a native application, which can be used
 * to run tests from a non-GUI application or from within JSUnit.
 */
//>public
vjo.ctype('qx.dev.unit.TestLoaderNative')
.inherits('qx.application.Native')
.protos({
	/**
	 */
	main : vjo.NEEDS_IMPL
})
.endType();