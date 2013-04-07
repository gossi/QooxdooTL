/**
 * The radio group handles a collection of items from which only one item
 * can be selected. Selection another item will deselect the previously selected
 * item.
 * 
 * This class is e.g. used to create radio groups or {@link qx.ui.form.RadioButton}
 * or {@link qx.ui.toolbar.RadioButton} instances.
 * 
 * We also offer a widget for the same purpose which uses this class. So if
 * you like to act with a widget instead of a pure logic coupling of the
 * widgets, take a look at the {@link qx.ui.form.RadioButtonGroup} widget.
 */
//>public
vjo.ctype('qx.ui.form.RadioGroup')
.inherits('qx.core.Object')
.satisfies(['qx.ui.core.ISingleSelection','qx.ui.form.IForm','qx.ui.form.IModelSelection'])
.mixin(['qx.ui.core.MSingleSelectionHandling','qx.ui.form.MModelSelection'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Event handler for changeSelection.
	 * 
	 */
	__onChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property allowEmptySelection.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	_applyAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


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
	 * Returns the items for the selection.
	 * 
	 */
	_getItems : vjo.NEEDS_IMPL,


	/**
	 * Returns if the selection could be empty or not.
	 * 
	 */
	_isAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the item is selectable. In opposite to the default
	 * implementation (which checks for visible items) every radio button
	 * which is part of the group is selected even if it is currently not visible.
	 * 
	 */
	_isItemSelectable : vjo.NEEDS_IMPL,


	/**
	 * Event listener for changeValue event of every managed item.
	 * 
	 */
	_onItemChangeChecked : vjo.NEEDS_IMPL,


	/**
	 * Add the passed items to the radio group.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowEmptySelection.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	getAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Returns an array containing the group&#8217;s items.
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	getEnabled : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property invalidMessage.
	 * 
	 * For further details take a look at the property definition: {@link #invalidMessage}.
	 * 
	 */
	getInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Get all managed items
	 * 
	 */
	getItems : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property valid.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	getValid : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	getWrap : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowEmptySelection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	initAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property enabled
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	initEnabled : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property wrap
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	initWrap : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property allowEmptySelection equals true.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	isAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property enabled equals true.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	isEnabled : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property required equals true.
	 * 
	 * For further details take a look at the property definition: {@link #required}.
	 * 
	 */
	isRequired : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property valid equals true.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	isValid : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property wrap equals true.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	isWrap : vjo.NEEDS_IMPL,


	/**
	 * Remove an item from the radio group.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowEmptySelection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	resetAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property enabled.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	resetEnabled : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property wrap.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	resetWrap : vjo.NEEDS_IMPL,


	/**
	 * Select the item following the given item.
	 * 
	 */
	selectNext : vjo.NEEDS_IMPL,


	/**
	 * Select the item previous the given item.
	 * 
	 */
	selectPrevious : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowEmptySelection.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	setAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	setEnabled : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property valid.
	 * 
	 * For further details take a look at the property definition: {@link #valid}.
	 * 
	 */
	setValid : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	setWrap : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property allowEmptySelection.
	 * 
	 * For further details take a look at the property definition: {@link #allowEmptySelection}.
	 * 
	 */
	toggleAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	toggleEnabled : vjo.NEEDS_IMPL,


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
	toggleValid : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	toggleWrap : vjo.NEEDS_IMPL
})
.endType();