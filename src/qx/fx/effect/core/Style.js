/**
 * A simple effect which changes the given CSS attribute during the
 * duration of the animation. A function can be given to modify the
 * incoming numeric value.
 */
//>public
vjo.ctype('qx.fx.effect.core.Style')
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