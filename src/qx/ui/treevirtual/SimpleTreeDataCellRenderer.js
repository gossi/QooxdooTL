/**
 * A data cell renderer for the tree column of a simple tree
 * 
 * This cell renderer has provisions for subclasses to easily extend the
 * appearance of the tree. If the tree should contain images, labels,
 * etc. before the indentation, the subclass should override the method
 * _addExtraContentBeforeIndentation(). Similarly, content can be added before
 * the icon by overriding _addExtraContentBeforeIcon(), and before the label
 * by overriding _addExtraContentBeforeLabel().
 * 
 * Each of these overridden methods that calls _addImage() can provide, as
 * part of the map passed to _addImage(), a member called &#8220;tooltip&#8221; which
 * contains the tool tip to present when the mouse is hovered over the image.
 * 
 * If this class is subclassed to form a new cell renderer, an instance of it
 * must be provided, via the &#8216;custom&#8217; parameter, to the TreeVirtual
 * constructor.
 */
//>public
vjo.ctype('qx.ui.treevirtual.SimpleTreeDataCellRenderer')
.inherits('qx.ui.table.cellrenderer.Abstract')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds extra content just before the icon.
	 * 
	 */
	_addExtraContentBeforeIcon : vjo.NEEDS_IMPL,


	/**
	 * Adds extra content just before the indentation.
	 * 
	 */
	_addExtraContentBeforeIndentation : vjo.NEEDS_IMPL,


	/**
	 * Adds extra content just before the label.
	 * 
	 */
	_addExtraContentBeforeLabel : vjo.NEEDS_IMPL,


	/**
	 * Add the icon for this node of the tree.
	 * 
	 */
	_addIcon : vjo.NEEDS_IMPL,


	/**
	 * Add an image to the tree.  This might be a visible icon or it may be
	 * part of the indentation.
	 * 
	 */
	_addImage : vjo.NEEDS_IMPL,


	/**
	 * Add the indentation for this node of the tree.
	 * 
	 * The indentation optionally includes tree lines.  Whether tree lines are
	 * used depends on (a) the properties &#8216;useTreeLines&#8217; and
	 * &#8216;excludeFirstLevelTreelines&#8217; within this class; and (b) the widget
	 * theme in use (some themes don&#8217;t support tree lines).
	 * 
	 */
	_addIndentation : vjo.NEEDS_IMPL,


	/**
	 * Add the label for this node of the tree.
	 * 
	 */
	_addLabel : vjo.NEEDS_IMPL,


	/**
	 */
	_getCellStyle : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHtml : vjo.NEEDS_IMPL,


	/**
	 * Determine the symbol to use for indentation of a tree row, at a
	 * particular column.  The indentation to use may be just white space or
	 * may be a tree line.  Tree lines come in numerous varieties, so the
	 * appropriate one is selected.
	 * 
	 */
	_getIndentSymbol : vjo.NEEDS_IMPL,


	/**
	 */
	_onChangeTheme : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property alwaysShowOpenCloseSymbol.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.
	 * 
	 */
	getAlwaysShowOpenCloseSymbol : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property excludeFirstLevelTreeLines.
	 * 
	 * For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.
	 * 
	 */
	getExcludeFirstLevelTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property useTreeLines.
	 * 
	 * For further details take a look at the property definition: {@link #useTreeLines}.
	 * 
	 */
	getUseTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property alwaysShowOpenCloseSymbol
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.
	 * 
	 */
	initAlwaysShowOpenCloseSymbol : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property excludeFirstLevelTreeLines
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.
	 * 
	 */
	initExcludeFirstLevelTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property useTreeLines
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #useTreeLines}.
	 * 
	 */
	initUseTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property alwaysShowOpenCloseSymbol equals true.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.
	 * 
	 */
	isAlwaysShowOpenCloseSymbol : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property excludeFirstLevelTreeLines equals true.
	 * 
	 * For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.
	 * 
	 */
	isExcludeFirstLevelTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property useTreeLines equals true.
	 * 
	 * For further details take a look at the property definition: {@link #useTreeLines}.
	 * 
	 */
	isUseTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property alwaysShowOpenCloseSymbol.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.
	 * 
	 */
	resetAlwaysShowOpenCloseSymbol : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property excludeFirstLevelTreeLines.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.
	 * 
	 */
	resetExcludeFirstLevelTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property useTreeLines.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #useTreeLines}.
	 * 
	 */
	resetUseTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property alwaysShowOpenCloseSymbol.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.
	 * 
	 */
	setAlwaysShowOpenCloseSymbol : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property excludeFirstLevelTreeLines.
	 * 
	 * For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.
	 * 
	 */
	setExcludeFirstLevelTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property useTreeLines.
	 * 
	 * For further details take a look at the property definition: {@link #useTreeLines}.
	 * 
	 */
	setUseTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property alwaysShowOpenCloseSymbol.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.
	 * 
	 */
	toggleAlwaysShowOpenCloseSymbol : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property excludeFirstLevelTreeLines.
	 * 
	 * For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.
	 * 
	 */
	toggleExcludeFirstLevelTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property useTreeLines.
	 * 
	 * For further details take a look at the property definition: {@link #useTreeLines}.
	 * 
	 */
	toggleUseTreeLines : vjo.NEEDS_IMPL
})
.endType();