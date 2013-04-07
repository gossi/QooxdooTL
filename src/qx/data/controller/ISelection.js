/**
 * Interface for data binding classes offering a selection.
 */
//>public
vjo.itype('qx.data.controller.ISelection')
.protos({
	/**
	 * Getter for the selection list.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the selection to its default value.
	 * 
	 */
	resetSelection : vjo.NEEDS_IMPL,


	/**
	 * Setter for the selection.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL
})
.endType();