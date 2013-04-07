/**
 * A drop-down (popup) widget which contains a virtual list for selection.
 */
//>internal
vjo.ctype('qx.ui.form.core.VirtualDropDownList')
.inherits('qx.ui.popup.Popup')
.protos({
	/**
	 * Creates the drop-down list.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adjust the drop-down to the available height. Ensure that the list
	 * is never bigger that the max list height and the available space
	 * in the viewport.
	 * 
	 */
	__adjustHeight : vjo.NEEDS_IMPL,


	/**
	 * Adjust the drop-down to the available width and height, by calling
	 * {@link #__adjustWidth} and {@link #__adjustHeight}.
	 * 
	 */
	__adjustSize : vjo.NEEDS_IMPL,


	/**
	 * Adjust the drop-down to the available width. The width is limited by
	 * the current with from the _target.
	 * 
	 */
	__adjustWidth : vjo.NEEDS_IMPL,


	/**
	 * Calculates the available height in the viewport.
	 * 
	 */
	__getAvailableHeigth : vjo.NEEDS_IMPL,


	/**
	 * Handler for the local selection change. The method is responsible for
	 * the synchronization between the own selection and the selection
	 * form the drop-down.
	 * 
	 */
	__onChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Handler for the own visibility changes. The method is responsible that
	 * the list selects the current selected item.
	 * 
	 */
	__onChangeVisibility : vjo.NEEDS_IMPL,


	/**
	 * Helper method to select the current preselected item, also closes the
	 * drop-down.
	 * 
	 */
	__selectPreselected : vjo.NEEDS_IMPL,


	/**
	 * Helper method to synchronize both selection. The target selection has
	 * the same selection like the source selection after the synchronization.
	 * 
	 */
	__synchronizeSelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	_applySelection : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Handles the complete keyboard events dispatched on the widget.
	 * 
	 */
	_handleKeyboard : vjo.NEEDS_IMPL,


	/**
	 * Handles all mouse events dispatched on the widget.
	 * 
	 */
	_handleMouse : vjo.NEEDS_IMPL,


	/**
	 * Handler for the delegate change event.
	 * 
	 */
	_onChangeDelegate : vjo.NEEDS_IMPL,


	/**
	 * Handler for the model change event.
	 * 
	 */
	_onChangeModel : vjo.NEEDS_IMPL,


	/**
	 * Handler for the selection change on the list. The method is responsible
	 * for the synchronization between the list selection and the own selection.
	 * 
	 */
	_onListChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Hides the drop-down.
	 * 
	 */
	close : vjo.NEEDS_IMPL,


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
	 * Shows the drop-down.
	 * 
	 */
	open : vjo.NEEDS_IMPL,


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
	 * Pre-selects the drop-down item corresponding to the given model object.
	 * 
	 */
	setPreselected : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL
})
.endType();