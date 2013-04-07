/**
 * The resetter is responsible for managing a set of items and resetting these
 * items on a {@link #reset} call. It can handle all form items supplying a
 * value property and all widgets implementing the single selection linked list
 * or select box.
 */
//>public
vjo.ctype('qx.ui.form.Resetter')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal helper top access the value of a given item.
	 * 
	 */
	__getCurrentValue : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for setting an item to a given init value. It checks
	 * for the supported APIs and uses the fitting API.
	 * 
	 */
	__setItem : vjo.NEEDS_IMPL,


	/**
	 * Returns true, if the given item implements the
	 * {@link qx.data.controller.ISelection} interface.
	 * 
	 */
	__supportsDataBindingSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns true, if the given item implements the
	 * {@link qx.ui.core.ISingleSelection} interface.
	 * 
	 */
	__supportsSingleSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns true, if the value property is supplied by the form item.
	 * 
	 */
	_supportsValue : vjo.NEEDS_IMPL,


	/**
	 * Adding a widget to the reseter will get its current value and store
	 * it for resetting. To access the value, the given item needs to specify
	 * a value property or implement the {@link qx.ui.core.ISingleSelection}
	 * interface.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Takes the current values of all added items and uses these values as
	 * init values for resetting.
	 * 
	 */
	redefine : vjo.NEEDS_IMPL,


	/**
	 * Takes the current value of the given item and stores this value as init
	 * value for resetting.
	 * 
	 */
	redefineItem : vjo.NEEDS_IMPL,


	/**
	 * Resets all added form items to their initial value. The initial value
	 * is the value in the widget during the {@link #add}.
	 * 
	 */
	reset : vjo.NEEDS_IMPL,


	/**
	 * Resets a single given item. The item has to be added to the resetter
	 * instance before. Otherwise, an error is thrown.
	 * 
	 */
	resetItem : vjo.NEEDS_IMPL
})
.endType();