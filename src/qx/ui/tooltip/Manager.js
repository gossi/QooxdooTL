/**
 * The tooltip manager globally manages the tooltips of all widgets. It will
 * display tooltips if the user hovers a widgets with a tooltip and hides all
 * other tooltips.
 */
//>public
vjo.ctype('qx.ui.tooltip.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Reset the property {@link #current} if the
	 * current tooltip is the tooltip of the target widget.
	 * 
	 */
	__onFocusOutRoot : vjo.NEEDS_IMPL,


	/**
	 * Event listener for the interval event of the hide timer.
	 * 
	 */
	__onHideInterval : vjo.NEEDS_IMPL,


	/**
	 * Global mouse move event handler
	 * 
	 */
	__onMouseMoveRoot : vjo.NEEDS_IMPL,


	/**
	 * Resets the property {@link #current} if there was a
	 * tooltip and no new one is created.
	 * 
	 */
	__onMouseOutRoot : vjo.NEEDS_IMPL,


	/**
	 * Searches for the tooltip of the target widget. If any tooltip instance
	 * is found this instance is bound to the target widget and the tooltip is
	 * set as {@link #current}
	 * 
	 */
	__onMouseOverRoot : vjo.NEEDS_IMPL,


	/**
	 * Event listener for the interval event of the show timer.
	 * 
	 */
	__onShowInterval : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property current.
	 * 
	 * For further details take a look at the property definition: {@link #current}.
	 * 
	 */
	_applyCurrent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property current.
	 * 
	 * For further details take a look at the property definition: {@link #current}.
	 * 
	 */
	getCurrent : vjo.NEEDS_IMPL,


	/**
	 * Get the shared tooltip, which is used to display the
	 * {@link qx.ui.core.Widget#toolTipText} and
	 * {@link qx.ui.core.Widget#toolTipIcon} properties of widgets.
	 * You can use this public shared instance to e.g. customize the
	 * look and feel of the validation tooltips like
	 * getSharedErrorTooltip().getChildControl(&#8220;atom&#8221;).getChildControl(&#8220;label&#8221;).set({rich: true, wrap: true, width: 80})
	 * 
	 */
	getSharedErrorTooltip : vjo.NEEDS_IMPL,


	/**
	 * Get the shared tooltip, which is used to display the
	 * {@link qx.ui.core.Widget#toolTipText} and
	 * {@link qx.ui.core.Widget#toolTipIcon} properties of widgets.
	 * You can use this public shared instance to e.g. customize the
	 * look and feel.
	 * 
	 */
	getSharedTooltip : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showInvalidToolTips.
	 * 
	 * For further details take a look at the property definition: {@link #showInvalidToolTips}.
	 * 
	 */
	getShowInvalidToolTips : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showToolTips.
	 * 
	 * For further details take a look at the property definition: {@link #showToolTips}.
	 * 
	 */
	getShowToolTips : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property current
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #current}.
	 * 
	 */
	initCurrent : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showInvalidToolTips
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showInvalidToolTips}.
	 * 
	 */
	initShowInvalidToolTips : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showToolTips
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showToolTips}.
	 * 
	 */
	initShowToolTips : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showInvalidToolTips equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showInvalidToolTips}.
	 * 
	 */
	isShowInvalidToolTips : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showToolTips equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showToolTips}.
	 * 
	 */
	isShowToolTips : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property current.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #current}.
	 * 
	 */
	resetCurrent : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showInvalidToolTips.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showInvalidToolTips}.
	 * 
	 */
	resetShowInvalidToolTips : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showToolTips.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showToolTips}.
	 * 
	 */
	resetShowToolTips : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property current.
	 * 
	 * For further details take a look at the property definition: {@link #current}.
	 * 
	 */
	setCurrent : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showInvalidToolTips.
	 * 
	 * For further details take a look at the property definition: {@link #showInvalidToolTips}.
	 * 
	 */
	setShowInvalidToolTips : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showToolTips.
	 * 
	 * For further details take a look at the property definition: {@link #showToolTips}.
	 * 
	 */
	setShowToolTips : vjo.NEEDS_IMPL,


	/**
	 * Explicitly show tooltip for particular form item.
	 * 
	 */
	showToolTip : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showInvalidToolTips.
	 * 
	 * For further details take a look at the property definition: {@link #showInvalidToolTips}.
	 * 
	 */
	toggleShowInvalidToolTips : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showToolTips.
	 * 
	 * For further details take a look at the property definition: {@link #showToolTips}.
	 * 
	 */
	toggleShowToolTips : vjo.NEEDS_IMPL
})
.endType();