/**
 * A simple tree data model used as the table model
 * 
 * The object structure of a single node of the tree is:
 * 
 * 
 * {
 *   // USER-PROVIDED ATTRIBUTES
 *   // ------------------------
 *   type           : qx.ui.treevirtual.MTreePrimitive.Type.LEAF,
 *   parentNodeId   : 23,    // index of the parent node in _nodeArr
 * 
 *   label          : "My Documents",
 *   bSelected      : true,  // true if node is selected; false otherwise.
 *   bOpened        : true,  // true (-), false (+)
 *   bHideOpenClose : false, // whether to hide the open/close button
 *   icon           : "images/folder.gif",
 *   iconSelected   : "images/folder_selected.gif",
 * 
 *   cellStyle      : "background-color:cyan"
 *   labelStyle     : "background-color:red;color:white"
 * 
 *   // USER-PROVIDED COLUMN DATA
 *   columnData     : [
 *                      null, // null at index of tree column (typically 0)
 *                      "text of column 1",
 *                      "text of column 2"
 *                    ],
 * 
 *   // APPLICATION-, MIXIN-, and SUBCLASS-PROVIDED CUSTOM DATA
 *   data           : {
 *                      application :
 *                      {
 *                          // application-specific user data goes in here
 *                          foo: "bar",
 *                          ...
 *                      },
 *                      MDragAndDropSupport :
 *                      {
 *                          // Data required for the Drag & Drop mixin.
 *                          // When a mixin is included, its constructor
 *                          // should create this object, named according
 *                          // to the mixin or subclass name (empty or
 *                          // otherwise)
 *                      },
 *                      ... // Additional mixins or subclasses.
 *                    },
 * 
 *   // INTERNALLY-CALCULATED ATTRIBUTES
 *   // --------------------------------
 *   // The following properties need not (and should not) be set by the
 *   // caller, but are automatically calculated.  Some are used internally,
 *   // while others may be of use to event listeners.
 * 
 *   nodeId         : 42,   // The index in _nodeArr, useful to event listeners.
 *   children       : [ ],  // each value is an index into _nodeArr
 * 
 *   level          : 2,    // The indentation level of this tree node
 * 
 *   bFirstChild    : true,
 *   lastChild      : [ false ],  // Array where the index is the column of
 *                                // indentation, and the value is a boolean.
 *                                // These are used to locate the
 *                                // appropriate "tree line" icon.
 * }

 */
