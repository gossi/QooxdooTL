/**
 * Virtual tree implementation.
 * 
 * The virtual tree can be used to render node and leafs. Nodes and leafs are
 * both items for a tree. The difference between a node and a leaf is that a
 * node has child items, but a leaf not.
 * 
 * With the {@link qx.ui.tree.core.IVirtualTreeDelegate} interface it is possible
 * to configure the tree&#8217;s behavior (item renderer configuration, etc.).
 * 
 * Here&#8217;s an example of how to use the widget:
 * 
 * 
 * //create the model data
 * var nodes = [];
 * for (var i = 0; i < 2500; i++)
 * {
 *   nodes[i] = {name : "Item " + i};
 * 
 *   // if its not the root node
 *   if (i !== 0)
 *   {
 *     // add the children in some random order
 *     var node = nodes[parseInt(Math.random() * i)];
 * 
 *     if(node.children == null) {
 *       node.children = [];
 *     }
 *     node.children.push(nodes[i]);
 *   }
 * }
 * 
 * // converts the raw nodes to qooxdoo objects
 * nodes = qx.data.marshal.Json.createModel(nodes, true);
 * 
 * // creates the tree
 * var tree = new qx.ui.tree.VirtualTree(nodes.getItem(0), "name", "children").set({
 *   width : 200,
 *   height : 400
 * });
 * 
 * //log selection changes
 * tree.getSelection().addListener("change", function(e) {
 *   this.debug("Selection: " + tree.getSelection().getItem(0).getName());
 * }, this);

 */
