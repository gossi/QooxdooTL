/**
 * The ScrollComposite is a extension of {@linkqx.ui.mobile.container.Composite},
 * and makes it possible to scroll vertically, if content size is greater than
 * scrollComposite&#8217;s size.
 * 
 * Every widget will be added to child&#8217;s composite.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   // create the composite
 *   var scrollComposite = new qx.ui.mobile.container.ScrollComposite();
 * 
 *   scrollComposite.setLayout(new qx.ui.mobile.layout.HBox());
 * 
 *   // add some children
 *   scrollComposite.add(new qx.ui.mobile.basic.Label("Name: "), {flex:1});
 *   scrollComposite.add(new qx.ui.mobile.form.TextField());
 * 
 * 
 * This example horizontally groups a label and text field by using a
 * Composite configured with a horizontal box layout as a container.
 */
//>public
vjo.ctype('qx.ui.mobile.container.ScrollComposite')
.inherits('qx.ui.mobile.container.Composite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Synchronizes the elements.scrollHeight and its height.
	 * Needed for making textArea scrollable.
	 * 
	 */
	_fixChildElementsHeight : vjo.NEEDS_IMPL,


	/**
	 * Checks if size handling is needed:
	 * if true, it adds all listener which are needed for synchronizing the scrollHeight to
	 * elements height.
	 * 
	 */
	_handleSize : vjo.NEEDS_IMPL,


	/**
	 * TouchHandler for scrollContainer
	 * 
	 */
	_onTouchEnd : vjo.NEEDS_IMPL,


	/**
	 * Handler for touch move events on scrollContainer
	 * 
	 */
	_onTouchMove : vjo.NEEDS_IMPL,


	/**
	 * TouchHandler for scrollContainer
	 * 
	 */
	_onTouchStart : vjo.NEEDS_IMPL,


	/**
	 * Removes Listeners from a child if necessary.
	 * 
	 */
	_unhandleSize : vjo.NEEDS_IMPL,


	/**
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 */
	addAfter : vjo.NEEDS_IMPL,


	/**
	 */
	addAt : vjo.NEEDS_IMPL,


	/**
	 */
	addBefore : vjo.NEEDS_IMPL,


	/**
	 */
	getChildren : vjo.NEEDS_IMPL,


	/**
	 */
	getLayout : vjo.NEEDS_IMPL,


	/**
	 */
	hasChildren : vjo.NEEDS_IMPL,


	/**
	 */
	indexOf : vjo.NEEDS_IMPL,


	/**
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 */
	removeAll : vjo.NEEDS_IMPL,


	/**
	 */
	removeAt : vjo.NEEDS_IMPL,


	/**
	 */
	setLayout : vjo.NEEDS_IMPL
})
.endType();