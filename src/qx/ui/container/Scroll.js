/**
 * Container, which allows vertical and horizontal scrolling if the contents is
 * larger than the container.
 * 
 * Note that this class can only have one child widget. This container has a
 * fixed layout, which cannot be changed.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   // create scroll container
 *   var scroll = new qx.ui.container.Scroll().set({
 *     width: 300,
 *     height: 200
 *   });
 * 
 *   // add a widget which is larger than the container
 *   scroll.add(new qx.ui.core.Widget().set({
 *     width: 600,
 *     minWidth: 600,
 *     height: 400,
 *     minHeight: 400
 *   });
 * 
 *   this.getRoot().add(scroll);
 * 
 * 
 * This example creates a scroll container and adds a widget, which is larger
 * than the container. This will cause the container to display vertical
 * and horizontal toolbars.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.container.Scroll')
.inherits('qx.ui.core.scroll.AbstractScrollArea')
.mixin('qx.ui.core.MContentPadding')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the element, to which the content padding should be applied.
	 * 
	 */
	_getContentPaddingTarget : vjo.NEEDS_IMPL,


	/**
	 * Sets the content of the scroll container. Scroll containers
	 * may only have one child, so it always replaces the current
	 * child with the given one.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns the content of the scroll container.
	 * 
	 * Scroll containers may only have one child. This
	 * method returns an array containing the child or an empty array.
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the content of the scroll area.
	 * 
	 */
	remove : vjo.NEEDS_IMPL
})
.endType();