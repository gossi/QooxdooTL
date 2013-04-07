/**
 * A &#8220;empty&#8221; effect based on Base which executes the given function to
 * performe animation.
 */
//>public
vjo.ctype('qx.fx.effect.core.Custom')
.inherits('qx.fx.Base')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	update : vjo.NEEDS_IMPL
})
.endType();