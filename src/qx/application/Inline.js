/**
 * For a GUI application on a traditional, HTML-dominated web page.
 * 
 * The ideal environment for typical portal sites which use just a few qooxdoo
 * widgets. {@link qx.ui.root.Inline} can be used to embed qooxdoo widgets
 * into the page flow.
 */
//>public
vjo.ctype('qx.application.Inline')
.inherits('qx.application.AbstractGui')
.protos({
	/**
	 */
	_createRootWidget : vjo.NEEDS_IMPL
})
.endType();