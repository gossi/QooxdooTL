/**
 * A horizontal box layout.
 * 
 * The horizontal box layout lays out widgets in a horizontal row, from left
 * to right.
 * 
 * Features
 * 
 * 
 * Minimum and maximum dimensions
 * Prioritized growing/shrinking (flex)
 * Margins (with horizontal collapsing)
 * Auto sizing (ignoring percent values)
 * Percent widths (not relevant for size hint)
 * Alignment (child property {@link qx.ui.core.LayoutItem#alignX} is ignored)
 * Horizontal spacing (collapsed with margins)
 * Reversed children layout (from last to first)
 * Vertical children stretching (respecting size hints)
 * 
 * 
 * Item Properties
 * 
 * 
 * flex (Integer): The flexibility of a layout item determines how the container
 *   distributes remaining empty space among its children. If items are made
 *   flexible, they can grow or shrink accordingly. Their relative flex values
 *   determine how the items are being resized, i.e. the larger the flex ratio
 *   of two items, the larger the resizing of the first item compared to the
 *   second.
 * 
 * If there is only one flex item in a layout container, its actual flex
 *   value is not relevant. To disallow items to become flexible, set the
 *   flex value to zero.
 * 
 * width (String): Allows to define a percent
 *   width for the item. The width in percent, if specified, is used instead
 *   of the width defined by the size hint. The minimum and maximum width still
 *   takes care of the element&#8217;s limits. It has no influence on the layout&#8217;s
 *   size hint. Percent values are mostly useful for widgets which are sized by
 *   the outer hierarchy.
 * 
 * 
 * 
 * Example
 * 
 * Here is a little example of how to use the grid layout.
 * 
 * 
 * var layout = new qx.ui.layout.HBox();
 * layout.setSpacing(4); // apply spacing
 * 
 * var container = new qx.ui.container.Composite(layout);
 * 
 * container.add(new qx.ui.core.Widget());
 * container.add(new qx.ui.core.Widget());
 * container.add(new qx.ui.core.Widget());
 * 
 * 
 * External Documentation
 * 
 * See extended documentation
 * and links to demos for this layout.
 */
//>public
vjo.ctype('qx.ui.layout.HBox')
.inherits('qx.ui.layout.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Rebuilds caches for flex and percent layout properties
	 * 
	 */
	__rebuildCache : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property reversed.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	_applyReversed : vjo.NEEDS_IMPL,


	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property reversed.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	getReversed : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property separator.
	 * 
	 * For further details take a look at the property definition: {@link #separator}.
	 * 
	 */
	getSeparator : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	getSpacing : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property reversed
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	initReversed : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property separator
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #separator}.
	 * 
	 */
	initSeparator : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property reversed equals true.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	isReversed : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property reversed.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	resetReversed : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property separator.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #separator}.
	 * 
	 */
	resetSeparator : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property reversed.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	setReversed : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property separator.
	 * 
	 * For further details take a look at the property definition: {@link #separator}.
	 * 
	 */
	setSeparator : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	setSpacing : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property reversed.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	toggleReversed : vjo.NEEDS_IMPL
})
.endType();