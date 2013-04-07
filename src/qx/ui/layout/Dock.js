/**
 * Docks children to one of the edges.
 * 
 * Features
 * 
 * 
 * Percent width for left/right/center attached children
 * Percent height for top/bottom/center attached children
 * Minimum and maximum dimensions
 * Prioritized growing/shrinking (flex)
 * Auto sizing
 * Margins and Spacings
 * Alignment in orthogonal axis (e.g. alignX of north attached)
 * Different sort options for children
 * 
 * 
 * Item Properties
 * 
 * 
 * edge (String): The edge where the layout item
 *   should be docked. This may be one of north, east,
 *   south, west or center. (Required)
 * width (String): Defines a percent
 *   width for the item. The percent width,
 *   when specified, is used instead of the width defined by the size hint.
 *   This is only supported for children added to the north or south edge or
 *   are centered in the middle of the layout.
 *   The minimum and maximum width still takes care of the elements limitations.
 *   It has no influence on the layout's size hint. Percents are mainly useful for
 *   widgets which are sized by the outer hierarchy.
 * 
 * height (String): Defines a percent
 *   height for the item. The percent height,
 *   when specified, is used instead of the height defined by the size hint.
 *   This is only supported for children added to the west or east edge or
 *   are centered in the middle of the layout.
 *   The minimum and maximum height still takes care of the elements limitations.
 *   It has no influence on the layout's size hint. Percents are mainly useful for
 *   widgets which are sized by the outer hierarchy.
 * 
 * 
 * 
 * Example
 * 
 * 
 * var layout = new qx.ui.layout.Dock();
 * 
 * var w1 = new qx.ui.core.Widget();
 * var w2 = new qx.ui.core.Widget();
 * var w3 = new qx.ui.core.Widget();
 * 
 * w1.setHeight(200);
 * w2.setWidth(150);
 * 
 * var container = new qx.ui.container.Composite(layout);
 * container.add(w1, {edge:"north"});
 * container.add(w2, {edge:"west"});
 * container.add(w3, {edge:"center"});
 * 
 * 
 * Detailed Description
 * 
 * Using this layout, items may be &#8220;docked&#8221; to a specific side
 * of the available space. Each displayed item reduces the available space
 * for the following children. Priorities depend on the position of
 * the child in the internal children list.
 * 
 * External Documentation
 * 
 * 
 * Extended documentation and links to demos of this layout in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.layout.Dock')
.inherits('qx.ui.layout.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Rebuilds cache for sorted children list.
	 * 
	 */
	__rebuildCache : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property sort.
	 * 
	 * For further details take a look at the property definition: {@link #sort}.
	 * 
	 */
	_applySort : vjo.NEEDS_IMPL,


	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 * Computes the dimensions each separator on both the x and
	 * y axis needs.
	 * 
	 */
	_getSeparatorWidths : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property connectSeparators.
	 * 
	 * For further details take a look at the property definition: {@link #connectSeparators}.
	 * 
	 */
	getConnectSeparators : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property separatorX.
	 * 
	 * For further details take a look at the property definition: {@link #separatorX}.
	 * 
	 */
	getSeparatorX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property separatorY.
	 * 
	 * For further details take a look at the property definition: {@link #separatorY}.
	 * 
	 */
	getSeparatorY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property sort.
	 * 
	 * For further details take a look at the property definition: {@link #sort}.
	 * 
	 */
	getSort : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property connectSeparators
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #connectSeparators}.
	 * 
	 */
	initConnectSeparators : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property separatorX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #separatorX}.
	 * 
	 */
	initSeparatorX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property separatorY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #separatorY}.
	 * 
	 */
	initSeparatorY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property sort
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #sort}.
	 * 
	 */
	initSort : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property connectSeparators equals true.
	 * 
	 * For further details take a look at the property definition: {@link #connectSeparators}.
	 * 
	 */
	isConnectSeparators : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property connectSeparators.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #connectSeparators}.
	 * 
	 */
	resetConnectSeparators : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property separatorX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #separatorX}.
	 * 
	 */
	resetSeparatorX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property separatorY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #separatorY}.
	 * 
	 */
	resetSeparatorY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property sort.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #sort}.
	 * 
	 */
	resetSort : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property connectSeparators.
	 * 
	 * For further details take a look at the property definition: {@link #connectSeparators}.
	 * 
	 */
	setConnectSeparators : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property separatorX.
	 * 
	 * For further details take a look at the property definition: {@link #separatorX}.
	 * 
	 */
	setSeparatorX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property separatorY.
	 * 
	 * For further details take a look at the property definition: {@link #separatorY}.
	 * 
	 */
	setSeparatorY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property sort.
	 * 
	 * For further details take a look at the property definition: {@link #sort}.
	 * 
	 */
	setSort : vjo.NEEDS_IMPL,


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
	 * Toggles the (computed) value of the boolean property connectSeparators.
	 * 
	 * For further details take a look at the property definition: {@link #connectSeparators}.
	 * 
	 */
	toggleConnectSeparators : vjo.NEEDS_IMPL
})
.endType();