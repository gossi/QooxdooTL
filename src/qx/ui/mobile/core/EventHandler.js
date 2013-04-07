/**
 * Connects the widgets to the browser DOM events.
 */
//>public
vjo.ctype('qx.ui.mobile.core.EventHandler')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Dispatches a DOM event on a widget.
	 * 
	 */
	_dispatchEvent : vjo.NEEDS_IMPL
})
.endType();