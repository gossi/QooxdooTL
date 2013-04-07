/**
 * The default data row renderer.
 */
//>public
vjo.ctype('qx.ui.table.rowrenderer.Default')
.inherits('qx.core.Object')
.satisfies('qx.ui.table.IRowRenderer')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Render the new font and update the table pane content
	 * to reflect the font change.
	 * 
	 */
	_renderFont : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property highlightFocusRow.
	 * 
	 * For further details take a look at the property definition: {@link #highlightFocusRow}.
	 * 
	 */
	getHighlightFocusRow : vjo.NEEDS_IMPL,


	/**
	 * Add extra attributes to each row.
	 * 
	 */
	getRowAttributes : vjo.NEEDS_IMPL,


	/**
	 * Get the row&#8217;s height CSS style taking the box model into account
	 * 
	 */
	getRowHeightStyle : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property highlightFocusRow
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #highlightFocusRow}.
	 * 
	 */
	initHighlightFocusRow : vjo.NEEDS_IMPL,


	/**
	 * Initializes the colors from the color theme.
	 * 
	 */
	initThemeValues : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property highlightFocusRow equals true.
	 * 
	 * For further details take a look at the property definition: {@link #highlightFocusRow}.
	 * 
	 */
	isHighlightFocusRow : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property highlightFocusRow.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #highlightFocusRow}.
	 * 
	 */
	resetHighlightFocusRow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property highlightFocusRow.
	 * 
	 * For further details take a look at the property definition: {@link #highlightFocusRow}.
	 * 
	 */
	setHighlightFocusRow : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property highlightFocusRow.
	 * 
	 * For further details take a look at the property definition: {@link #highlightFocusRow}.
	 * 
	 */
	toggleHighlightFocusRow : vjo.NEEDS_IMPL
})
.endType();