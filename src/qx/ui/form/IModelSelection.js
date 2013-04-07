/**
 * This interface should be used in all objects managing a set of items
 * implementing {@link qx.ui.form.IModel}.
 */
//>public
vjo.itype('qx.ui.form.IModelSelection')
.protos({
	/**
	 * Returns an array of the selected models.
	 * 
	 */
	getModelSelection : vjo.NEEDS_IMPL,


	/**
	 * Tries to set the selection using the given array containing the
	 * representative models for the selectables.
	 * 
	 */
	setModelSelection : vjo.NEEDS_IMPL
})
.endType();