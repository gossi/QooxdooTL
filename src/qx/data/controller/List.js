/**
 * List Controller
 * 
 * General idea
 * The list controller is responsible for synchronizing every list like widget
 * with a data array. It does not matter if the array contains atomic values
 * like strings of complete objects where one property holds the value for
 * the label and another property holds the icon url. You can even use converters
 * that make the label show a text corresponding to the icon, by binding both
 * label and icon to the same model property and converting one of them.
 * 
 * Features
 * 
 * 
 * Synchronize the model and the target
 * Label and icon are bindable
 * Takes care of the selection
 * Passes on the options used by the bindings
 * 
 * 
 * Usage
 * 
 * As model, only {@link qx.data.Array}s do work. The currently supported
 * targets are
 * 
 * 
 * {@link qx.ui.form.SelectBox}
 * {@link qx.ui.form.List}
 * {@link qx.ui.form.ComboBox}
 * 
 * 
 * All the properties like model, target or any property path is bindable.
 * Especially the model is nice to bind to another selection for example.
 * The controller itself can only work if it has a model and a target set. The
 * rest of the properties may be empty.
 * 
 * Cross reference
 * 
 * 
 * If you want to bind single values, use {@link qx.data.controller.Object}
 * If you want to bind a tree widget, use {@link qx.data.controller.Tree}
 * If you want to bind a form widget, use {@link qx.data.controller.Form}

 */
