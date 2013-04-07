/**
 * EXPERIMENTAL!
 * 
 * This controller is responsible for bringing a data array like model to
 * a virtual list.
 * 
 * This code is highly experimental and there will be API changes.
 */
//>public
vjo.ctype('qx.ui.virtual.form.ListController')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal method for building the lookup table.
	 * 
	 */
	__buildUpLookupTable : vjo.NEEDS_IMPL,


	/**
	 * Performs a lookup.
	 * 
	 */
	__lookup : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	_applyDelegate : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	_applyModel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	_applySelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property target.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	_applyTarget : vjo.NEEDS_IMPL,


	/**
	 * Checks, if the given delegate is valid or if a specific method is given.
	 * 
	 */
	_containsDelegateMethod : vjo.NEEDS_IMPL,


	/**
	 * Returns the delegate method given my its name.
	 * 
	 */
	_getDelegate : vjo.NEEDS_IMPL,


	/**
	 * Returns the row of the given model.
	 * 
	 */
	_getModelRow : vjo.NEEDS_IMPL,


	/**
	 * Returns the data in the given row.
	 * 
	 */
	_getRowData : vjo.NEEDS_IMPL,


	/**
	 * Handler for changes in the children of the model.
	 * 
	 */
	_onChangeBubbleModel : vjo.NEEDS_IMPL,


	/**
	 * Handler for the change of the model length.
	 * 
	 */
	_onChangeLengthModel : vjo.NEEDS_IMPL,


	/**
	 * Handler for changes in the model itself.
	 * 
	 */
	_onChangeModel : vjo.NEEDS_IMPL,


	/**
	 * Handler for the selection changes of the model.
	 * 
	 */
	_onChangeSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Handler for the changes of the target selection.
	 * 
	 */
	_onChangeSelectionView : vjo.NEEDS_IMPL,


	/**
	 * Invokes a filtering using the filter given in the delegate.
	 * 
	 */
	_runDelegateFilter : vjo.NEEDS_IMPL,


	/**
	 * Invokes a sorting using the sorter given in the delegate.
	 * 
	 */
	_runDelegateSorter : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for syncing the selection of the controller to the
	 * selection of the target.
	 * 
	 */
	_syncModelSelectionToView : vjo.NEEDS_IMPL,


	/**
	 * Helper for passing a new row count to the target.
	 * 
	 */
	_syncRowCount : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for syncing the selection of the view to the controller
	 * selection.
	 * 
	 */
	_syncViewSelectionToModel : vjo.NEEDS_IMPL,


	/**
	 * Accessor for the row data.
	 * 
	 */
	getCellData : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	getDelegate : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the absolute number of rows.
	 * 
	 */
	getRowCount : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property target.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	getTarget : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property model
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	initModel : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property target.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	setTarget : vjo.NEEDS_IMPL,


	/**
	 * Updates the lookup table used for sorting and filtering.
	 * 
	 */
	update : vjo.NEEDS_IMPL
})
.endType();