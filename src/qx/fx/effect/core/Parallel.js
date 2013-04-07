/**
 * Helper class for building combination effects with
 * several effects running synchronized.
 */
//>public
vjo.ctype('qx.fx.effect.core.Parallel')
.inherits('qx.fx.Base')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Finishes all child effects
	 * 
	 */
	finish : vjo.NEEDS_IMPL,


	/**
	 */
	start : vjo.NEEDS_IMPL,


	/**
	 * Renders all child effects
	 * 
	 */
	update : vjo.NEEDS_IMPL
})
.endType();