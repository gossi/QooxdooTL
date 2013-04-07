/**
 * A navigation bar widget.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var bar = new qx.ui.mobile.navigationbar.NavigationBar();
 *   var backButton = new qx.ui.mobile.navigationbar.BackButton();
 *   bar.add(backButton);
 *   var title = new qx.ui.mobile.navigationbar.Title();
 *   var.add(title, {flex:1});
 * 
 *   this.getRoot.add(bar);
 * 
 * 
 * This example creates a navigation bar and adds a back button and a title to it.
 */
//>public
vjo.ctype('qx.ui.mobile.navigationbar.NavigationBar')
.inherits('qx.ui.mobile.container.Composite')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();