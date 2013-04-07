/**
 * Data Model for Progressive renderer.
 */
//>public abstract
vjo.ctype('qx.ui.progressive.model.Abstract')
.inherits('qx.core.Object')
.protos({
	/**
	 * Get the number of data elements currently available.
	 * 
	 */
	getElementCount : vjo.NEEDS_IMPL,


	/**
	 * Get the next available element from the data model.
	 * 
	 */
	getNextElement : vjo.NEEDS_IMPL
})
.endType();