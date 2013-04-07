/**
 * The radio container handles a collection of items from which only one item
 * can be selected. Selection another item will deselect the previously selected
 * item. For that, it uses the {@link qx.ui.form.RadioGroup} object.
 * 
 * This class is used to create radio groups of {@link qx.ui.form.RadioButton}
 * instances.
 * 
 * This widget takes care of the layout of the added items. If you want to
 * take full control of the layout and just use the selection behavior,
 * take a look at the {@link qx.ui.form.RadioGroup} object for a loose coupling.
 */
//>public
vjo.ctype('qx.ui.form.RadioButtonGroup')
.inherits('qx.ui.core.Widget')
.satisfies(['qx.ui.form.IForm','qx.ui.core.ISingleSelection','qx.ui.form.IModelSelection'])
.mixin(['qx.ui.core.MLayoutHandling','qx.ui.form.MModelSelection'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property invalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	_applyInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property valid.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	_applyValid : vjo.NEEDS_IMPL,


	/**
	 * Adds a new child widget.
	 * 
	 * The supported keys of the layout options map depend on the layout
	 * used to position the widget. The options are documented in the class
	 * documentation of each layout manager {@link qx.ui.layout}.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns the children list
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property invalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	getInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * The internaly used radio group instance will be returned.
	 * 
	 */
	getRadioGroup : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property required.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	getRequired : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property requiredInvalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #requiredInvalidMessage}.
	 * 
	 */
	getRequiredInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Returns all elements which are selectable.
	 * 
	 */
	getSelectables : vjo.NEEDS_IMPL,


	/**
	 * Returns an array of currently selected items.
	 * 
	 * Note: The result is only a set of selected items, so the order can
	 * differ from the sequence in which the items were added.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property valid.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	getValid : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property invalidMessage
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	initInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property required
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	initRequired : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property requiredInvalidMessage
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #requiredInvalidMessage}.
	 * 
	 */
	initRequiredInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property valid
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	initValid : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property required equals true.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	isRequired : vjo.NEEDS_IMPL,


	/**
	 * Detects whether the given item is currently selected.
	 * 
	 */
	isSelected : vjo.NEEDS_IMPL,


	/**
	 * Whether the selection is empty.
	 * 
	 */
	isSelectionEmpty : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property valid equals true.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	isValid : vjo.NEEDS_IMPL,


	/**
	 * Remove the given child widget.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Remove all children.
	 * 
	 */
	removeAll : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property invalidMessage.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	resetInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property required.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	resetRequired : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property requiredInvalidMessage.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #requiredInvalidMessage}.
	 * 
	 */
	resetRequiredInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Clears the whole selection at once.
	 * 
	 */
	resetSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property valid.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	resetValid : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property invalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	setInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property required.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	setRequired : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property requiredInvalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #requiredInvalidMessage}.
	 * 
	 */
	setRequiredInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Replaces current selection with the given items.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property valid.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	setValid : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property required.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	toggleRequired : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property valid.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	toggleValid : vjo.NEEDS_IMPL
})
.endType();