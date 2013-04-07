/**
 * The widget displays a busy indicator.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var busyIndicator = new qx.ui.mobile.dialog.BusyIndicator("Please wait");
 *   this.getRoot().add(busyIndicator);
 * 
 * 
 * This example create a widget to display the busy indicator.
 */
//>public
vjo.ctype('qx.ui.mobile.dialog.BusyIndicator')
.inherits('qx.ui.mobile.basic.Atom')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property spinnerClass.
	 * 
	 * For further details take a look at the property definition: {@link #spinnerClass}.
	 * 
	 */
	_applySpinnerClass : vjo.NEEDS_IMPL,


	/**
	 */
	_createIconWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spinnerClass.
	 * 
	 * For further details take a look at the property definition: {@link #spinnerClass}.
	 * 
	 */
	getSpinnerClass : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property spinnerClass
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #spinnerClass}.
	 * 
	 */
	initSpinnerClass : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property spinnerClass.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #spinnerClass}.
	 * 
	 */
	resetSpinnerClass : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spinnerClass.
	 * 
	 * For further details take a look at the property definition: {@link #spinnerClass}.
	 * 
	 */
	setSpinnerClass : vjo.NEEDS_IMPL
})
.endType();