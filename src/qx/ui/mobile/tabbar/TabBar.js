/**
 * This widget displays a tab bar.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var tabBar = new qx.ui.mobile.tabbar.TabBar();
 *   var tabButton1 = new qx.ui.mobile.tabbar.TabButton("Tab 1");
 *   tabButton1.setView(view1);
 *   tabBar.add(tabButton1);
 *   var tabButton2 = new qx.ui.mobile.tabbar.TabButton("Tab 2");
 *   tabButton2.setView(view2);
 *   tabBar.add(tabButton2);
 * 
 *   this.getRoot.add(tabBar);
 * 
 * 
 * This example creates a tab bar and adds two tab buttons to it.
 */
//>public
vjo.ctype('qx.ui.mobile.tabbar.TabBar')
.inherits('qx.ui.mobile.core.Widget')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	_applySelection : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the view was changed.
	 * 
	 */
	_onChangeView : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when a tab event occurs.
	 * 
	 */
	_onTap : vjo.NEEDS_IMPL,


	/**
	 * Adds a tab button to the tab bar.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	initSelection : vjo.NEEDS_IMPL,


	/**
	 * Removes a tab button from the tab bar.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	resetSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL
})
.endType();