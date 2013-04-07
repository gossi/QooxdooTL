/**
 * Specialized page. This page includes already a {@link qx.ui.mobile.navigationbar.NavigationBar}
 * and and a {@link qx.ui.mobile.container.Scroll} container.
 * The NavigationPage can only be used with a page manager {@link qx.ui.mobile.page.Manager}.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 * 
 *  var manager = new qx.ui.mobile.page.Manager();
 *  var page = new qx.ui.mobile.page.NavigationPage();
 *  page.setTitle("Page Title");
 *  page.setShowBackButton(true);
 *  page.setBackButtonText("Back")
 *  page.addListener("initialize", function()
 *  {
 *    var button = new qx.ui.mobile.form.Button("Next Page");
 *    page.getContent().add(button);
 *  },this);
 * 
 *  page.addListener("back", function()
 *  {
 *    otherPage.show({animation:"cube", reverse:true});
 *  },this);
 * 
 *  manager.addDetail(page);
 *  page.show();
 * 
 * 
 * This example creates a NavigationPage with a title and a back button. In the
 * initialize lifecycle method a button is added.
 */
//>public
vjo.ctype('qx.ui.mobile.page.NavigationPage')
.inherits('qx.ui.mobile.page.Page')
.satisfies('qx.ui.mobile.container.INavigation')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property backButtonText.
	 * 
	 * For further details take a look at the property definition: {@link #backButtonText}.
	 * 
	 */
	_applyBackButtonText : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property buttonText.
	 * 
	 * For further details take a look at the property definition: {@link #buttonText}.
	 * 
	 */
	_applyButtonText : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property contentCssClass.
	 * 
	 * For further details take a look at the property definition: {@link #contentCssClass}.
	 * 
	 */
	_applyContentCssClass : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showBackButton.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButton}.
	 * 
	 */
	_applyShowBackButton : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showButton.
	 * 
	 * For further details take a look at the property definition: {@link #showButton}.
	 * 
	 */
	_applyShowButton : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property title.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	_applyTitle : vjo.NEEDS_IMPL,


	/**
	 * Creates the navigation bar back button.
	 * Creates the scroll container.
	 * 
	 */
	_createBackButton : vjo.NEEDS_IMPL,


	/**
	 * Creates the navigation bar button.
	 * Creates the content container.
	 * 
	 */
	_createButton : vjo.NEEDS_IMPL,


	/**
	 * Creates the content container.
	 * 
	 */
	_createContent : vjo.NEEDS_IMPL,


	/**
	 * Creates the left container for the navigation bar.
	 * 
	 */
	_createLeftContainer : vjo.NEEDS_IMPL,


	/**
	 * Creates the right container for the navigation bar.
	 * 
	 */
	_createRightContainer : vjo.NEEDS_IMPL,


	/**
	 * Creates the scroll container.
	 * 
	 */
	_createScrollContainer : vjo.NEEDS_IMPL,


	/**
	 * Creates the navigation bar title.
	 * 
	 */
	_createTitleWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the back button widget.
	 * 
	 */
	_getBackButton : vjo.NEEDS_IMPL,


	/**
	 * Returns the action button widget.
	 * 
	 */
	_getButton : vjo.NEEDS_IMPL,


	/**
	 * Returns the scroll container.
	 * 
	 */
	_getScrollContainer : vjo.NEEDS_IMPL,


	/**
	 */
	_initialize : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the tap event occurs on the back button.
	 * 
	 */
	_onBackButtonTap : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the tap event occurs on the button.
	 * 
	 */
	_onButtonTap : vjo.NEEDS_IMPL,


	/**
	 * Helper method to show the back button.
	 * 
	 */
	_showBackButton : vjo.NEEDS_IMPL,


	/**
	 * Helper method to show the button.
	 * 
	 */
	_showButton : vjo.NEEDS_IMPL,


	/**
	 * Adds a widget, below the NavigationBar.
	 * 
	 */
	addAfterNavigationBar : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property backButtonText.
	 * 
	 * For further details take a look at the property definition: {@link #backButtonText}.
	 * 
	 */
	getBackButtonText : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property buttonText.
	 * 
	 * For further details take a look at the property definition: {@link #buttonText}.
	 * 
	 */
	getButtonText : vjo.NEEDS_IMPL,


	/**
	 * Returns the content container. Add all your widgets to this container.
	 * 
	 */
	getContent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property contentCssClass.
	 * 
	 * For further details take a look at the property definition: {@link #contentCssClass}.
	 * 
	 */
	getContentCssClass : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property navigationBarHidden.
	 * 
	 * For further details take a look at the property definition: {@link #navigationBarHidden}.
	 * 
	 */
	getNavigationBarHidden : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property navigationBarToggleDuration.
	 * 
	 * For further details take a look at the property definition: {@link #navigationBarToggleDuration}.
	 * 
	 */
	getNavigationBarToggleDuration : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showBackButton.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButton}.
	 * 
	 */
	getShowBackButton : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showBackButtonOnTablet.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButtonOnTablet}.
	 * 
	 */
	getShowBackButtonOnTablet : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showButton.
	 * 
	 * For further details take a look at the property definition: {@link #showButton}.
	 * 
	 */
	getShowButton : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property title.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	getTitle : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property backButtonText
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #backButtonText}.
	 * 
	 */
	initBackButtonText : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property buttonText
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #buttonText}.
	 * 
	 */
	initButtonText : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property contentCssClass
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #contentCssClass}.
	 * 
	 */
	initContentCssClass : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property navigationBarHidden
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #navigationBarHidden}.
	 * 
	 */
	initNavigationBarHidden : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property navigationBarToggleDuration
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #navigationBarToggleDuration}.
	 * 
	 */
	initNavigationBarToggleDuration : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showBackButton
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButton}.
	 * 
	 */
	initShowBackButton : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showBackButtonOnTablet
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButtonOnTablet}.
	 * 
	 */
	initShowBackButtonOnTablet : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showButton
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showButton}.
	 * 
	 */
	initShowButton : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property title
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	initTitle : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property navigationBarHidden equals true.
	 * 
	 * For further details take a look at the property definition: {@link #navigationBarHidden}.
	 * 
	 */
	isNavigationBarHidden : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showBackButton equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButton}.
	 * 
	 */
	isShowBackButton : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showBackButtonOnTablet equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButtonOnTablet}.
	 * 
	 */
	isShowBackButtonOnTablet : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showButton equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showButton}.
	 * 
	 */
	isShowButton : vjo.NEEDS_IMPL,


	/**
	 * Returns the isTablet flag.
	 * 
	 */
	isTablet : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property backButtonText.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backButtonText}.
	 * 
	 */
	resetBackButtonText : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property buttonText.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #buttonText}.
	 * 
	 */
	resetButtonText : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property contentCssClass.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #contentCssClass}.
	 * 
	 */
	resetContentCssClass : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property navigationBarHidden.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #navigationBarHidden}.
	 * 
	 */
	resetNavigationBarHidden : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property navigationBarToggleDuration.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #navigationBarToggleDuration}.
	 * 
	 */
	resetNavigationBarToggleDuration : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showBackButton.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButton}.
	 * 
	 */
	resetShowBackButton : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showBackButtonOnTablet.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButtonOnTablet}.
	 * 
	 */
	resetShowBackButtonOnTablet : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showButton.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showButton}.
	 * 
	 */
	resetShowButton : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property title.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	resetTitle : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the wrapper contents to the x/y coordinates in a given
	 * period.
	 * 
	 */
	scrollTo : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the wrapper contents to the widgets coordinates in a given
	 * period.
	 * 
	 */
	scrollToWidget : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property backButtonText.
	 * 
	 * For further details take a look at the property definition: {@link #backButtonText}.
	 * 
	 */
	setBackButtonText : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property buttonText.
	 * 
	 * For further details take a look at the property definition: {@link #buttonText}.
	 * 
	 */
	setButtonText : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property contentCssClass.
	 * 
	 * For further details take a look at the property definition: {@link #contentCssClass}.
	 * 
	 */
	setContentCssClass : vjo.NEEDS_IMPL,


	/**
	 * Sets the isTablet flag.
	 * 
	 */
	setIsTablet : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property navigationBarHidden.
	 * 
	 * For further details take a look at the property definition: {@link #navigationBarHidden}.
	 * 
	 */
	setNavigationBarHidden : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property navigationBarToggleDuration.
	 * 
	 * For further details take a look at the property definition: {@link #navigationBarToggleDuration}.
	 * 
	 */
	setNavigationBarToggleDuration : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showBackButton.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButton}.
	 * 
	 */
	setShowBackButton : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showBackButtonOnTablet.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButtonOnTablet}.
	 * 
	 */
	setShowBackButtonOnTablet : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showButton.
	 * 
	 * For further details take a look at the property definition: {@link #showButton}.
	 * 
	 */
	setShowButton : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property title.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	setTitle : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property navigationBarHidden.
	 * 
	 * For further details take a look at the property definition: {@link #navigationBarHidden}.
	 * 
	 */
	toggleNavigationBarHidden : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showBackButton.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButton}.
	 * 
	 */
	toggleShowBackButton : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showBackButtonOnTablet.
	 * 
	 * For further details take a look at the property definition: {@link #showBackButtonOnTablet}.
	 * 
	 */
	toggleShowBackButtonOnTablet : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showButton.
	 * 
	 * For further details take a look at the property definition: {@link #showButton}.
	 * 
	 */
	toggleShowButton : vjo.NEEDS_IMPL
})
.endType();