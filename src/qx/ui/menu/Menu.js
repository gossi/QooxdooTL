/**
 * The menu is a popup like control which supports buttons. It comes
 * with full keyboard navigation and an improved timeout based mouse
 * control behavior.
 * 
 * This class is the container for all derived instances of
 * {@link qx.ui.menu.AbstractButton}.
 */
//>public
vjo.ctype('qx.ui.menu.Menu')
.inherits('qx.ui.core.Widget')
.mixin(['qx.ui.core.MPlacement','qx.ui.core.MRemoteChildrenHandling'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Updates the blocker&#8217;s visibility
	 * 
	 */
	__updateBlockerVisibility : vjo.NEEDS_IMPL,


	/**
	 * Updates the visibility of the slidebar based on the menu&#8217;s current size
	 * and position.
	 * 
	 */
	__updateSlideBar : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property arrowColumnWidth.
	 * 
	 * For further details take a look at the property definition: {@link #arrowColumnWidth}.
	 * 
	 */
	_applyArrowColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property blockerColor.
	 * 
	 * For further details take a look at the property definition: {@link #blockerColor}.
	 * 
	 */
	_applyBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property blockerOpacity.
	 * 
	 * For further details take a look at the property definition: {@link #blockerOpacity}.
	 * 
	 */
	_applyBlockerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property iconColumnWidth.
	 * 
	 * For further details take a look at the property definition: {@link #iconColumnWidth}.
	 * 
	 */
	_applyIconColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property openedButton.
	 * 
	 * For further details take a look at the property definition: {@link #openedButton}.
	 * 
	 */
	_applyOpenedButton : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selectedButton.
	 * 
	 * For further details take a look at the property definition: {@link #selectedButton}.
	 * 
	 */
	_applySelectedButton : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property spacingX.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	_applySpacingX : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property spacingY.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	_applySpacingY : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	_applyVisibility : vjo.NEEDS_IMPL,


	/**
	 * Schedules the addition of the slidebar and calls the given callback
	 * after the slidebar has been added.
	 * 
	 */
	_assertSlideBar : vjo.NEEDS_IMPL,


	/**
	 * Computes the size of the menu. This method is used by the
	 * {@link qx.ui.core.MPlacement} mixin.
	 * 
	 */
	_computePlacementSize : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Get the menu bounds
	 * 
	 */
	_getMenuBounds : vjo.NEEDS_IMPL,


	/**
	 * Get the menu layout manager
	 * 
	 */
	_getMenuLayout : vjo.NEEDS_IMPL,


	/**
	 * Event listener for mouseout event.
	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Event listener for mouseover event.
	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 * Update position if the menu or the root is resized
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Convenience method to add a separator to the menu
	 * 
	 */
	addSeparator : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property arrowColumnWidth.
	 * 
	 * For further details take a look at the property definition: {@link #arrowColumnWidth}.
	 * 
	 */
	getArrowColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property blockBackground.
	 * 
	 * For further details take a look at the property definition: {@link #blockBackground}.
	 * 
	 */
	getBlockBackground : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property blockerColor.
	 * 
	 * For further details take a look at the property definition: {@link #blockerColor}.
	 * 
	 */
	getBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property blockerOpacity.
	 * 
	 * For further details take a look at the property definition: {@link #blockerOpacity}.
	 * 
	 */
	getBlockerOpacity : vjo.NEEDS_IMPL,


	/**
	 */
	getChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property closeInterval.
	 * 
	 * For further details take a look at the property definition: {@link #closeInterval}.
	 * 
	 */
	getCloseInterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the column sizes detected during the pre-layout phase
	 * 
	 */
	getColumnSizes : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconColumnWidth.
	 * 
	 * For further details take a look at the property definition: {@link #iconColumnWidth}.
	 * 
	 */
	getIconColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property openedButton.
	 * 
	 * For further details take a look at the property definition: {@link #openedButton}.
	 * 
	 */
	getOpenedButton : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property opener.
	 * 
	 * For further details take a look at the property definition: {@link #opener}.
	 * 
	 */
	getOpener : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property openInterval.
	 * 
	 * For further details take a look at the property definition: {@link #openInterval}.
	 * 
	 */
	getOpenInterval : vjo.NEEDS_IMPL,


	/**
	 * Get the parent menu. Returns null if the menu doesn&#8217;t have a
	 * parent menu.
	 * 
	 */
	getParentMenu : vjo.NEEDS_IMPL,


	/**
	 * Return all selectable menu items.
	 * 
	 */
	getSelectables : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectedButton.
	 * 
	 * For further details take a look at the property definition: {@link #selectedButton}.
	 * 
	 */
	getSelectedButton : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spacingX.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	getSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spacingY.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	getSpacingY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property arrowColumnWidth
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #arrowColumnWidth}.
	 * 
	 */
	initArrowColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property blockBackground
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #blockBackground}.
	 * 
	 */
	initBlockBackground : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property blockerColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #blockerColor}.
	 * 
	 */
	initBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property blockerOpacity
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #blockerOpacity}.
	 * 
	 */
	initBlockerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property closeInterval
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #closeInterval}.
	 * 
	 */
	initCloseInterval : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconColumnWidth
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconColumnWidth}.
	 * 
	 */
	initIconColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property openedButton
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #openedButton}.
	 * 
	 */
	initOpenedButton : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property opener
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #opener}.
	 * 
	 */
	initOpener : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property openInterval
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #openInterval}.
	 * 
	 */
	initOpenInterval : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selectedButton
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selectedButton}.
	 * 
	 */
	initSelectedButton : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property spacingX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	initSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property spacingY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	initSpacingY : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property blockBackground equals true.
	 * 
	 * For further details take a look at the property definition: {@link #blockBackground}.
	 * 
	 */
	isBlockBackground : vjo.NEEDS_IMPL,


	/**
	 * Opens the menu and configures the opener
	 * 
	 */
	open : vjo.NEEDS_IMPL,


	/**
	 * Opens the menu at the mouse cursor position
	 * 
	 */
	openAtMouse : vjo.NEEDS_IMPL,


	/**
	 * Opens the menu in relation to the given point
	 * 
	 */
	openAtPoint : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property arrowColumnWidth.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #arrowColumnWidth}.
	 * 
	 */
	resetArrowColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property blockBackground.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #blockBackground}.
	 * 
	 */
	resetBlockBackground : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property blockerColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #blockerColor}.
	 * 
	 */
	resetBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property blockerOpacity.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #blockerOpacity}.
	 * 
	 */
	resetBlockerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property closeInterval.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #closeInterval}.
	 * 
	 */
	resetCloseInterval : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconColumnWidth.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconColumnWidth}.
	 * 
	 */
	resetIconColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property openedButton.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #openedButton}.
	 * 
	 */
	resetOpenedButton : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property opener.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #opener}.
	 * 
	 */
	resetOpener : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property openInterval.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #openInterval}.
	 * 
	 */
	resetOpenInterval : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selectedButton.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selectedButton}.
	 * 
	 */
	resetSelectedButton : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property spacingX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	resetSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property spacingY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	resetSpacingY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property arrowColumnWidth.
	 * 
	 * For further details take a look at the property definition: {@link #arrowColumnWidth}.
	 * 
	 */
	setArrowColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property blockBackground.
	 * 
	 * For further details take a look at the property definition: {@link #blockBackground}.
	 * 
	 */
	setBlockBackground : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property blockerColor.
	 * 
	 * For further details take a look at the property definition: {@link #blockerColor}.
	 * 
	 */
	setBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property blockerOpacity.
	 * 
	 * For further details take a look at the property definition: {@link #blockerOpacity}.
	 * 
	 */
	setBlockerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property closeInterval.
	 * 
	 * For further details take a look at the property definition: {@link #closeInterval}.
	 * 
	 */
	setCloseInterval : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconColumnWidth.
	 * 
	 * For further details take a look at the property definition: {@link #iconColumnWidth}.
	 * 
	 */
	setIconColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property openedButton.
	 * 
	 * For further details take a look at the property definition: {@link #openedButton}.
	 * 
	 */
	setOpenedButton : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property opener.
	 * 
	 * For further details take a look at the property definition: {@link #opener}.
	 * 
	 */
	setOpener : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property openInterval.
	 * 
	 * For further details take a look at the property definition: {@link #openInterval}.
	 * 
	 */
	setOpenInterval : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectedButton.
	 * 
	 * For further details take a look at the property definition: {@link #selectedButton}.
	 * 
	 */
	setSelectedButton : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spacingX.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	setSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spacingY.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	setSpacingY : vjo.NEEDS_IMPL,


	/**
	 */
	syncWidget : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property blockBackground.
	 * 
	 * For further details take a look at the property definition: {@link #blockBackground}.
	 * 
	 */
	toggleBlockBackground : vjo.NEEDS_IMPL
})
.endType();