//>public
vjo.ctype('qx.data.controller.List')
.inherits('qx.core.Object')
.satisfies('qx.data.controller.ISelection')
.mixin('qx.data.controller.MSelection')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal helper to add ListItems to the target including the creation
	 * of the binding.
	 * 
	 */
	__addItem : vjo.NEEDS_IMPL,


	/**
	 * Helper-Method which builds up the index lookup for the filter feature.
	 * If no filter is set, the lookup table will be a 1:1 mapping.
	 * 
	 */
	__buildUpLookupTable : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the change event of the model. If the model changes,
	 * Only the selection needs to be changed. The change of the data will
	 * be done by the binding.
	 * 
	 */
	__changeModel : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the changeLength of the model. If the length changes
	 * of the model, either ListItems need to be removed or added to the target.
	 * 
	 */
	__changeModelLength : vjo.NEEDS_IMPL,


	/**
	 * Function for accessing the lookup table.
	 * 
	 */
	__lookup : vjo.NEEDS_IMPL,


	/**
	 * Helper method which removes and adds the change listener of the
	 * controller to the model. This is sometimes necessary to ensure that the
	 * listener of the controller is executed as the last listener of the chain.
	 * 
	 */
	__moveChangeListenerAtTheEnd : vjo.NEEDS_IMPL,


	/**
	 * This helper is responsible for removing the filter and setting the
	 * controller to a valid state without a filtering.
	 * 
	 */
	__removeFilter : vjo.NEEDS_IMPL,


	/**
	 * Internal helper to remove ListItems from the target. Also the binding
	 * will be removed properly.
	 * 
	 */
	__removeItem : vjo.NEEDS_IMPL,


	/**
	 * Internal helper method to renew all set bindings.
	 * 
	 */
	__renewBindings : vjo.NEEDS_IMPL,


	/**
	 * If a new delegate is set, it applies the stored configuration for the
	 * list items to the already created list items once.
	 * 
	 */
	_applyDelegate : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called if the icon options has been changed.
	 * It invokes a renewing of all set bindings.
	 * 
	 */
	_applyIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called if the icon path has been changed.
	 * It invokes a renewing of all set bindings.
	 * 
	 */
	_applyIconPath : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called if the label options has been changed.
	 * It invokes a renewing of all set bindings.
	 * 
	 */
	_applyLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called if the label path has been changed.
	 * It invokes a renewing of all set bindings.
	 * 
	 */
	_applyLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called if the model has been changed. It
	 * removes all the listeners from the old model and adds the needed
	 * listeners to the new model. It also invokes the initial filling of the
	 * target widgets if there is a target set.
	 * 
	 */
	_applyModel : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called if the target has been changed.
	 * When the target changes, every binding needs to be reset and the old
	 * target needs to be cleaned up. If there is a model, the target will be
	 * filled with the data of the model.
	 * 
	 */
	_applyTarget : vjo.NEEDS_IMPL,


	/**
	 * Sets up the binding for the given ListItem and index.
	 * 
	 */
	_bindListItem : vjo.NEEDS_IMPL,


	/**
	 * Creates a ListItem and delegates the configure method if a delegate is
	 * set and the needed function (configureItem) is available.
	 * 
	 */
	_createItem : vjo.NEEDS_IMPL,


	/**
	 * Method which will be called on the invoke of every binding. It takes
	 * care of the selection on the change of the binding.
	 * 
	 */
	_onBindingSet : vjo.NEEDS_IMPL,


	/**
	 * Internal helper method to remove the binding of the given item.
	 * 
	 */
	_removeBindingsFrom : vjo.NEEDS_IMPL,


	/**
	 * Helper method for applying the delegate It checks if a bindItem
	 * is set end invokes the initial process to apply the given function.
	 * 
	 */
	_setBindItem : vjo.NEEDS_IMPL,


	/**
	 * Helper method for applying the delegate It checks if a configureItem
	 * is set end invokes the initial process to apply the given function.
	 * 
	 */
	_setConfigureItem : vjo.NEEDS_IMPL,


	/**
	 * Helper method for applying the delegate It checks if a createItem
	 * is set end invokes the initial process to apply the given function.
	 * 
	 */
	_setCreateItem : vjo.NEEDS_IMPL,


	/**
	 * Apply-Method for setting the filter. It removes all bindings,
	 * check if the length has changed and adds or removes the items in the
	 * target. After that, the bindings will be set up again and the selection
	 * will be updated.
	 * 
	 */
	_setFilter : vjo.NEEDS_IMPL,


	/**
	 * Helper-Method for binding the default properties (label, icon and model)
	 * from the model to the target widget.
	 * 
	 * This method should only be called in the
	 * {@link qx.data.controller.IControllerDelegate#bindItem} function
	 * implemented by the {@link #delegate} property.
	 * 
	 */
	bindDefaultProperties : vjo.NEEDS_IMPL,


	/**
	 * Helper-Method for binding a given property from the model to the target
	 * widget.
	 * This method should only be called in the
	 * {@link qx.data.controller.IControllerDelegate#bindItem} function
	 * implemented by the {@link #delegate} property.
	 * 
	 */
	bindProperty : vjo.NEEDS_IMPL,


	/**
	 * Helper-Method for binding a given property from the target widget to
	 * the model.
	 * This method should only be called in the
	 * {@link qx.data.controller.IControllerDelegate#bindItem} function
	 * implemented by the {@link #delegate} property.
	 * 
	 */
	bindPropertyReverse : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property target.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	getTarget : vjo.NEEDS_IMPL,


	/**
	 * Returns all models currently visible by the list. This method is only
	 * useful if you use the filter via the {@link #delegate}.
	 * 
	 */
	getVisibleModels : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property model
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	initModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property target
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	initTarget : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property target.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	resetTarget : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property target.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	setTarget : vjo.NEEDS_IMPL,


	/**
	 * Internal method used to sync the selection. The controller uses the
	 * widget queue to schedule the selection update. An asynchronous handling of
	 * the selection is needed because the bindings (event listeners for the
	 * binding) need to be executed before the selection is updated.
	 * 
	 */
	syncWidget : vjo.NEEDS_IMPL,


	/**
	 * Updates the filter and the target. This could be used if the filter
	 * uses an additional parameter which changes the filter result.
	 * 
	 */
	update : vjo.NEEDS_IMPL
})
.endType();