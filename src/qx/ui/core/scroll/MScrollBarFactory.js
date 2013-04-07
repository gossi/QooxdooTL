/**
 * Include this widget if you want to create scrollbars depending on the global
 * &#8220;qx.nativeScrollBars&#8221; setting.
 */
//>public
vjo.mtype('qx.ui.core.scroll.MScrollBarFactory')
.protos({
	/**
	 * Creates a new scrollbar. This can either be a styled qooxdoo scrollbar
	 * or a native browser scrollbar.
	 * 
	 */
	_createScrollBar : vjo.NEEDS_IMPL
})
.endType();