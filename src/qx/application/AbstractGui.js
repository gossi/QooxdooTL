/**
 * Abstract base class for GUI applications using qooxdoo widgets.
 */
//>public abstract
vjo.ctype('qx.application.AbstractGui')
.inherits('qx.core.Object')
.satisfies('qx.application.IApplication')
.mixin('qx.locale.MTranslation')
.protos({
	/**
	 * Create the root widget. This method is abstract and must be overridden
	 * by sub classes.
	 * 
	 */
	_createRootWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the application&#8217;s root widget. The root widgets can act as container
	 * for popups. It is configured with a {@link qx.ui.layout.Basic} (if the
	 * application is an inline application) layout or a {@link qx.ui.layout.Canvas}
	 * (if the application is a standalone application) layout .
	 * 
	 * The root has the same add method as the configured layout
	 * ({@link qx.ui.layout.Basic} or {@link qx.ui.layout.Canvas}).
	 * 
	 */
	getRoot : vjo.NEEDS_IMPL,


	/**
	 * Updates the GUI rendering
	 * 
	 */
	render : vjo.NEEDS_IMPL
})
.endType();