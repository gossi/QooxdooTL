/**
 * This interface defines the necessary features a form renderer should have.
 * Keep in mind that all renderes has to be widgets.
 */
//>public
vjo.itype('qx.ui.form.renderer.IFormRenderer')
.protos({
	/**
	 * Adds a button the form renderer.
	 * 
	 */
	addButton : vjo.NEEDS_IMPL,


	/**
	 * Add a group of form items with the corresponding names. The names should
	 * be displayed as hint for the user what to do with the form item.
	 * The title is optional and can be used as grouping for the given form
	 * items.
	 * 
	 */
	addItems : vjo.NEEDS_IMPL
})
.endType();