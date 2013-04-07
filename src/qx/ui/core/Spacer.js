/**
 * A Spacer is a &#8220;virtual&#8221; widget, which can be placed into any layout and takes
 * the space a normal widget of the same size would take.
 * 
 * Spacers are invisible and very light weight because they don&#8217;t require any
 * DOM modifications.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var container = new qx.ui.container.Composite(new qx.ui.layout.HBox());
 *   container.add(new qx.ui.core.Widget());
 *   container.add(new qx.ui.core.Spacer(50));
 *   container.add(new qx.ui.core.Widget());
 * 
 * 
 * This example places two widgets and a spacer into a container with a
 * horizontal box layout. In this scenario the spacer creates an empty area of
 * 50 pixel width between the two widgets.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.core.Spacer')
.inherits('qx.ui.core.LayoutItem')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Recursively adds all children to the given queue
	 * 
	 */
	addChildrenToQueue : vjo.NEEDS_IMPL,


	/**
	 * Helper method called from the visibility queue to detect outstanding changes
	 * to the appearance.
	 * 
	 */
	checkAppearanceNeeds : vjo.NEEDS_IMPL,


	/**
	 * Removes this widget from its parent and dispose it.
	 * 
	 * Please note that the widget is not disposed synchronously. The
	 * real dispose happens after the next queue flush.
	 * 
	 */
	destroy : vjo.NEEDS_IMPL
})
.endType();