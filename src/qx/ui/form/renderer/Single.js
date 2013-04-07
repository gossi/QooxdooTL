/**
 * Single column renderer for {@link qx.ui.form.Form}.
 */
//>public
vjo.ctype('qx.ui.form.renderer.Single')
.inherits('qx.ui.form.renderer.AbstractRenderer')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates a header label for the form groups.
	 * 
	 */
	_createHeader : vjo.NEEDS_IMPL,


	/**
	 * Creates a label for the given form item.
	 * 
	 */
	_createLabel : vjo.NEEDS_IMPL,


	/**
	 * Adds a button the form renderer. All buttons will be added in a
	 * single row at the bottom of the form.
	 * 
	 */
	addButton : vjo.NEEDS_IMPL,


	/**
	 * Add a group of form items with the corresponding names. The names are
	 * displayed as label.
	 * The title is optional and is used as grouping for the given form
	 * items.
	 * 
	 */
	addItems : vjo.NEEDS_IMPL,


	/**
	 * Returns the set layout for configuration.
	 * 
	 */
	getLayout : vjo.NEEDS_IMPL
})
.endType();