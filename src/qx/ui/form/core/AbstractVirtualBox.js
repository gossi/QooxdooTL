/**
 * Basic class for widgets which need a virtual list as popup for example a
 * SelectBox. It&#8217;s basically supports a drop-down as popup with a virtual list
 * and the whole children management.
 */
//>public abstract
vjo.ctype('qx.ui.form.core.AbstractVirtualBox')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.form.IForm')
.mixin('qx.ui.form.MForm')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	_applyDelegate : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property iconOptions.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	_applyIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property iconPath.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	_applyIconPath : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property labelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	_applyLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property labelPath.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	_applyLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property maxListHeight.
	 * 
	 * For further details take a look at the property definition: {@link #maxListHeight}.
	 * 
	 */
	_applyMaxListHeight : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	_applyModel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property itemHeight.
	 * 
	 * For further details take a look at the property definition: {@link #itemHeight}.
	 * 
	 */
	_applyRowHeight : vjo.NEEDS_IMPL,


	/**
	 * This method is called before the drop-down is closed.
	 * 
	 */
	_beforeClose : vjo.NEEDS_IMPL,


	/**
	 * This method is called before the drop-down is opened.
	 * 
	 */
	_beforeOpen : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Returns the action dependent on the user interaction: e. q. open,
	 * or close.
	 * 
	 */
	_getAction : vjo.NEEDS_IMPL,


	/**
	 * Helper Method to create bind path depended on the passed path.
	 * 
	 */
	_getBindPath : vjo.NEEDS_IMPL,


	/**
	 * Handles the complete keyboard events for user interaction. If there is
	 * no defined user interaction {@link #_getAction}, the event is delegated
	 * to the {@link qx.ui.form.core.VirtualDropDownList#_handleKeyboard} method.
	 * 
	 */
	_handleKeyboard : vjo.NEEDS_IMPL,


	/**
	 * Handles all mouse events dispatched on the widget.
	 * 
	 */
	_handleMouse : vjo.NEEDS_IMPL,


	/**
	 * Helper method to check if one modifier key is pressed. e.q.
	 * Control, Shift, Meta or
	 * Alt.
	 * 
	 */
	_isModifierPressed : vjo.NEEDS_IMPL,


	/**
	 * Handler for the blur event of the current widget.
	 * 
	 */
	_onBlur : vjo.NEEDS_IMPL,


	/**
	 * Adds/removes the state &#8216;popupOpen&#8217; depending on the visibility of the popup
	 * 
	 */
	_onPopupChangeVisibility : vjo.NEEDS_IMPL,


	/**
	 * Updates drop-down minimum size.
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Hides the drop-down.
	 * 
	 */
	close : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	getDelegate : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconOptions.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	getIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconPath.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	getIconPath : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property itemHeight.
	 * 
	 * For further details take a look at the property definition: {@link #itemHeight}.
	 * 
	 */
	getItemHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property labelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	getLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property labelPath.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	getLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxListHeight.
	 * 
	 * For further details take a look at the property definition: {@link #maxListHeight}.
	 * 
	 */
	getMaxListHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property delegate
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	initDelegate : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconOptions
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	initIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconPath
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	initIconPath : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property itemHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #itemHeight}.
	 * 
	 */
	initItemHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property labelOptions
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	initLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property labelPath
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	initLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxListHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxListHeight}.
	 * 
	 */
	initMaxListHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property model
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	initModel : vjo.NEEDS_IMPL,


	/**
	 * Shows the drop-down.
	 * 
	 */
	open : vjo.NEEDS_IMPL,


	/**
	 * Trigger a rebuild from the internal data structure.
	 * 
	 */
	refresh : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property delegate.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	resetDelegate : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconOptions.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	resetIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconPath.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	resetIconPath : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property itemHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #itemHeight}.
	 * 
	 */
	resetItemHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property labelOptions.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	resetLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property labelPath.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	resetLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxListHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxListHeight}.
	 * 
	 */
	resetMaxListHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property model.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	resetModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	setDelegate : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconOptions.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	setIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconPath.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	setIconPath : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property itemHeight.
	 * 
	 * For further details take a look at the property definition: {@link #itemHeight}.
	 * 
	 */
	setItemHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property labelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	setLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property labelPath.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	setLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxListHeight.
	 * 
	 * For further details take a look at the property definition: {@link #maxListHeight}.
	 * 
	 */
	setMaxListHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL,


	/**
	 * Toggles the drop-down visibility.
	 * 
	 */
	toggle : vjo.NEEDS_IMPL
})
.endType();