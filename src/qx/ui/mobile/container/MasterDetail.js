/**
 * The master/detail container divides an area into two panes, master and detail. The master
 * can be detached when the orientation of the device changes to portrait.
 * This container provides an optimized view for tablet and mobile devices.
 * 
 * Example
 * 
 * Here is a little example of how to use the master/detail container.
 * 
 * 
 * var container = new qx.ui.mobile.container.MasterDetail();
 * 
 * container.getMaster().add(new qx.ui.mobile.container.Navigation());
 * container.getDetail().add(new qx.ui.mobile.container.Navigation());
 * 

 */
//>public
vjo.ctype('qx.ui.mobile.container.MasterDetail')
.inherits('qx.ui.mobile.container.Composite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds the master container to the origin position.
	 * 
	 */
	__addMasterToOrigin : vjo.NEEDS_IMPL,


	/**
	 * Adds the master container to the portrait container.
	 * 
	 */
	__addMasterToPortraitContainer : vjo.NEEDS_IMPL,


	/**
	 * Creates a container.
	 * 
	 */
	__createContainer : vjo.NEEDS_IMPL,


	/**
	 * Synchronizes the layout.
	 * 
	 */
	__syncLayout : vjo.NEEDS_IMPL,


	/**
	 * Applies the master container CSS classes.
	 * 
	 */
	_applyMasterContainerCss : vjo.NEEDS_IMPL,


	/**
	 * Creates the detail container.
	 * 
	 */
	_createDetailContainer : vjo.NEEDS_IMPL,


	/**
	 * Creates the master container.
	 * 
	 */
	_createMasterContainer : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the orientation of the device is changed.
	 * 
	 */
	_onOrientationChange : vjo.NEEDS_IMPL,


	/**
	 * Returns the detail container.
	 * 
	 */
	getDetail : vjo.NEEDS_IMPL,


	/**
	 * Returns the master container.
	 * 
	 */
	getMaster : vjo.NEEDS_IMPL,


	/**
	 * Returns the set container for the portrait mode. The master container will be added and removed
	 * automatically to this container when the orientation is changed.
	 * 
	 */
	getPortraitMasterContainer : vjo.NEEDS_IMPL,


	/**
	 * Set the container for the portrait mode. The master container will be added and removed
	 * automatically to this container when the orientation is changed.
	 * 
	 */
	setPortraitMasterContainer : vjo.NEEDS_IMPL
})
.endType();