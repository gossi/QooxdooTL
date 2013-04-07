/**
 * Abstract renderer for Progressive.
 */
//>public abstract
vjo.ctype('qx.ui.progressive.renderer.Abstract')
.inherits('qx.core.Object')
.protos({
	/**
	 * Join this renderer to its {@link qx.ui.progressive.Progressive}.
	 * 
	 */
	join : vjo.NEEDS_IMPL,


	/**
	 * Render the provided element in the renderer&#8217;s unique way.
	 * 
	 */
	render : vjo.NEEDS_IMPL
})
.endType();