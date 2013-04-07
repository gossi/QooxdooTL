/**
 * This singleton is used to manager multiple instances of popups and their
 * state.
 */
//>public
vjo.ctype('qx.ui.popup.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Event handler for mouse down events
	 * 
	 */
	__onMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Updates the zIndex of all registered items to push
	 * newly added ones on top of existing ones
	 * 
	 */
	__updateIndexes : vjo.NEEDS_IMPL,


	/**
	 * Registers a visible popup.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Excludes all currently open popups,
	 * except those with {@link qx.ui.popup.Popup#autoHide} set to false.
	 * 
	 */
	hideAll : vjo.NEEDS_IMPL,


	/**
	 * Removes a popup from the registry
	 * 
	 */
	remove : vjo.NEEDS_IMPL
})
.endType();