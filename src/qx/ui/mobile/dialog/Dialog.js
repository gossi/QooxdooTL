/**
 * This widget displays a dialog.
 * 
 * Example
 * 
 * 
 * var label = new qx.ui.mobile.basic.Label("Hello World");
 * var dialog = new qx.ui.mobile.dialog.Dialog(label);
 * dialog.setTitle("Info");
 * dialog.setModal(true); // true by default
 * dialog.show();
 * 
 * 
 * This example creates a label widget and adds this widget to a dialog.
 */
//>public
vjo.ctype('qx.ui.mobile.dialog.Dialog')
.inherits('qx.ui.mobile.dialog.Popup')
.protos({
	/**
	 * Returns the blocker widget.
	 * 
	 */
	_getBlocker : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property modal.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	getModal : vjo.NEEDS_IMPL,


	/**
	 * Hides the blocker. The blocker is only hidden when the hide method
	 * is called as many times as the {@link #show} method.
	 * 
	 */
	hide : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property modal
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	initModal : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property modal equals true.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	isModal : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property modal.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	resetModal : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property modal.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	setModal : vjo.NEEDS_IMPL,


	/**
	 * Shows the blocker.
	 * 
	 */
	show : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property modal.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	toggleModal : vjo.NEEDS_IMPL
})
.endType();