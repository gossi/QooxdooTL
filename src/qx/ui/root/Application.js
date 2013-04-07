/**
 * This is the root widget for qooxdoo applications with an
 * &#8220;application&#8221; like behaviour. The widget will span the whole viewport
 * and the document body will have no scrollbars.
 * 
 * The root widget does not support paddings and decorators with insets.
 * 
 * If you want to enhance HTML pages with qooxdoo widgets please use
 * {@link qx.ui.root.Page} eventually in combination with
 * {@link qx.ui.root.Inline} widgets.
 * 
 * This class uses a {@link qx.ui.layout.Canvas} as fixed layout. The layout
 * cannot be changed.
 */
//>public
vjo.ctype('qx.ui.root.Application')
.inherits('qx.ui.root.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property decorator.
	 * 
	 * For further details take a look at the property definition: {@link #decorator}.
	 * 
	 */
	_applyDecorator : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties paddingBottom, paddingLeft, paddingRight and paddingTop.
	 * 
	 * For further details take a look at the property definitions: {@link #paddingBottom}, {@link #paddingLeft}, {@link #paddingRight} and {@link #paddingTop}.
	 * 
	 */
	_applyPadding : vjo.NEEDS_IMPL,


	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 * Create the widget&#8217;s container HTML element.
	 * 
	 */
	_createContainerElement : vjo.NEEDS_IMPL,


	/**
	 * Listener for window&#8217;s resize event
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL
})
.endType();