/**
 * A menubar button
 */
//>public
vjo.ctype('qx.ui.menubar.Button')
.inherits('qx.ui.form.MenuButton')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Listener for visibility property changes of the attached menu
	 * 
	 */
	_onMenuChange : vjo.NEEDS_IMPL,


	/**
	 * Event listener for mouseover event
	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 */
	_onMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Inspects the parent chain to find the MenuBar
	 * 
	 */
	getMenuBar : vjo.NEEDS_IMPL,


	/**
	 */
	open : vjo.NEEDS_IMPL
})
.endType();