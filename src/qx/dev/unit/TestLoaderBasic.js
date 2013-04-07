/**
 * Test loader for server-side/&#8220;headless&#8221; environments
 */
//>public
vjo.ctype('qx.dev.unit.TestLoaderBasic')
.inherits('qx.core.Object')
.mixin('qx.dev.unit.MTestLoader')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();