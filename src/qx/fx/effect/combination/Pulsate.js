/**
 * Combination effect &#8220;Pulsate&#8221;
 * 
 * Fades the element in and out several times.
 */
//>public
vjo.ctype('qx.fx.effect.combination.Pulsate')
.inherits('qx.fx.Base')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property duration.
	 * 
	 * For further details take a look at the property definition: {@link #duration}.
	 * 
	 */
	_applyDuration : vjo.NEEDS_IMPL,


	/**
	 */
	afterFinish : vjo.NEEDS_IMPL,


	/**
	 */
	beforeSetup : vjo.NEEDS_IMPL,


	/**
	 * Cancels the member effects first and then cancels itself.
	 * 
	 */
	cancel : vjo.NEEDS_IMPL,


	/**
	 */
	end : vjo.NEEDS_IMPL,


	/**
	 */
	start : vjo.NEEDS_IMPL
})
.endType();