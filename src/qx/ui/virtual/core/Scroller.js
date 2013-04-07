/**
 * EXPERIMENTAL!
 * 
 * The Scroller wraps a {@link Pane} and provides scroll bars to interactively
 * scroll the pane&#8217;s content.
 */
//>public
vjo.ctype('qx.ui.virtual.core.Scroller')
.inherits('qx.ui.core.scroll.AbstractScrollArea')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 */
	_onScrollBarX : vjo.NEEDS_IMPL,


	/**
	 */
	_onScrollBarY : vjo.NEEDS_IMPL,


	/**
	 * NOT IMPLEMENTED
	 * 
	 */
	getItemBottom : vjo.NEEDS_IMPL,


	/**
	 * NOT IMPLEMENTED
	 * 
	 */
	getItemLeft : vjo.NEEDS_IMPL,


	/**
	 * NOT IMPLEMENTED
	 * 
	 */
	getItemRight : vjo.NEEDS_IMPL,


	/**
	 * NOT IMPLEMENTED
	 * 
	 */
	getItemTop : vjo.NEEDS_IMPL,


	/**
	 * Get the scroller&#8217;s virtual pane.
	 * 
	 */
	getPane : vjo.NEEDS_IMPL
})
.endType();