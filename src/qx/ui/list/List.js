/**
 * The qx.ui.list.List is based on the virtual infrastructure and
 * supports filtering, sorting, grouping, single selection, multi selection,
 * data binding and custom rendering.
 * 
 * Using the virtual infrastructure has considerable advantages when there is a
 * huge amount of model items to render because the virtual infrastructure only
 * creates widgets for visible items and reuses them. This saves both creation
 * time and memory.
 * 
 * With the {@link qx.ui.list.core.IListDelegate} interface it is possible
 * to configure the list&#8217;s behavior (item and group renderer configuration,
 * filtering, sorting, grouping, etc.).
 * 
 * Here&#8217;s an example of how to use the widget:
 * 
 * 
 * //create the model data
 * var rawData = [];
 * for (var i = 0; i < 2500; i++) {
 *  rawData[i] = "Item No " + i;
 * }
 * var model = qx.data.marshal.Json.createModel(rawData);
 * 
 * //create the list
 * var list = new qx.ui.list.List(model);
 * 
 * //configure the lists's behavior
 * var delegate = {
 *   sorter : function(a, b) {
 *     return a > b ? 1 : a < b ? -1 : 0;
 *   }
 * };
 * list.setDelegate(delegate);
 * 
 * //Pre-Select "Item No 20"
 * list.getSelection().push(model.getItem(20));
 * 
 * //log selection changes
 * list.getSelection().addListener("change", function(e) {
 *   this.debug("Selection: " + list.getSelection().getItem(0));
 * }, this);

 */
//>public
vjo.ctype('qx.ui.list.List')
.inherits('qx.ui.virtual.core.Scroller')
.satisfies('qx.data.controller.ISelection')
.mixin('qx.ui.virtual.selection.MModel')
.protos({
	/**
	 * Creates the qx.ui.list.List with the passed model.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds a model index the the group.
	 * 
	 */
	__addGroup : vjo.NEEDS_IMPL,


	/**
	 * Internal method for building the lookup table.
	 * 
	 */
	__buildUpLookupTable : vjo.NEEDS_IMPL,


	/**
	 * Checks that Object and String are not mixed
	 * as group identifier, otherwise an exception occurs.
	 * 
	 */
	__checkGroupStructure : vjo.NEEDS_IMPL,


	/**
	 * Creates a lookup table form the internal group hash map.
	 * 
	 */
	__createLookupFromGroup : vjo.NEEDS_IMPL,


	/**
	 * Returns an unique group name for the passed group.
	 * 
	 */
	__getUniqueGroupName : vjo.NEEDS_IMPL,


	/**
	 * Helper method to update the row count.
	 * 
	 */
	__updateRowCount : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	_applyDelegate : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property groupLabelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #groupLabelOptions}.
	 * 
	 */
	_applyGroupLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property groupLabelPath.
	 * 
	 * For further details take a look at the property definition: {@link #groupLabelPath}.
	 * 
	 */
	_applyGroupLabelPath : vjo.NEEDS_IMPL,


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
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Returns the model data for the given row.
	 * 
	 */
	_getDataFromRow : vjo.NEEDS_IMPL,


	/**
	 * Return the internal lookup table. But do not manipulate the
	 * lookup table!
	 * 
	 */
	_getLookupTable : vjo.NEEDS_IMPL,


	/**
	 * Returns the selectable model items.
	 * 
	 */
	_getSelectables : vjo.NEEDS_IMPL,


	/**
	 * Initializes the virtual list.
	 * 
	 */
	_init : vjo.NEEDS_IMPL,


	/**
	 * Initializes the background renderer.
	 * 
	 */
	_initBackground : vjo.NEEDS_IMPL,


	/**
	 * Initializes the layer for rendering.
	 * 
	 */
	_initLayer : vjo.NEEDS_IMPL,


	/**
	 * Checks if the passed row is a group or an item.
	 * 
	 */
	_isGroup : vjo.NEEDS_IMPL,


	/**
	 * Performs a lookup from row to model index.
	 * 
	 */
	_lookup : vjo.NEEDS_IMPL,


	/**
	 * Performs a lookup from row to group index.
	 * 
	 */
	_lookupGroup : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the model change event.
	 * 
	 */
	_onModelChange : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the resize event.
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Performs a lookup from model index to row.
	 * 
	 */
	_reverseLookup : vjo.NEEDS_IMPL,


	/**
	 * Invokes filtering using the filter given in the delegate.
	 * 
	 */
	_runDelegateFilter : vjo.NEEDS_IMPL,


	/**
	 * Invokes grouping using the group result given in the delegate.
	 * 
	 */
	_runDelegateGroup : vjo.NEEDS_IMPL,


	/**
	 * Invokes sorting using the sorter given in the delegate.
	 * 
	 */
	_runDelegateSorter : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoGrouping.
	 * 
	 * For further details take a look at the property definition: {@link #autoGrouping}.
	 * 
	 */
	getAutoGrouping : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property groups.
	 * 
	 * For further details take a look at the property definition: {@link #groups}.
	 * 
	 */
	getGroups : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoGrouping
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoGrouping}.
	 * 
	 */
	initAutoGrouping : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property groups
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #groups}.
	 * 
	 */
	initGroups : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property model
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	initModel : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property autoGrouping equals true.
	 * 
	 * For further details take a look at the property definition: {@link #autoGrouping}.
	 * 
	 */
	isAutoGrouping : vjo.NEEDS_IMPL,


	/**
	 * Trigger a rebuild from the internal data structure.
	 * 
	 */
	refresh : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoGrouping.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoGrouping}.
	 * 
	 */
	resetAutoGrouping : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property groups.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #groups}.
	 * 
	 */
	resetGroups : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property autoGrouping.
	 * 
	 * For further details take a look at the property definition: {@link #autoGrouping}.
	 * 
	 */
	setAutoGrouping : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property groups.
	 * 
	 * For further details take a look at the property definition: {@link #groups}.
	 * 
	 */
	setGroups : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property autoGrouping.
	 * 
	 * For further details take a look at the property definition: {@link #autoGrouping}.
	 * 
	 */
	toggleAutoGrouping : vjo.NEEDS_IMPL
})
.endType();