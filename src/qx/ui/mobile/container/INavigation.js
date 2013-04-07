/**
 * All widgets that are added to the navigation container should implement this interface.
 */
//>public
vjo.itype('qx.ui.mobile.container.INavigation')
.protos({
	/**
	 * Returns the left container that is merged into the navigation bar.
	 * 
	 */
	getLeftContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the right container that is merged into the navigation bar.
	 * 
	 */
	getRightContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the title widget that is merged into the navigation bar.
	 * 
	 */
	getTitleWidget : vjo.NEEDS_IMPL
})
.endType();