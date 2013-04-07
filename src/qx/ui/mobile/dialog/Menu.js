/**
 * This widget displays a menu. A dialog menu extends a dialog and contains a
 * list, which provides the user the possibility to select one value.
 * The selected value is identified through selected index.
 * 
 * Example
 * 
 * 
 * 
 * var model = new qx.data.Array(["item1","item2","item3"]);
 * 
 * var menu = new qx.ui.mobile.dialog.Menu(model);
 * menu.show();
 * menu.addListener("changeSelection", function(evt){
 *    var selectedIndex = evt.getData().index;
 *    var selectedItem = evt.getData().item;
 * }, this);
 * 
 * 
 * This example creates a menu with several choosable items.
 */
//>public
vjo.ctype('qx.ui.mobile.dialog.Menu')
.inherits('qx.ui.mobile.dialog.Dialog')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Reacts on blocker tap.
	 * 
	 */
	__onBlockerTap : vjo.NEEDS_IMPL,


	/**
	 * Event handler for tap on clear button.
	 * 
	 */
	__onClearButtonTap : vjo.NEEDS_IMPL,


	/**
	 * Hides the menu, fires an event which contains index and data.
	 * 
	 */
	__onListChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Reacts on selection list click.
	 * 
	 */
	__onListTap : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property clearButtonLabel.
	 * 
	 * For further details take a look at the property definition: {@link #clearButtonLabel}.
	 * 
	 */
	_applyClearButtonLabel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property nullable.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	_applyNullable : vjo.NEEDS_IMPL,


	/**
	 * Creates the selection list. Override this to customize the widget.
	 * 
	 */
	_createSelectionList : vjo.NEEDS_IMPL,


	/**
	 * Triggers (re-)rendering of menu items.
	 * 
	 */
	_render : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property clearButtonLabel.
	 * 
	 * For further details take a look at the property definition: {@link #clearButtonLabel}.
	 * 
	 */
	getClearButtonLabel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property hideOnBlockerClick.
	 * 
	 * For further details take a look at the property definition: {@link #hideOnBlockerClick}.
	 * 
	 */
	getHideOnBlockerClick : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property nullable.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	getNullable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectedItemClass.
	 * 
	 * For further details take a look at the property definition: {@link #selectedItemClass}.
	 * 
	 */
	getSelectedItemClass : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property unselectedItemClass.
	 * 
	 * For further details take a look at the property definition: {@link #unselectedItemClass}.
	 * 
	 */
	getUnselectedItemClass : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property clearButtonLabel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #clearButtonLabel}.
	 * 
	 */
	initClearButtonLabel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property hideOnBlockerClick
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #hideOnBlockerClick}.
	 * 
	 */
	initHideOnBlockerClick : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property nullable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	initNullable : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selectedItemClass
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selectedItemClass}.
	 * 
	 */
	initSelectedItemClass : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property unselectedItemClass
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #unselectedItemClass}.
	 * 
	 */
	initUnselectedItemClass : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property hideOnBlockerClick equals true.
	 * 
	 * For further details take a look at the property definition: {@link #hideOnBlockerClick}.
	 * 
	 */
	isHideOnBlockerClick : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property nullable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	isNullable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property clearButtonLabel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #clearButtonLabel}.
	 * 
	 */
	resetClearButtonLabel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property hideOnBlockerClick.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #hideOnBlockerClick}.
	 * 
	 */
	resetHideOnBlockerClick : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property nullable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	resetNullable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selectedItemClass.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selectedItemClass}.
	 * 
	 */
	resetSelectedItemClass : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property unselectedItemClass.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #unselectedItemClass}.
	 * 
	 */
	resetUnselectedItemClass : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property clearButtonLabel.
	 * 
	 * For further details take a look at the property definition: {@link #clearButtonLabel}.
	 * 
	 */
	setClearButtonLabel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property hideOnBlockerClick.
	 * 
	 * For further details take a look at the property definition: {@link #hideOnBlockerClick}.
	 * 
	 */
	setHideOnBlockerClick : vjo.NEEDS_IMPL,


	/**
	 * Sets the choosable items of the menu.
	 * 
	 */
	setItems : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property nullable.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	setNullable : vjo.NEEDS_IMPL,


	/**
	 * Sets the pre-selected item.
	 * Set selectedIndex before model, because changing model triggers rendering of list.
	 * 
	 */
	setSelectedIndex : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectedItemClass.
	 * 
	 * For further details take a look at the property definition: {@link #selectedItemClass}.
	 * 
	 */
	setSelectedItemClass : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property unselectedItemClass.
	 * 
	 * For further details take a look at the property definition: {@link #unselectedItemClass}.
	 * 
	 */
	setUnselectedItemClass : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property hideOnBlockerClick.
	 * 
	 * For further details take a look at the property definition: {@link #hideOnBlockerClick}.
	 * 
	 */
	toggleHideOnBlockerClick : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property nullable.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	toggleNullable : vjo.NEEDS_IMPL
})
.endType();