/**
 * The desktop is a widget, which can act as container for windows. It can be
 * used to define a clipping region for internal windows e.g. to create
 * an MDI like application.
 */
//>public
vjo.ctype('qx.ui.window.Desktop')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.window.IDesktop')
.mixin(['qx.ui.core.MChildrenHandling','qx.ui.window.MDesktop','qx.ui.core.MBlocker'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();