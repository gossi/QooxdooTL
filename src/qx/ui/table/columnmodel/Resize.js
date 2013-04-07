/**
 * A table column model that automatically resizes columns based on a
 * selected behavior.
 */
//>public
vjo.ctype('qx.ui.table.columnmodel.Resize')
.inherits('qx.ui.table.columnmodel.Basic')
.mixin('qx.locale.MTranslation')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Reset the column widths to their &#8220;onappear&#8221; defaults.
	 * 
	 */
	_addResetColumnWidthButton : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property behavior.
	 * 
	 * For further details take a look at the property definition: {@link #behavior}.
	 * 
	 */
	_applyBehavior : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the &#8220;appear&#8221; event.
	 * 
	 */
	_onappear : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the &#8220;widthChanged&#8221; event.
	 * 
	 */
	_oncolumnwidthchanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the &#8220;tableWidthChanged&#8221; event.
	 * 
	 */
	_onTableWidthChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the &#8220;verticalScrollBarChanged&#8221; event.
	 * 
	 */
	_onverticalscrollbarchanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the &#8220;visibilityChanged&#8221; event.
	 * 
	 */
	_onvisibilitychanged : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property behavior.
	 * 
	 * For further details take a look at the property definition: {@link #behavior}.
	 * 
	 */
	getBehavior : vjo.NEEDS_IMPL,


	/**
	 * Get the table widget
	 * 
	 */
	getTable : vjo.NEEDS_IMPL,


	/**
	 * Initializes the column model.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property behavior
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #behavior}.
	 * 
	 */
	initBehavior : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property behavior.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #behavior}.
	 * 
	 */
	resetBehavior : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property behavior.
	 * 
	 * For further details take a look at the property definition: {@link #behavior}.
	 * 
	 */
	setBehavior : vjo.NEEDS_IMPL
})
.endType();