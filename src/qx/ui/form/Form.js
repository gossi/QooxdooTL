/**
 * The form object is responsible for managing form items. For that, it takes
 * advantage of two existing qooxdoo classes.
 * The {@link qx.ui.form.Resetter} is used for resetting and the
 * {@link qx.ui.form.validation.Manager} is used for all validation purposes.
 * 
 * The view code can be found in the used renderer ({@link qx.ui.form.renderer}).
 */
//>public
vjo.ctype('qx.ui.form.Form')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns whether something has already been added.
	 * 
	 */
	__isFirstAdd : vjo.NEEDS_IMPL,


	/**
	 * Creates and returns the used resetter class.
	 * 
	 */
	_createResetter : vjo.NEEDS_IMPL,


	/**
	 * Adds a form item to the form including its internal
	 * {@link qx.ui.form.validation.Manager} and {@link qx.ui.form.Resetter}.
	 * 
	 * Hint: The order of all add calls represent the order in the layout.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Adds a button to the form.
	 * 
	 * Hint: The order of all add calls represent the order in the layout.
	 * 
	 */
	addButton : vjo.NEEDS_IMPL,


	/**
	 * Adds a group header to the form.
	 * 
	 * Hint: The order of all add calls represent the order in the layout.
	 * 
	 */
	addGroupHeader : vjo.NEEDS_IMPL,


	/**
	 * Accessor method for the renderer which returns all added options for
	 * the buttons in an array.
	 * 
	 */
	getButtonOptions : vjo.NEEDS_IMPL,


	/**
	 * Accessor method for the renderer which returns all added buttons in an
	 * array.
	 * 
	 */
	getButtons : vjo.NEEDS_IMPL,


	/**
	 * Accessor method for the renderer which returns all added items in a
	 * array containing a map of all items:
	 * {title: title, items: [], labels: [], names: []}
	 * 
	 */
	getGroups : vjo.NEEDS_IMPL,


	/**
	 * Returns all added items as a map.
	 * 
	 */
	getItems : vjo.NEEDS_IMPL,


	/**
	 * Returns the internally used validation manager. If you want to do some
	 * enhanced validation tasks, you need to use the validation manager.
	 * 
	 */
	getValidationManager : vjo.NEEDS_IMPL,


	/**
	 * Redefines the values used for resetting. It calls
	 * {@link qx.ui.form.Resetter#redefine} to get that.
	 * 
	 */
	redefineResetter : vjo.NEEDS_IMPL,


	/**
	 * Redefines the value used for resetting of the given item. It calls
	 * {@link qx.ui.form.Resetter#redefineItem} to get that.
	 * 
	 */
	redefineResetterItem : vjo.NEEDS_IMPL,


	/**
	 * Resets the form. This means reseting all form items and the validation.
	 * 
	 */
	reset : vjo.NEEDS_IMPL,


	/**
	 * Validates the form using the
	 * {@link qx.ui.form.validation.Manager#validate} method.
	 * 
	 */
	validate : vjo.NEEDS_IMPL
})
.endType();