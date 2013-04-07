/**
 * The navigation controller includes already a {@link qx.ui.mobile.navigationbar.NavigationBar}
 * and a {@link qx.ui.mobile.container.Composite} container with a {@link qx.ui.mobile.layout.Card} layout.
 * All widgets that implement the {@link qx.ui.mobile.container.INavigation}
 * interface can be added to the container. The added widget provide the title
 * widget and the left/right container, which will be automatically merged into
 * navigation bar.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var container = new qx.ui.mobile.container.Navigation();
 *   this.getRoot(container);
 *   var page = new qx.ui.mobile.page.NavigationPage();
 *   container.add(page);
 *   page.show();

 */
//>public
vjo.ctype('qx.ui.mobile.container.Navigation')
.inherits('qx.ui.mobile.container.Composite')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates the content container.
	 * 
	 */
	_createContent : vjo.NEEDS_IMPL,


	/**
	 * Creates the navigation bar.
	 * 
	 */
	_createNavigationBar : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the &#8220;updateLayout&#8221; event occurs.
	 * 
	 */
	_onUpdateLayout : vjo.NEEDS_IMPL,


	/**
	 * Updates the navigation bar depending on the set widget.
	 * 
	 */
	_update : vjo.NEEDS_IMPL,


	/**
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns the content container. Add all your widgets to this container.
	 * 
	 */
	getContent : vjo.NEEDS_IMPL,


	/**
	 * Returns the assigned card layout.
	 * 
	 */
	getLayout : vjo.NEEDS_IMPL,


	/**
	 * Returns the navigation bar.
	 * 
	 */
	getNavigationBar : vjo.NEEDS_IMPL,


	/**
	 */
	remove : vjo.NEEDS_IMPL
})
.endType();