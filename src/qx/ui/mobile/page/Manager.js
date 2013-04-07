/**
 * The page manager decides automatically whether the added pages should be
 * displayed in a master/detail view (for tablet) or as a plain card layout (for
 * smartphones).
 * 
 * Example
 * 
 * Here is a little example of how to use the manager.
 * 
 * 
 *  var manager = new qx.ui.mobile.page.Manager();
 *  var page1 = new qx.ui.mobile.page.NavigationPage();
 *  var page2 = new qx.ui.mobile.page.NavigationPage();
 *  var page3 = new qx.ui.mobile.page.NavigationPage();
 *  manager.addMaster(page1);
 *  manager.addDetail([page2,page3]);
 * 
 *  page1.show();

 */
//>public
vjo.ctype('qx.ui.mobile.page.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Show/hides master button.
	 * 
	 */
	__toggleMasterButtonVisibility : vjo.NEEDS_IMPL,


	/**
	 * Adds an array of NavigationPage to the target container.
	 * 
	 */
	_add : vjo.NEEDS_IMPL,


	/**
	 * Called on property changes of masterTitle.
	 * 
	 */
	_applyMasterTitle : vjo.NEEDS_IMPL,


	/**
	 * Factory method for detailContainer.
	 * 
	 */
	_createDetailContainer : vjo.NEEDS_IMPL,


	/**
	 * Factory method for the master button, which is responsible for showing/hiding masterContainer.
	 * 
	 */
	_createMasterButton : vjo.NEEDS_IMPL,


	/**
	 * Factory method for masterContainer.
	 * 
	 */
	_createMasterContainer : vjo.NEEDS_IMPL,


	/**
	 * Factory method for the masterDetailContainer.
	 * 
	 */
	_createMasterDetail : vjo.NEEDS_IMPL,


	/**
	 * Factory method for masterContainer, when browser/device is in portrait mode.
	 * 
	 */
	_createPortraitMasterContainer : vjo.NEEDS_IMPL,


	/**
	 * Reacts on tap at __detailContainer.
	 * Hides the __portraitMasterContainer and removes the listener.
	 * 
	 */
	_onDetailContainerTap : vjo.NEEDS_IMPL,


	/**
	 * Called when detailContainer is updated.
	 * 
	 */
	_onDetailContainerUpdate : vjo.NEEDS_IMPL,


	/**
	 * Reacts on MasterPage&#8217;s tap event.
	 * 
	 */
	_onHidePortraitContainer : vjo.NEEDS_IMPL,


	/**
	 * Called when layout of masterDetailContainer changes.
	 * 
	 */
	_onLayoutChange : vjo.NEEDS_IMPL,


	/**
	 * Called when user taps on masterButton.
	 * 
	 */
	_onMasterButtonTap : vjo.NEEDS_IMPL,


	/**
	 * Sizes the height of the portraitMasterContainer to the content of the masterPage.
	 * 
	 */
	_onMasterPageAppear : vjo.NEEDS_IMPL,


	/**
	 * Called when a masterPage reaches lifecycle state &#8220;start&#8221;. Then property masterTitle will be update with masterPage&#8217;s title.
	 * 
	 */
	_onMasterPageStart : vjo.NEEDS_IMPL,


	/**
	 * Adds an array of NavigationPage to the detailContainer.
	 * 
	 */
	addDetail : vjo.NEEDS_IMPL,


	/**
	 * Adds an array of NavigationPages to masterContainer, if __isTablet is true. Otherwise it will be added to detailContainer.
	 * 
	 */
	addMaster : vjo.NEEDS_IMPL,


	/**
	 * Returns the detailContainer.
	 * 
	 */
	getDetailContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the button for showing/hiding the masterContainer.
	 * 
	 */
	getMasterButton : vjo.NEEDS_IMPL,


	/**
	 * Returns the masterContainer.
	 * 
	 */
	getMasterContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property masterTitle.
	 * 
	 * For further details take a look at the property definition: {@link #masterTitle}.
	 * 
	 */
	getMasterTitle : vjo.NEEDS_IMPL,


	/**
	 * Returns the masterContainer for the portrait mode.
	 * 
	 */
	getPortraitMasterContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property portraitMasterScrollOffset.
	 * 
	 * For further details take a look at the property definition: {@link #portraitMasterScrollOffset}.
	 * 
	 */
	getPortraitMasterScrollOffset : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property masterTitle
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #masterTitle}.
	 * 
	 */
	initMasterTitle : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property portraitMasterScrollOffset
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #portraitMasterScrollOffset}.
	 * 
	 */
	initPortraitMasterScrollOffset : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property masterTitle.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #masterTitle}.
	 * 
	 */
	resetMasterTitle : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property portraitMasterScrollOffset.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #portraitMasterScrollOffset}.
	 * 
	 */
	resetPortraitMasterScrollOffset : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property masterTitle.
	 * 
	 * For further details take a look at the property definition: {@link #masterTitle}.
	 * 
	 */
	setMasterTitle : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property portraitMasterScrollOffset.
	 * 
	 * For further details take a look at the property definition: {@link #portraitMasterScrollOffset}.
	 * 
	 */
	setPortraitMasterScrollOffset : vjo.NEEDS_IMPL
})
.endType();