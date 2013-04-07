/**
 * A selection manager. This is a helper class that handles all selection
 * related events and updates a SelectionModel.
 * 
 * This Selection Manager differs from its superclass in that we do not want
 * rows to be selected when moving around with the keyboard.
 */
//>public
vjo.ctype('qx.ui.treevirtual.SelectionManager')
.inherits('qx.ui.table.selection.Manager')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Handle a mouse click event that is not normally handled by the simple
	 * tree.  This is intended for more sophisticated trees where clicks in
	 * different places, e.g. on various icons or on the label itself, should
	 * be handled specially.
	 * 
	 */
	_handleExtendedClick : vjo.NEEDS_IMPL,


	/**
	 * Handles a select event.  First we determine if the click was on the
	 * open/close button and toggle the opened/closed state as necessary.
	 * Then, if the click was not on the open/close button or if the table&#8217;s
	 * &#8220;openCloseClickSelectsRow&#8221; property so indicates, call our superclass to
	 * handle the actual row selection.
	 * 
	 */
	_handleSelectEvent : vjo.NEEDS_IMPL,


	/**
	 * Getter for the table being managed
	 * 
	 */
	getTable : vjo.NEEDS_IMPL
})
.endType();