/**
 * The mixin controls the binding between model and item.
 */
//>internal
vjo.mtype('qx.ui.list.core.MWidgetController')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper method to save the binding for the widget.
	 * 
	 */
	__addBinding : vjo.NEEDS_IMPL,


	/**
	 * Helper method which returns all bound id from the widget.
	 * 
	 */
	__getBindings : vjo.NEEDS_IMPL,


	/**
	 * Helper method to create the path for binding.
	 * 
	 */
	__getBindPath : vjo.NEEDS_IMPL,


	/**
	 * Sets up the binding for the given group item and index.
	 * 
	 */
	_bindGroupItem : vjo.NEEDS_IMPL,


	/**
	 * Sets up the binding for the given item and index.
	 * 
	 */
	_bindItem : vjo.NEEDS_IMPL,


	/**
	 * Configure the passed item if a delegate is set and the needed
	 * function {@link IListDelegate#configureGroupItem} is available.
	 * 
	 */
	_configureGroupItem : vjo.NEEDS_IMPL,


	/**
	 * Configure the passed item if a delegate is set and the needed
	 * function {@link IListDelegate#configureItem} is available.
	 * 
	 */
	_configureItem : vjo.NEEDS_IMPL,


	/**
	 * Removes the binding of the given item.
	 * 
	 */
	_removeBindingsFrom : vjo.NEEDS_IMPL,


	/**
	 * Helper-Method for binding the default properties from
	 * the model to the target widget. The used default properties
	 * depends on the passed item. When the passed item is
	 * a list item the &#8220;label&#8221; and &#8220;icon&#8221; property is used.
	 * When the passed item is a group item the &#8220;value&#8221; property is
	 * used.
	 * 
	 * This method should only be called in the
	 * {@link IListDelegate#bindItem} function
	 * implemented by the {@link #delegate} property.
	 * 
	 */
	bindDefaultProperties : vjo.NEEDS_IMPL,


	/**
	 * Helper-Method for binding a given property from the model to the target
	 * widget.
	 * This method should only be called in the
	 * {@link IListDelegate#bindItem} function implemented by the
	 * {@link #delegate} property.
	 * 
	 */
	bindProperty : vjo.NEEDS_IMPL,


	/**
	 * Helper-Method for binding a given property from the target widget to
	 * the model.
	 * This method should only be called in the
	 * {@link IListDelegate#bindItem} function implemented by the
	 * {@link #delegate} property.
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
	 * Returns the (computed) value of the property groupLabelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #groupLabelOptions}.
	 * 
	 */
	getGroupLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property groupLabelPath.
	 * 
	 * For further details take a look at the property definition: {@link #groupLabelPath}.
	 * 
	 */
	getGroupLabelPath : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property delegate
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	initDelegate : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property groupLabelOptions
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #groupLabelOptions}.
	 * 
	 */
	initGroupLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property groupLabelPath
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #groupLabelPath}.
	 * 
	 */
	initGroupLabelPath : vjo.NEEDS_IMPL,


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
	 * Remove all bindings from all bounded items.
	 * 
	 */
	removeBindings : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property groupLabelOptions.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #groupLabelOptions}.
	 * 
	 */
	resetGroupLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property groupLabelPath.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #groupLabelPath}.
	 * 
	 */
	resetGroupLabelPath : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	setDelegate : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property groupLabelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #groupLabelOptions}.
	 * 
	 */
	setGroupLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property groupLabelPath.
	 * 
	 * For further details take a look at the property definition: {@link #groupLabelPath}.
	 * 
	 */
	setGroupLabelPath : vjo.NEEDS_IMPL,


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
	setLabelPath : vjo.NEEDS_IMPL
})
.endType();