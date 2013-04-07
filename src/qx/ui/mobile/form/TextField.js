/**
 * The TextField is a single-line text input field.
 */
//>public
vjo.ctype('qx.ui.mobile.form.TextField')
.inherits('qx.ui.mobile.form.Input')
.satisfies('qx.ui.form.IStringForm')
.mixin(['qx.ui.mobile.form.MValue','qx.ui.mobile.form.MText'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_getType : vjo.NEEDS_IMPL
})
.endType();