//>public
vjo.ctype('qx.ui.tree.VirtualTree')
.inherits('qx.ui.virtual.core.Scroller')
.satisfies(['qx.ui.tree.core.IVirtualTree','qx.data.controller.ISelection'])
.mixin(['qx.ui.virtual.selection.MModel','qx.ui.core.MContentPadding'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper method to apply model changes. Normally build the lookup table and
	 * apply the default selection.
	 * 
	 */
	__applyModelChanges : vjo.NEEDS_IMPL,


	/**
	 * Builds the parent chain form the passed item.
	 * 
	 */
	__buildParentChain : vjo.NEEDS_IMPL,


	/**
	 * Helper method to get all visible children form the passed parent node.
	 * The algorithm implements a depth-first search with a complexity:
	 * O(n) and n are all visible items.
	 * 
	 */
	__getVisibleChildrenFrom : vjo.NEEDS_IMPL,


	/**
	 * Return the first visible parent node from the last selected node.
	 * 
	 */
	__getVisibleParent : vjo.NEEDS_IMPL,


	/**
	 * Helper method to set the node to the open nodes data structure when it
	 * is not included.
	 * 
	 */
	__openNode : vjo.NEEDS_IMPL,


	/**
	 * Helper method to set the target node and all his parents to the open
	 * nodes data structure. The algorithm implements a depth-first search with
	 * a complexity: O(n) and n are all model items.
	 * 
	 */
	__openNodeAndAllParents : vjo.NEEDS_IMPL,


	/**
	 * Helper method to update the row count.
	 * 
	 */
	__updateRowCount : vjo.NEEDS_IMPL,


	/**
	 * Hook method which is called from the {@link qx.ui.virtual.selection.MModel}.
	 * The hook method builds the parent chain form the current selected item.
	 * 
	 */
	_afterApplySelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property childProperty.
	 * 
	 * For further details take a look at the property definition: {@link #childProperty}.
	 * 
	 */
	_applyChildProperty : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	_applyDelegate : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property hideRoot.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	_applyHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property iconOptions.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	_applyIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property iconPath.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	_applyIconPath : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property labelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	_applyLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property labelPath.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	_applyLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	_applyModel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property openMode.
	 * 
	 * For further details take a look at the property definition: {@link #openMode}.
	 * 
	 */
	_applyOpenMode : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property itemHeight.
	 * 
	 * For further details take a look at the property definition: {@link #itemHeight}.
	 * 
	 */
	_applyRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showLeafs.
	 * 
	 * For further details take a look at the property definition: {@link #showLeafs}.
	 * 
	 */
	_applyShowLeafs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showTopLevelOpenCloseIcons.
	 * 
	 * For further details take a look at the property definition: {@link #showTopLevelOpenCloseIcons}.
	 * 
	 */
	_applyShowTopLevelOpenCloseIcons : vjo.NEEDS_IMPL,


	/**
	 * Hook method which is called from the {@link qx.ui.virtual.selection.MModel}.
	 * The hook method sets the first visible parent not as new selection when
	 * the current selection is empty and the selection mode is one selection.
	 * 
	 */
	_beforeApplySelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the element, to which the content padding should be applied.
	 * 
	 */
	_getContentPaddingTarget : vjo.NEEDS_IMPL,


	/**
	 * Returns the model data for the given row.
	 * 
	 */
	_getDataFromRow : vjo.NEEDS_IMPL,


	/**
	 * Returns the selectable model items.
	 * 
	 */
	_getSelectables : vjo.NEEDS_IMPL,


	/**
	 * Initializes the virtual tree.
	 * 
	 */
	_init : vjo.NEEDS_IMPL,


	/**
	 * Initializes the virtual tree layer.
	 * 
	 */
	_initLayer : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the changeBubble event. The handler rebuild the lookup
	 * table when the child structure changed.
	 * 
	 */
	_onChangeBubble : vjo.NEEDS_IMPL,


	/**
	 * Event handler for key press events. Open and close the current selected
	 * item on key left and right press. Jump to parent on key left if already
	 * closed.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Event handler to open/close clicked nodes.
	 * 
	 */
	_onOpen : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the update event.
	 * 
	 */
	_onUpdated : vjo.NEEDS_IMPL,


	/**
	 * Performs a lookup from model index to row.
	 * 
	 */
	_reverseLookup : vjo.NEEDS_IMPL,


	/**
	 * Helper method to build the internal data structure.
	 * 
	 */
	buildLookupTable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property childProperty.
	 * 
	 * For further details take a look at the property definition: {@link #childProperty}.
	 * 
	 */
	getChildProperty : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	getDelegate : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property hideRoot.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	getHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconOptions.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	getIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconPath.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	getIconPath : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property itemHeight.
	 * 
	 * For further details take a look at the property definition: {@link #itemHeight}.
	 * 
	 */
	getItemHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property labelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	getLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property labelPath.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	getLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property openMode.
	 * 
	 * For further details take a look at the property definition: {@link #openMode}.
	 * 
	 */
	getOpenMode : vjo.NEEDS_IMPL,


	/**
	 * Returns all open nodes.
	 * 
	 */
	getOpenNodes : vjo.NEEDS_IMPL,


	/**
	 * Helper method to get the parent node. Node! This only works with leaf and
	 * nodes which are in the internal lookup table.
	 * 
	 */
	getParent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showLeafs.
	 * 
	 * For further details take a look at the property definition: {@link #showLeafs}.
	 * 
	 */
	getShowLeafs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showTopLevelOpenCloseIcons.
	 * 
	 * For further details take a look at the property definition: {@link #showTopLevelOpenCloseIcons}.
	 * 
	 */
	getShowTopLevelOpenCloseIcons : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property childProperty
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #childProperty}.
	 * 
	 */
	initChildProperty : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property delegate
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	initDelegate : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property hideRoot
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	initHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconOptions
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	initIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconPath
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	initIconPath : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property itemHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #itemHeight}.
	 * 
	 */
	initItemHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property labelOptions
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	initLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property labelPath
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	initLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property model
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	initModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property openMode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #openMode}.
	 * 
	 */
	initOpenMode : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showLeafs
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showLeafs}.
	 * 
	 */
	initShowLeafs : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showTopLevelOpenCloseIcons
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showTopLevelOpenCloseIcons}.
	 * 
	 */
	initShowTopLevelOpenCloseIcons : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property hideRoot equals true.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	isHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showLeafs equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showLeafs}.
	 * 
	 */
	isShowLeafs : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showTopLevelOpenCloseIcons equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showTopLevelOpenCloseIcons}.
	 * 
	 */
	isShowTopLevelOpenCloseIcons : vjo.NEEDS_IMPL,


	/**
	 * Opens the passed node and all his parents. Note! The algorithm
	 * implements a depth-first search with a complexity: O(n) and
	 * n are all model items.
	 * 
	 */
	openNodeAndParents : vjo.NEEDS_IMPL,


	/**
	 * Trigger a rebuild from the internal data structure.
	 * 
	 */
	refresh : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property childProperty.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #childProperty}.
	 * 
	 */
	resetChildProperty : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property delegate.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	resetDelegate : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property hideRoot.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	resetHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconOptions.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	resetIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconPath.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	resetIconPath : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property itemHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #itemHeight}.
	 * 
	 */
	resetItemHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property labelOptions.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	resetLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property labelPath.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	resetLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property model.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	resetModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property openMode.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #openMode}.
	 * 
	 */
	resetOpenMode : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showLeafs.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showLeafs}.
	 * 
	 */
	resetShowLeafs : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showTopLevelOpenCloseIcons.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showTopLevelOpenCloseIcons}.
	 * 
	 */
	resetShowTopLevelOpenCloseIcons : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property childProperty.
	 * 
	 * For further details take a look at the property definition: {@link #childProperty}.
	 * 
	 */
	setChildProperty : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	setDelegate : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property hideRoot.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	setHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconOptions.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	setIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconPath.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	setIconPath : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property itemHeight.
	 * 
	 * For further details take a look at the property definition: {@link #itemHeight}.
	 * 
	 */
	setItemHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property labelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	setLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property labelPath.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	setLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property openMode.
	 * 
	 * For further details take a look at the property definition: {@link #openMode}.
	 * 
	 */
	setOpenMode : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showLeafs.
	 * 
	 * For further details take a look at the property definition: {@link #showLeafs}.
	 * 
	 */
	setShowLeafs : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showTopLevelOpenCloseIcons.
	 * 
	 * For further details take a look at the property definition: {@link #showTopLevelOpenCloseIcons}.
	 * 
	 */
	setShowTopLevelOpenCloseIcons : vjo.NEEDS_IMPL,


	/**
	 */
	syncWidget : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property hideRoot.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	toggleHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showLeafs.
	 * 
	 * For further details take a look at the property definition: {@link #showLeafs}.
	 * 
	 */
	toggleShowLeafs : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showTopLevelOpenCloseIcons.
	 * 
	 * For further details take a look at the property definition: {@link #showTopLevelOpenCloseIcons}.
	 * 
	 */
	toggleShowTopLevelOpenCloseIcons : vjo.NEEDS_IMPL
})
.endType();