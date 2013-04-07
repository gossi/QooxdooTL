/**
 * Data Model for Progressive renderer.
 */
//>public
vjo.ctype('qx.ui.progressive.model.Default')
.inherits('qx.ui.progressive.model.Abstract')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Add a single element to be progressively renderered.  The element must
	 * be an object which contains at least two members: renderer (the
	 * renderer name) and data.
	 * 
	 */
	addElement : vjo.NEEDS_IMPL,


	/**
	 * Add elements to be progressively renderered.  Each element must be an
	 * object which contains at least two members: renderer (the renderer
	 * name) and data.
	 * 
	 */
	addElements : vjo.NEEDS_IMPL,


	/**
	 */
	getElementCount : vjo.NEEDS_IMPL,


	/**
	 */
	getNextElement : vjo.NEEDS_IMPL
})
.endType();