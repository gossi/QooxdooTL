/**
 * The Toolbar class is the main part of the toolbar widget.
 * 
 * It can handle added {@link Button}s, {@link CheckBox}es, {@link RadioButton}s
 * and {@link Separator}s in its {@link #add} method. The {@link #addSpacer} method
 * adds a spacer at the current toolbar position. This means that the widgets
 * added after the method call of {@link #addSpacer} are aligned to the right of
 * the toolbar.
 * 
 * For more details on the documentation of the toolbar widget, take a look at the
 * documentation of the {@link qx.ui.toolbar}-Package.
 */
//>public
vjo.ctype('qx.ui.toolbar.ToolBar')
.inherits('qx.ui.core.Widget')
.mixin('qx.ui.core.MChildrenHandling')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper to exclude a toolbar item.
	 * 
	 */
	__hideChild : vjo.NEEDS_IMPL,


	/**
	 * Helper to show a toolbar item.
	 * 
	 */
	__showChild : vjo.NEEDS_IMPL,


	/**
	 */
	_add : vjo.NEEDS_IMPL,


	/**
	 */
	_addAfter : vjo.NEEDS_IMPL,


	/**
	 */
	_addAt : vjo.NEEDS_IMPL,


	/**
	 */
	_addBefore : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property overflowHandling.
	 * 
	 * For further details take a look at the property definition: {@link #overflowHandling}.
	 * 
	 */
	_applyOverflowHandling : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property overflowIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #overflowIndicator}.
	 * 
	 */
	_applyOverflowIndicator : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	_applyShow : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	_applySpacing : vjo.NEEDS_IMPL,


	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 * Responsible for returning the next item to remove. In It checks the
	 * priorities added by {@link #setRemovePriority}. If all priorized widgets
	 * already excluded, it takes the widget added at last.
	 * 
	 */
	_getNextToHide : vjo.NEEDS_IMPL,


	/**
	 * Return if a menu could be opened on hover or not.
	 * 
	 */
	_isAllowMenuOpenHover : vjo.NEEDS_IMPL,


	/**
	 * Resize event handler.
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Responsible for calculation the overflow based on the available width.
	 * 
	 */
	_recalculateOverflow : vjo.NEEDS_IMPL,


	/**
	 */
	_remove : vjo.NEEDS_IMPL,


	/**
	 */
	_removeAll : vjo.NEEDS_IMPL,


	/**
	 */
	_removeAt : vjo.NEEDS_IMPL,


	/**
	 * Indicate if a menu could be opened on hover or not.
	 * 
	 */
	_setAllowMenuOpenHover : vjo.NEEDS_IMPL,


	/**
	 * Adds a separator to the toolbar.
	 * 
	 */
	addSeparator : vjo.NEEDS_IMPL,


	/**
	 * Add a spacer to the toolbar. The spacer has a flex
	 * value of one and will stretch to the available space.
	 * 
	 */
	addSpacer : vjo.NEEDS_IMPL,


	/**
	 * Returns all nested buttons which contains a menu to show. This is mainly
	 * used for keyboard support.
	 * 
	 */
	getMenuButtons : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property openMenu.
	 * 
	 * For further details take a look at the property definition: {@link #openMenu}.
	 * 
	 */
	getOpenMenu : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property overflowHandling.
	 * 
	 * For further details take a look at the property definition: {@link #overflowHandling}.
	 * 
	 */
	getOverflowHandling : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property overflowIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #overflowIndicator}.
	 * 
	 */
	getOverflowIndicator : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	getShow : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	getSpacing : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property openMenu
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #openMenu}.
	 * 
	 */
	initOpenMenu : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property overflowHandling
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #overflowHandling}.
	 * 
	 */
	initOverflowHandling : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property overflowIndicator
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #overflowIndicator}.
	 * 
	 */
	initOverflowIndicator : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property show
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	initShow : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property overflowHandling equals true.
	 * 
	 * For further details take a look at the property definition: {@link #overflowHandling}.
	 * 
	 */
	isOverflowHandling : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property openMenu.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #openMenu}.
	 * 
	 */
	resetOpenMenu : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property overflowHandling.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #overflowHandling}.
	 * 
	 */
	resetOverflowHandling : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property overflowIndicator.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #overflowIndicator}.
	 * 
	 */
	resetOverflowIndicator : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property show.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	resetShow : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property openMenu.
	 * 
	 * For further details take a look at the property definition: {@link #openMenu}.
	 * 
	 */
	setOpenMenu : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property overflowHandling.
	 * 
	 * For further details take a look at the property definition: {@link #overflowHandling}.
	 * 
	 */
	setOverflowHandling : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property overflowIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #overflowIndicator}.
	 * 
	 */
	setOverflowIndicator : vjo.NEEDS_IMPL,


	/**
	 * The removal of the toolbar items is priority based. You can change these
	 * priorities with this method. The higher a priority, the earlier it will
	 * be excluded. Remmeber to use every priority only once! If you want
	 * override an already set priority, use the override parameter.
	 * Keep in mind to only use already added items.
	 * 
	 */
	setRemovePriority : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	setShow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	setSpacing : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property overflowHandling.
	 * 
	 * For further details take a look at the property definition: {@link #overflowHandling}.
	 * 
	 */
	toggleOverflowHandling : vjo.NEEDS_IMPL
})
.endType();