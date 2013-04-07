/**
 * Abstract renderer for {@link qx.ui.form.Form}. This abstract rendere should
 * be the superclass of all form renderer. It takes the form, which is
 * supplied as constructor parameter and configures itself. So if you need to
 * set some additional information on your renderer before adding the widgets,
 * be sure to do that before calling this.base(arguments, form).
 */
//>public abstract
vjo.ctype('qx.ui.form.renderer.AbstractRenderer')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.form.renderer.IFormRenderer')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper to bind the item&#8217;s visibility to the label&#8217;s visibility.
	 * 
	 */
	_connectVisibility : vjo.NEEDS_IMPL,


	/**
	 * Creates the label text for the given form item.
	 * 
	 */
	_createLabelText : vjo.NEEDS_IMPL,


	/**
	 * Locale change event handler
	 * 
	 */
	_onChangeLocale : vjo.NEEDS_IMPL
})
.endType();