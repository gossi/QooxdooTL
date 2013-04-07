/**
 * A atom layout. Used to place an image and label in relation
 * to each other. Useful to create buttons, list items, etc.
 * 
 * Features
 * 
 * 
 * Gap between icon and text (using {@link #gap})
 * Vertical and horizontal mode (using {@link #iconPosition})
 * Sorting options to place first child on top/left or bottom/right (using {@link #iconPosition})
 * Automatically middles/centers content to the available space
 * Auto-sizing
 * Supports more than two children (will be processed the same way like the previous ones)
 * 
 * 
 * Item Properties
 * 
 * None
 * 
 * Notes
 * 
 * 
 * Does not support margins and alignment of {@link qx.ui.core.LayoutItem}.
 * 
 * 
 * Alternative Names
 * 
 * None
 */
//>public
vjo.ctype('qx.ui.layout.Atom')
.inherits('qx.ui.layout.Abstract')
.protos({
	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property center.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	getCenter : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property gap.
	 * 
	 * For further details take a look at the property definition: {@link #gap}.
	 * 
	 */
	getGap : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconPosition.
	 * 
	 * For further details take a look at the property definition: {@link #iconPosition}.
	 * 
	 */
	getIconPosition : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property center
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	initCenter : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property gap
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #gap}.
	 * 
	 */
	initGap : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconPosition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconPosition}.
	 * 
	 */
	initIconPosition : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property center equals true.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	isCenter : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property center.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	resetCenter : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property gap.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #gap}.
	 * 
	 */
	resetGap : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconPosition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconPosition}.
	 * 
	 */
	resetIconPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property center.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	setCenter : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property gap.
	 * 
	 * For further details take a look at the property definition: {@link #gap}.
	 * 
	 */
	setGap : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconPosition.
	 * 
	 * For further details take a look at the property definition: {@link #iconPosition}.
	 * 
	 */
	setIconPosition : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property center.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	toggleCenter : vjo.NEEDS_IMPL
})
.endType();