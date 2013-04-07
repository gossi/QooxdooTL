/**
 * For a mobile application. Supports the mobile widget set.
 */
//>public
vjo.ctype('qx.application.Mobile')
.inherits('qx.core.Object')
.satisfies('qx.application.IApplication')
.mixin('qx.locale.MTranslation')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates the application&#8217;s root widget. Override this function to create
	 * your own root widget.
	 * 
	 */
	_createRootWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the application&#8217;s root widget.
	 * 
	 */
	getRoot : vjo.NEEDS_IMPL
})
.endType();