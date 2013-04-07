/**
 * The base class of all items, which should be laid out using a layout manager
 * {@link qx.ui.layout.Abstract}.
 */
//>public abstract
vjo.ctype('qx.ui.core.LayoutItem')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties alignX and alignY.
	 * 
	 * For further details take a look at the property definitions: {@link #alignX} and {@link #alignY}.
	 * 
	 */
	_applyAlign : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties height, maxHeight, maxWidth, minHeight, minWidth and width.
	 * 
	 * For further details take a look at the property definitions: {@link #height}, {@link #maxHeight}, {@link #maxWidth}, {@link #minHeight}, {@link #minWidth} and {@link #width}.
	 * 
	 */
	_applyDimension : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties marginBottom, marginLeft, marginRight and marginTop.
	 * 
	 * For further details take a look at the property definitions: {@link #marginBottom}, {@link #marginLeft}, {@link #marginRight} and {@link #marginTop}.
	 * 
	 */
	_applyMargin : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties allowGrowX, allowGrowY, allowShrinkX and allowShrinkY.
	 * 
	 * For further details take a look at the property definitions: {@link #allowGrowX}, {@link #allowGrowY}, {@link #allowShrinkX} and {@link #allowShrinkY}.
	 * 
	 */
	_applyStretching : vjo.NEEDS_IMPL,


	/**
	 * Computes the size hint of the layout item.
	 * 
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 * If an item wants to trade height for width it has to implement this
	 * method and return the preferred height of the item if it is resized to
	 * the given width. This function returns null if the item
	 * do not support height for width.
	 * 
	 */
	_getHeightForWidth : vjo.NEEDS_IMPL,


	/**
	 * Get the widget&#8217;s layout manager.
	 * 
	 */
	_getLayout : vjo.NEEDS_IMPL,


	/**
	 * Returns the root item. The root item is the item which
	 * is directly inserted into an existing DOM node at HTML level.
	 * This is often the BODY element of a typical web page.
	 * 
	 */
	_getRoot : vjo.NEEDS_IMPL,


	/**
	 * Whether the item supports height for width.
	 * 
	 */
	_hasHeightForWidth : vjo.NEEDS_IMPL,


	/**
	 * Handler for the dynamic theme change.
	 * 
	 */
	_onChangeTheme : vjo.NEEDS_IMPL,


	/**
	 * Removes all stored layout properties.
	 * 
	 */
	clearLayoutProperties : vjo.NEEDS_IMPL,


	/**
	 * Reconfigure number of separators
	 * 
	 */
	clearSeparators : vjo.NEEDS_IMPL,


	/**
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property alignX.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	getAlignX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property alignY.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	getAlignY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowGrowX.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowX}.
	 * 
	 */
	getAllowGrowX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowGrowY.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowY}.
	 * 
	 */
	getAllowGrowY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowShrinkX.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkX}.
	 * 
	 */
	getAllowShrinkX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowShrinkY.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkY}.
	 * 
	 */
	getAllowShrinkY : vjo.NEEDS_IMPL,


	/**
	 * Returns the application root
	 * 
	 */
	getApplicationRoot : vjo.NEEDS_IMPL,


	/**
	 * Get the computed location and dimension as computed by
	 * the layout manager.
	 * 
	 */
	getBounds : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property height.
	 * 
	 * For further details take a look at the property definition: {@link #height}.
	 * 
	 */
	getHeight : vjo.NEEDS_IMPL,


	/**
	 * Get the items parent. Even if the item has been added to a
	 * layout, the parent is always a child of the containing item. The parent
	 * item may be null.
	 * 
	 */
	getLayoutParent : vjo.NEEDS_IMPL,


	/**
	 * Returns currently stored layout properties
	 * 
	 */
	getLayoutProperties : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property marginBottom.
	 * 
	 * For further details take a look at the property definition: {@link #marginBottom}.
	 * 
	 */
	getMarginBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property marginLeft.
	 * 
	 * For further details take a look at the property definition: {@link #marginLeft}.
	 * 
	 */
	getMarginLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property marginRight.
	 * 
	 * For further details take a look at the property definition: {@link #marginRight}.
	 * 
	 */
	getMarginRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property marginTop.
	 * 
	 * For further details take a look at the property definition: {@link #marginTop}.
	 * 
	 */
	getMarginTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxHeight.
	 * 
	 * For further details take a look at the property definition: {@link #maxHeight}.
	 * 
	 */
	getMaxHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxWidth.
	 * 
	 * For further details take a look at the property definition: {@link #maxWidth}.
	 * 
	 */
	getMaxWidth : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property minHeight.
	 * 
	 * For further details take a look at the property definition: {@link #minHeight}.
	 * 
	 */
	getMinHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property minWidth.
	 * 
	 * For further details take a look at the property definition: {@link #minWidth}.
	 * 
	 */
	getMinWidth : vjo.NEEDS_IMPL,


	/**
	 * A size hint computes the dimensions of a widget. It returns
	 * the recommended dimensions as well as the min and max dimensions.
	 * The min and max values already respect the stretching properties.
	 * 
	 * Wording
	 * 
	 * User value: Value defined by the widget user, using the size properties
	 * 
	 * Layout value: The value computed by {@link qx.ui.core.Widget#_getContentHint}
	 * 
	 * 
	 * Algorithm
	 * 
	 * minSize: If the user min size is not null, the user value is taken,
	 *     otherwise the layout value is used.
	 * 
	 * (preferred) size: If the user value is not null the user value is used,
	 *     otherwise the layout value is used.
	 * 
	 * max size: Same as the preferred size.

	 * 
	 */
	getSizeHint : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property width.
	 * 
	 * For further details take a look at the property definition: {@link #width}.
	 * 
	 */
	getWidth : vjo.NEEDS_IMPL,


	/**
	 * Whether user bounds are set on this layout item
	 * 
	 */
	hasUserBounds : vjo.NEEDS_IMPL,


	/**
	 * Whether the layout of this item (to layout the children)
	 * is valid.
	 * 
	 */
	hasValidLayout : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property alignX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	initAlignX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property alignY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	initAlignY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowGrowX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowX}.
	 * 
	 */
	initAllowGrowX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowGrowY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowY}.
	 * 
	 */
	initAllowGrowY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowShrinkX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkX}.
	 * 
	 */
	initAllowShrinkX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowShrinkY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkY}.
	 * 
	 */
	initAllowShrinkY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property height
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #height}.
	 * 
	 */
	initHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property marginBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #marginBottom}.
	 * 
	 */
	initMarginBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property marginLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #marginLeft}.
	 * 
	 */
	initMarginLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property marginRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #marginRight}.
	 * 
	 */
	initMarginRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property marginTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #marginTop}.
	 * 
	 */
	initMarginTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxHeight}.
	 * 
	 */
	initMaxHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxWidth
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxWidth}.
	 * 
	 */
	initMaxWidth : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property minHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #minHeight}.
	 * 
	 */
	initMinHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property minWidth
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #minWidth}.
	 * 
	 */
	initMinWidth : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property width
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #width}.
	 * 
	 */
	initWidth : vjo.NEEDS_IMPL,


	/**
	 * Called by the layout manager to mark this item&#8217;s layout as invalid.
	 * This function should clear all layout relevant caches.
	 * 
	 */
	invalidateLayoutCache : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property allowGrowX equals true.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowX}.
	 * 
	 */
	isAllowGrowX : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property allowGrowY equals true.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowY}.
	 * 
	 */
	isAllowGrowY : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property allowShrinkX equals true.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkX}.
	 * 
	 */
	isAllowShrinkX : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property allowShrinkY equals true.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkY}.
	 * 
	 */
	isAllowShrinkY : vjo.NEEDS_IMPL,


	/**
	 * Whether the item should be excluded from the layout
	 * 
	 */
	isExcluded : vjo.NEEDS_IMPL,


	/**
	 * Whether the item is a root item and directly connected to
	 * the DOM.
	 * 
	 */
	isRootWidget : vjo.NEEDS_IMPL,


	/**
	 * Used by the layout engine to apply coordinates and dimensions.
	 * 
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Renders a separator between two children
	 * 
	 */
	renderSeparator : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property alignX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	resetAlignX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property alignY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	resetAlignY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowGrowX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowX}.
	 * 
	 */
	resetAllowGrowX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowGrowY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowY}.
	 * 
	 */
	resetAllowGrowY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowShrinkX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkX}.
	 * 
	 */
	resetAllowShrinkX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowShrinkY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkY}.
	 * 
	 */
	resetAllowShrinkY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowStretchX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowStretchX}.
	 * 
	 */
	resetAllowStretchX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowStretchY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowStretchY}.
	 * 
	 */
	resetAllowStretchY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property height.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #height}.
	 * 
	 */
	resetHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property margin.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #margin}.
	 * 
	 */
	resetMargin : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property marginBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #marginBottom}.
	 * 
	 */
	resetMarginBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property marginLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #marginLeft}.
	 * 
	 */
	resetMarginLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property marginRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #marginRight}.
	 * 
	 */
	resetMarginRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property marginTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #marginTop}.
	 * 
	 */
	resetMarginTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxHeight}.
	 * 
	 */
	resetMaxHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxWidth.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxWidth}.
	 * 
	 */
	resetMaxWidth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property minHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #minHeight}.
	 * 
	 */
	resetMinHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property minWidth.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #minWidth}.
	 * 
	 */
	resetMinWidth : vjo.NEEDS_IMPL,


	/**
	 * Clear the user bounds. After this call the layout item is laid out by
	 * the layout manager again.
	 * 
	 */
	resetUserBounds : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property width.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #width}.
	 * 
	 */
	resetWidth : vjo.NEEDS_IMPL,


	/**
	 * Indicate that the item has layout changes and propagate this information
	 * up the item hierarchy.
	 * 
	 */
	scheduleLayoutUpdate : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property alignX.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	setAlignX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property alignY.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	setAlignY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowGrowX.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowX}.
	 * 
	 */
	setAllowGrowX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowGrowY.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowY}.
	 * 
	 */
	setAllowGrowY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowShrinkX.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkX}.
	 * 
	 */
	setAllowShrinkX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowShrinkY.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkY}.
	 * 
	 */
	setAllowShrinkY : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group allowStretchX.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #allowStretchX}.
	 * 
	 */
	setAllowStretchX : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group allowStretchY.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #allowStretchY}.
	 * 
	 */
	setAllowStretchY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property height.
	 * 
	 * For further details take a look at the property definition: {@link #height}.
	 * 
	 */
	setHeight : vjo.NEEDS_IMPL,


	/**
	 * Set the parent
	 * 
	 */
	setLayoutParent : vjo.NEEDS_IMPL,


	/**
	 * Stores the given layout properties
	 * 
	 */
	setLayoutProperties : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group margin.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #margin}.
	 * 
	 */
	setMargin : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property marginBottom.
	 * 
	 * For further details take a look at the property definition: {@link #marginBottom}.
	 * 
	 */
	setMarginBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property marginLeft.
	 * 
	 * For further details take a look at the property definition: {@link #marginLeft}.
	 * 
	 */
	setMarginLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property marginRight.
	 * 
	 * For further details take a look at the property definition: {@link #marginRight}.
	 * 
	 */
	setMarginRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property marginTop.
	 * 
	 * For further details take a look at the property definition: {@link #marginTop}.
	 * 
	 */
	setMarginTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxHeight.
	 * 
	 * For further details take a look at the property definition: {@link #maxHeight}.
	 * 
	 */
	setMaxHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxWidth.
	 * 
	 * For further details take a look at the property definition: {@link #maxWidth}.
	 * 
	 */
	setMaxWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property minHeight.
	 * 
	 * For further details take a look at the property definition: {@link #minHeight}.
	 * 
	 */
	setMinHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property minWidth.
	 * 
	 * For further details take a look at the property definition: {@link #minWidth}.
	 * 
	 */
	setMinWidth : vjo.NEEDS_IMPL,


	/**
	 * Set user bounds of the widget. Widgets with user bounds are sized and
	 * positioned manually and are ignored by any layout manager.
	 * 
	 */
	setUserBounds : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property width.
	 * 
	 * For further details take a look at the property definition: {@link #width}.
	 * 
	 */
	setWidth : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property allowGrowX.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowX}.
	 * 
	 */
	toggleAllowGrowX : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property allowGrowY.
	 * 
	 * For further details take a look at the property definition: {@link #allowGrowY}.
	 * 
	 */
	toggleAllowGrowY : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property allowShrinkX.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkX}.
	 * 
	 */
	toggleAllowShrinkX : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property allowShrinkY.
	 * 
	 * For further details take a look at the property definition: {@link #allowShrinkY}.
	 * 
	 */
	toggleAllowShrinkY : vjo.NEEDS_IMPL,


	/**
	 * Should be executed on every change of layout properties.
	 * 
	 * This also includes &#8220;virtual&#8221; layout properties like margin or align
	 * when they have an effect on the parent and not on the widget itself.
	 * 
	 * This method is always executed on the parent not on the
	 * modified widget itself.
	 * 
	 */
	updateLayoutProperties : vjo.NEEDS_IMPL
})
.endType();