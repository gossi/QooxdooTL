/**
 * Function &#8220;renderer&#8221; for Progressive.
 * This is a renderer that simply calls the function provided by the data
 * element.
 */
//>public
vjo.ctype('qx.ui.progressive.renderer.FunctionCaller')
.inherits('qx.ui.progressive.renderer.Abstract')
.protos({
	/**
	 */
	render : vjo.NEEDS_IMPL
})
.endType();