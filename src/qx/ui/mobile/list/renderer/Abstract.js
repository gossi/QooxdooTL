/**
 * Base class for all list item renderer.
 */
//>public abstract
vjo.ctype('qx.ui.mobile.list.renderer.Abstract')
.inherits('qx.ui.mobile.container.Composite')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selected.
	 * 
	 * For further details take a look at the property definition: {@link #selected}.
	 * 
	 */
	_applySelected : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showArrow.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	_applyShowArrow : vjo.NEEDS_IMPL,


	/**
	 */
	_getTagName : vjo.NEEDS_IMPL,


	/**
	 * Returns the row index of a certain DOM element in the list.
	 * 
	 */
	getRowIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns the row index of a certain DOM element in the list from the given event.
	 * 
	 */
	getRowIndexFromEvent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	getSelectable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selected.
	 * 
	 * For further details take a look at the property definition: {@link #selected}.
	 * 
	 */
	getSelected : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showArrow.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	getShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selectable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	initSelectable : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selected
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selected}.
	 * 
	 */
	initSelected : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showArrow
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	initShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property selectable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	isSelectable : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property selected equals true.
	 * 
	 * For further details take a look at the property definition: {@link #selected}.
	 * 
	 */
	isSelected : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showArrow equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	isShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Resets all defined child widgets. Override this method in your custom
	 * list item renderer and reset all widgets displaying data. Needed as the
	 * renderer is used for every row and otherwise data of a different row
	 * might be displayed, when not all data displaying widgets are used for the row.
	 * Gets called automatically by the {@link qx.ui.mobile.list.provider.Provider}.
	 * 
	 */
	reset : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selectable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	resetSelectable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selected.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selected}.
	 * 
	 */
	resetSelected : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showArrow.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	resetShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	setSelectable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selected.
	 * 
	 * For further details take a look at the property definition: {@link #selected}.
	 * 
	 */
	setSelected : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showArrow.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	setShowArrow : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	toggleSelectable : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property selected.
	 * 
	 * For further details take a look at the property definition: {@link #selected}.
	 * 
	 */
	toggleSelected : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showArrow.
	 * 
	 * For further details take a look at the property definition: {@link #showArrow}.
	 * 
	 */
	toggleShowArrow : vjo.NEEDS_IMPL
})
.endType();