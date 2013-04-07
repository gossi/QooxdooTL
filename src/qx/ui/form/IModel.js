/**
 * Each object which wants to store data representative for the real item
 * should implement this interface.
 */
//>public
vjo.itype('qx.ui.form.IModel')
.protos({
	/**
	 * Returns the representative data for the item
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the representative data to null.
	 * 
	 */
	resetModel : vjo.NEEDS_IMPL,


	/**
	 * Set the representative data for the item.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL
})
.endType();