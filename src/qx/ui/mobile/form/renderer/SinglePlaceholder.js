/**
 * SinglePlaceholder is a class used to render forms into a mobile page.
 * It presents a label into the placeholder of the form elements
 */
//>public
vjo.ctype('qx.ui.mobile.form.renderer.SinglePlaceholder')
.inherits('qx.ui.mobile.form.renderer.Single')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	addItems : vjo.NEEDS_IMPL
})
.endType();