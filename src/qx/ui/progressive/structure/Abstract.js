/**
 * Abstract structure definition for Progressive
 */
//>public abstract
vjo.ctype('qx.ui.progressive.structure.Abstract')
.inherits('qx.core.Object')
.protos({
	/**
	 * The abstract structure for use by Progressive.  It defines the pane
	 * container in which items are progressively rendered.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Apply the structure typically defined in the constructor to the
	 * Progressive.
	 * 
	 */
	applyStructure : vjo.NEEDS_IMPL,


	/**
	 * Get the pane in which this Progressive renders.
	 * 
	 */
	getPane : vjo.NEEDS_IMPL
})
.endType();