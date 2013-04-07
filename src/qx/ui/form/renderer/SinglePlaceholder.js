/**
 * Rendere using the placeholder property of {@link qx.ui.form.AbstractField}
 * to visualize the name.
 */
//>public
vjo.ctype('qx.ui.form.renderer.SinglePlaceholder')
.inherits('qx.ui.form.renderer.Single')
.satisfies('qx.ui.form.renderer.IFormRenderer')
.protos({
	/**
	 */
	addItems : vjo.NEEDS_IMPL
})
.endType();