/**
 * This widget provides a root widget for popups and tooltips if qooxdoo is used
 * inside a traditional HTML page. Widgets placed into a page will overlay the
 * HTML content.
 * 
 * For this reason the widget&#8217;s layout is initialized with an instance of
 * {@link qx.ui.layout.Basic}. The widget&#8217;s layout cannot be changed.
 * 
 * The page widget does not support paddings and decorators with insets.
 * 
 * Note: This widget does not support decorations!
 * 
 * If you want to place widgets inside existing DOM elements
 * use {@link qx.ui.root.Inline}.
 */
//>public
vjo.ctype('qx.ui.root.Page')
.inherits('qx.ui.root.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adjust html element size on layout resizes.
	 * 
	 */
	__onResize : vjo.NEEDS_IMPL,


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
	 */
	_createContainerElement : vjo.NEEDS_IMPL,


	/**
	 */
	_createContentElement : vjo.NEEDS_IMPL,


	/**
	 * Whether the configured layout supports a maximized window
	 * e.g. is a Canvas.
	 * 
	 */
	supportsMaximize : vjo.NEEDS_IMPL
})
.endType();