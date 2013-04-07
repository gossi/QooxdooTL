/**
 * EXPERIMENTAL!
 * 
 * Abstract base class for selection manager, which manage selectable items
 * rendered in a virtual {@link qx.ui.virtual.core.Pane}.
 */
//>public
vjo.ctype('qx.ui.virtual.selection.Abstract')
.inherits('qx.ui.core.selection.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_capture : vjo.NEEDS_IMPL,


	/**
	 */
	_getDimension : vjo.NEEDS_IMPL,


	/**
	 */
	_getLocation : vjo.NEEDS_IMPL,


	/**
	 */
	_getScroll : vjo.NEEDS_IMPL,


	/**
	 */
	_isSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_releaseCapture : vjo.NEEDS_IMPL,


	/**
	 */
	_scrollBy : vjo.NEEDS_IMPL,


	/**
	 */
	_styleSelectable : vjo.NEEDS_IMPL,


	/**
	 * Attach key events to manipulate the selection using the keyboard. The
	 * event target doesn&#8217;t need to be the pane itself. It can be an widget,
	 * which received key events. Usually the key event target is the
	 * {@link qx.ui.virtual.core.Scroller}.
	 * 
	 */
	attachKeyEvents : vjo.NEEDS_IMPL,


	/**
	 * Attach list events. The selection mode one need to know,
	 * when selectable items are added or removed. If this mode is used the
	 * list parameter must fire addItem and
	 * removeItem events.
	 * 
	 */
	attachListEvents : vjo.NEEDS_IMPL,


	/**
	 * Attach mouse events to the managed pane.
	 * 
	 */
	attachMouseEvents : vjo.NEEDS_IMPL,


	/**
	 * Detach key events.
	 * 
	 */
	detachKeyEvents : vjo.NEEDS_IMPL,


	/**
	 * Detach list events.
	 * 
	 */
	detachListEvents : vjo.NEEDS_IMPL,


	/**
	 * Detach mouse events from the managed pane.
	 * 
	 */
	detatchMouseEvents : vjo.NEEDS_IMPL
})
.endType();