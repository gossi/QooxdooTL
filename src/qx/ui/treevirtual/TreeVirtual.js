/**
 * A &#8220;virtual&#8221; tree
 * 
 * A number of convenience methods are available in the following mixins:
 *   
 *     {@link qx.ui.treevirtual.MNode}
 *     {@link qx.ui.treevirtual.MFamily}
 *   
 */
//>public
vjo.ctype('qx.ui.treevirtual.TreeVirtual')
.inherits('qx.ui.table.Table')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Calculate and return the set of nodes which are currently selected by
	 * the user, on the screen.  In the process of calculating which nodes
	 * are selected, the nodes corresponding to the selected rows on the
	 * screen are marked as selected by setting their bSelected
	 * property to true, and all previously-selected nodes have their
	 * bSelected property reset to false.
	 * 
	 */
	_calculateSelectedNodes : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when a key was pressed.
	 * 
	 * We handle the Enter key to toggle opened/closed tree state.  All
	 * other keydown events are passed to our superclass.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the selection has changed.
	 * 
	 */
	_onSelectionChanged : vjo.NEEDS_IMPL,


	/**
	 * Set whether the open/close button should be displayed on a branch,
	 * even if the branch has no children.
	 * 
	 */
	getAlwaysShowOpenCloseSymbol : vjo.NEEDS_IMPL,


	/**
	 * Return the data model for this tree.
	 * 
	 */
	getDataModel : vjo.NEEDS_IMPL,


	/**
	 * Get whether drawing of first-level tree lines should be disabled even
	 * if drawing of tree lines is enabled.
	 * (See also {@link #getUseTreeLines})
	 * 
	 */
	getExcludeFirstLevelTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Obtain the entire hierarchy of labels from the root down to the
	 * specified node.
	 * 
	 */
	getHierarchy : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property openCloseClickSelectsRow.
	 * 
	 * For further details take a look at the property definition: {@link #openCloseClickSelectsRow}.
	 * 
	 */
	getOpenCloseClickSelectsRow : vjo.NEEDS_IMPL,


	/**
	 * Return the nodes that are currently selected.
	 * 
	 */
	getSelectedNodes : vjo.NEEDS_IMPL,


	/**
	 * Get the selection mode currently in use.
	 * 
	 */
	getSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Get whether lines linking tree children shall be drawn on the tree.
	 * 
	 */
	getUseTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property openCloseClickSelectsRow
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #openCloseClickSelectsRow}.
	 * 
	 */
	initOpenCloseClickSelectsRow : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property openCloseClickSelectsRow equals true.
	 * 
	 * For further details take a look at the property definition: {@link #openCloseClickSelectsRow}.
	 * 
	 */
	isOpenCloseClickSelectsRow : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property openCloseClickSelectsRow.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #openCloseClickSelectsRow}.
	 * 
	 */
	resetOpenCloseClickSelectsRow : vjo.NEEDS_IMPL,


	/**
	 * Set whether the open/close button should be displayed on a branch,
	 * even if the branch has no children.
	 * 
	 */
	setAlwaysShowOpenCloseSymbol : vjo.NEEDS_IMPL,


	/**
	 * Set whether drawing of first-level tree-node lines are disabled even
	 * if drawing of tree lines is enabled.
	 * 
	 */
	setExcludeFirstLevelTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property openCloseClickSelectsRow.
	 * 
	 * For further details take a look at the property definition: {@link #openCloseClickSelectsRow}.
	 * 
	 */
	setOpenCloseClickSelectsRow : vjo.NEEDS_IMPL,


	/**
	 * Set the overflow mode.
	 * 
	 */
	setOverflow : vjo.NEEDS_IMPL,


	/**
	 * Set the selection mode.
	 * 
	 */
	setSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Set whether lines linking tree children shall be drawn on the tree.
	 * Note that not all themes support tree lines.  As of the time of this
	 * writing, the Classic theme supports tree lines (and uses +/- icons
	 * which lend themselves to tree lines), while the Modern theme, which
	 * uses right-facing and downward-facing arrows instead of +/-, does not.
	 * 
	 */
	setUseTreeLines : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property openCloseClickSelectsRow.
	 * 
	 * For further details take a look at the property definition: {@link #openCloseClickSelectsRow}.
	 * 
	 */
	toggleOpenCloseClickSelectsRow : vjo.NEEDS_IMPL
})
.endType();