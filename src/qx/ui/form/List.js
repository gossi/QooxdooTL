/**
 * A list of items. Displays an automatically scrolling list for all
 * added {@link qx.ui.form.ListItem} instances. Supports various
 * selection options: single, multi, ...
 */
//>public
vjo.ctype('qx.ui.form.List')
.inherits('qx.ui.core.scroll.AbstractScrollArea')
.satisfies(['qx.ui.core.IMultiSelection','qx.ui.form.IForm','qx.ui.form.IModelSelection'])
.mixin(['qx.ui.core.MRemoteChildrenHandling','qx.ui.core.MMultiSelectionHandling','qx.ui.form.MForm','qx.ui.form.MModelSelection'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	_applyOrientation : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	_applySpacing : vjo.NEEDS_IMPL,


	/**
	 * This container holds the list item widgets.
	 * 
	 */
	_createListItemContainer : vjo.NEEDS_IMPL,


	/**
	 * Handle child widget adds on the content pane
	 * 
	 */
	_onAddChild : vjo.NEEDS_IMPL,


	/**
	 * Handles the inline find &#8211; if enabled
	 * 
	 */
	_onKeyInput : vjo.NEEDS_IMPL,


	/**
	 * Event listener for keypress events.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Handle child widget removes on the content pane
	 * 
	 */
	_onRemoveChild : vjo.NEEDS_IMPL,


	/**
	 * Find an item by its {@link qx.ui.basic.Atom#getLabel}.
	 * 
	 */
	findItem : vjo.NEEDS_IMPL,


	/**
	 * Takes the given string and tries to find a ListItem
	 * which starts with this string. The search is not case sensitive and the
	 * first found ListItem will be returned. If there could not be found any
	 * qualifying list item, null will be returned.
	 * 
	 */
	findItemByLabelFuzzy : vjo.NEEDS_IMPL,


	/**
	 */
	getChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property enableInlineFind.
	 * 
	 * For further details take a look at the property definition: {@link #enableInlineFind}.
	 * 
	 */
	getEnableInlineFind : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	getOrientation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	getSpacing : vjo.NEEDS_IMPL,


	/**
	 * Used to route external keypress events to the list
	 * handling (in fact the manager of the list)
	 * 
	 */
	handleKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property enableInlineFind
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #enableInlineFind}.
	 * 
	 */
	initEnableInlineFind : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property orientation
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	initOrientation : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property spacing
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	initSpacing : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property enableInlineFind equals true.
	 * 
	 * For further details take a look at the property definition: {@link #enableInlineFind}.
	 * 
	 */
	isEnableInlineFind : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property enableInlineFind.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #enableInlineFind}.
	 * 
	 */
	resetEnableInlineFind : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property orientation.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	resetOrientation : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property spacing.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	resetSpacing : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property enableInlineFind.
	 * 
	 * For further details take a look at the property definition: {@link #enableInlineFind}.
	 * 
	 */
	setEnableInlineFind : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	setOrientation : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	setSpacing : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property enableInlineFind.
	 * 
	 * For further details take a look at the property definition: {@link #enableInlineFind}.
	 * 
	 */
	toggleEnableInlineFind : vjo.NEEDS_IMPL
})
.endType();