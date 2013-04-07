/**
 * This classes could be used to insert qooxdoo islands into existing
 * web pages. You can use the isles to place any qooxdoo powered widgets
 * inside a layout made using traditional HTML markup and CSS.
 * 
 * The size of the widget in each dimension can either be determined by the
 * size hint of the inline&#8217;s children or by the size of the root DOM element. If
 * dynamicX/dynamicY is true the width/height of the DOM
 * element is used.
 * 
 * This class uses {@link qx.ui.layout.Basic} as default layout. The layout
 * can be changed using the {@link #setLayout} method.
 * 
 * To position popups and tooltips please have a look at {@link qx.ui.root.Page}.
 */
//>public
vjo.ctype('qx.ui.root.Inline')
.inherits('qx.ui.root.Abstract')
.mixin('qx.ui.core.MLayoutHandling')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Performs several checks for dynamic mode and adds the &#8220;resize&#8221; listener
	 * 
	 */
	__initDynamicMode : vjo.NEEDS_IMPL,


	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 */
	_createContainerElement : vjo.NEEDS_IMPL,


	/**
	 * Listener for the element&#8217;s resize event
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Listener for the window&#8217;s resize event.
	 * 
	 */
	_onWindowResize : vjo.NEEDS_IMPL
})
.endType();