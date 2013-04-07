/**
 * Container, which allows, depending on the set variant qx.mobile.nativescroll,
 * vertical and horizontal scrolling if the contents is larger than the container.
 * 
 * Note that this class can only have one child widget. This container has a
 * fixed layout, which cannot be changed.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   // create the scroll widget
 *   var scroll = new qx.ui.mobile.container.Scroll()
 * 
 *   // add a children
 *   scroll.add(new qx.ui.mobile.basic.Label("Name: "));
 * 
 *   this.getRoot().add(scroll);
 * 
 * 
 * This example creates a scroll container and adds a label to it.
 */
//>public
vjo.ctype('qx.ui.mobile.container.Scroll')
.inherits('qx.ui.mobile.container.Composite')
.protos({
	/**
	 */
	_createContainerElement : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentElement : vjo.NEEDS_IMPL,


	/**
	 * Calls the refresh function the used scrolling method. Needed to recalculate the
	 * scrolling container.
	 * 
	 */
	refresh : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the wrapper contents to the x/y coordinates in a given period.
	 * 
	 */
	scrollTo : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the wrapper contents to the widgets coordinates in a given
	 * period.
	 * 
	 */
	scrollToElement : vjo.NEEDS_IMPL
})
.endType();