//>public
vjo.ctype('qx.ui.treevirtual.SimpleTreeDataModel')
.inherits('qx.ui.table.model.Abstract')
.mixin('qx.ui.treevirtual.MTreePrimitive')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Calcultes the lastChild flags to the nodes, so that the tree can render the
	 * tree lines right.
	 * 
	 */
	__calculateLastChildFlags : vjo.NEEDS_IMPL,


	/**
	 * Orders the node and creates all data needed to render the tree.
	 * 
	 */
	__inorder : vjo.NEEDS_IMPL,


	/**
	 * Renders the tree data.
	 * 
	 */
	__render : vjo.NEEDS_IMPL,


	/**
	 * Sets the last child flag for a node and all it&#8217;s parents.
	 * 
	 */
	__setLastChildFlag : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property filter.
	 * 
	 * For further details take a look at the property definition: {@link #filter}.
	 * 
	 */
	_applyFilter : vjo.NEEDS_IMPL,


	/**
	 * Clear all selections in the data model.  This method does not clear
	 * selections displayed in the widget, and is intended for internal use,
	 * not by users of this class.
	 * 
	 */
	_clearSelections : vjo.NEEDS_IMPL,


	/**
	 * Add a branch to the tree.
	 * 
	 */
	addBranch : vjo.NEEDS_IMPL,


	/**
	 * Add a leaf to the tree.
	 * 
	 */
	addLeaf : vjo.NEEDS_IMPL,


	/**
	 * Clears the tree of all nodes
	 * 
	 */
	clearData : vjo.NEEDS_IMPL,


	/**
	 * Retrieve the data from an additional column (a column other than the
	 * tree column) of the tree.
	 * 
	 */
	getColumnData : vjo.NEEDS_IMPL,


	/**
	 * Return the array of node data.
	 * 
	 */
	getData : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property filter.
	 * 
	 * For further details take a look at the property definition: {@link #filter}.
	 * 
	 */
	getFilter : vjo.NEEDS_IMPL,


	/**
	 * Returns the node object specific to a currently visible row. In this
	 * simple tree data model, that&#8217;s the same as retrieving the value of the
	 * tree column of the specified row.
	 * 
	 */
	getNode : vjo.NEEDS_IMPL,


	/**
	 * This operation maps rowIndexes to nodes.  It does the opposite job to {@link #getRowFromNodeId}.
	 * This function is useful to map selection (row based) to nodes.
	 * 
	 */
	getNodeFromRow : vjo.NEEDS_IMPL,


	/**
	 * Return the mapping of nodes to rendered rows.  This function is intended
	 * for use by the cell renderer, not by users of this class.
	 * It is also useful to select a node.
	 * 
	 */
	getNodeRowMap : vjo.NEEDS_IMPL,


	/**
	 */
	getRowCount : vjo.NEEDS_IMPL,


	/**
	 */
	getRowData : vjo.NEEDS_IMPL,


	/**
	 * This operation maps nodes to rowIndexes.  It does the opposite job to {@link #getNodeFromRow}.
	 * 
	 */
	getRowFromNodeId : vjo.NEEDS_IMPL,


	/**
	 * Return the nodes that are currently selected.
	 * 
	 */
	getSelectedNodes : vjo.NEEDS_IMPL,


	/**
	 * Returns the column index the model is sorted by. This model is never
	 * sorted, so -1 is returned.
	 * 
	 */
	getSortColumnIndex : vjo.NEEDS_IMPL,


	/**
	 * Get the tree object for which this data model is used.
	 * 
	 */
	getTree : vjo.NEEDS_IMPL,


	/**
	 * Get the column in which the tree is to be displayed.
	 * 
	 */
	getTreeColumn : vjo.NEEDS_IMPL,


	/**
	 * Returns a cell value by column index.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property filter
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #filter}.
	 * 
	 */
	initFilter : vjo.NEEDS_IMPL,


	/**
	 */
	isColumnEditable : vjo.NEEDS_IMPL,


	/**
	 */
	isColumnSortable : vjo.NEEDS_IMPL,


	/**
	 * Move a node in the tree.
	 * 
	 */
	move : vjo.NEEDS_IMPL,


	/**
	 * Prune the tree by removing, recursively, all of a node&#8217;s children.  If
	 * requested, also remove the node itself.
	 * 
	 */
	prune : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property filter.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #filter}.
	 * 
	 */
	resetFilter : vjo.NEEDS_IMPL,


	/**
	 * Add data to an additional column (a column other than the tree column)
	 * of the tree.
	 * 
	 */
	setColumnData : vjo.NEEDS_IMPL,


	/**
	 * Sets whether a column is editable.
	 * 
	 */
	setColumnEditable : vjo.NEEDS_IMPL,


	/**
	 * Sets the whole data en bulk, or notifies the data model that node
	 * modifications are complete.
	 * 
	 */
	setData : vjo.NEEDS_IMPL,


	/**
	 * Sets all columns editable or not editable.
	 * 
	 */
	setEditable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property filter.
	 * 
	 * For further details take a look at the property definition: {@link #filter}.
	 * 
	 */
	setFilter : vjo.NEEDS_IMPL,


	/**
	 * Set state attributes of a node.
	 * 
	 */
	setState : vjo.NEEDS_IMPL,


	/**
	 * Set the tree object for which this data model is used.
	 * 
	 */
	setTree : vjo.NEEDS_IMPL,


	/**
	 * Specifies which column the tree is to be displayed in.  The tree is
	 * displayed using the SimpleTreeDataCellRenderer.  Other columns may be
	 * provided which use different cell renderers.
	 * 
	 * Setting the tree column involves more than simply setting this column
	 * index; it also requires setting an appropriate cell renderer for this
	 * column, that knows how to render a tree. The expected and typical
	 * method of setting the tree column is to provide it in the &#8216;custom&#8217;
	 * parameter to the TreeVirtual constructor, which also initializes the
	 * proper cell renderers. This method does not set any cell renderers. If
	 * you wish to call this method on your own, you should also manually set
	 * the cell renderer for the specified column, and likely also set the
	 * cell renderer for column 0 (the former tree column) to something
	 * appropriate to your data.
	 * 
	 */
	setTreeColumn : vjo.NEEDS_IMPL,


	/**
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Sorts the model by a column.
	 * 
	 */
	sortByColumn : vjo.NEEDS_IMPL
})
.endType();