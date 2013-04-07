/**
 * The default list item renderer. Used as the default renderer by the
 * {@link qx.ui.mobile.list.provider.Provider}. Configure the renderer
 * by setting the {@link qx.ui.mobile.list.List#delegate} property.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 * 
 *   // Create the list with a delegate that
 *   // configures the list item.
 *   var list = new qx.ui.mobile.list.List({
 *     configureItem : function(item, data, row)
 *     {
 *       item.setImage("path/to/image.png");
 *       item.setTitle(data.title);
 *       item.setSubtitle(data.subtitle);
 *     }
 *   });
 * 
 * 
 * This example creates a list with a delegate that configures the list item with
 * the given data.
 */
//>public
vjo.ctype('qx.ui.mobile.list.renderer.Default')
.inherits('qx.ui.mobile.list.renderer.Abstract')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates and returns the image widget. Override this to adapt the widget code.
	 * 
	 */
	_createImage : vjo.NEEDS_IMPL,


	/**
	 * Creates and returns the right container composite. Override this to adapt the widget code.
	 * 
	 */
	_createRightContainer : vjo.NEEDS_IMPL,


	/**
	 * Creates and returns the subtitle widget. Override this to adapt the widget code.
	 * 
	 */
	_createSubtitle : vjo.NEEDS_IMPL,


	/**
	 * Creates and returns the title widget. Override this to adapt the widget code.
	 * 
	 */
	_createTitle : vjo.NEEDS_IMPL,


	/**
	 * Inits the widgets for the renderer.
	 * 
	 */
	_init : vjo.NEEDS_IMPL,


	/**
	 * Returns the image widget which is used for this renderer.
	 * 
	 */
	getImageWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the subtitle widget which is used for this renderer.
	 * 
	 */
	getSubtitleWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the title widget which is used for this renderer.
	 * 
	 */
	getTitleWidget : vjo.NEEDS_IMPL,


	/**
	 */
	reset : vjo.NEEDS_IMPL,


	/**
	 * Sets the source of the image widget.
	 * 
	 */
	setImage : vjo.NEEDS_IMPL,


	/**
	 * Sets the value of the subtitle widget.
	 * 
	 */
	setSubtitle : vjo.NEEDS_IMPL,


	/**
	 * Sets the value of the title widget.
	 * 
	 */
	setTitle : vjo.NEEDS_IMPL
})
.endType();