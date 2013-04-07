/**
 * The Tree class implements a tree widget, with collapsible and expandable
 * container nodes and terminal leaf nodes. You instantiate a Tree object and
 * then assign the tree a root folder using the {@link #root} property.
 * 
 * If you don&#8217;t want to show the root item, you can hide it with the
 * {@link #hideRoot} property.
 * 
 * The handling of selections within a tree is somewhat distributed
 * between the root tree object and the attached {@link qx.ui.tree.selection.SelectionManager}.
 * To get the currently selected element of a tree use the tree {@link #getSelection}
 * method and tree {@link #setSelection} to set it. The TreeSelectionManager
 * handles more coarse-grained issues like providing {@link #selectAll} and
 * {@link #resetSelection} methods.
 */
//>public
vjo.ctype('qx.ui.tree.Tree')
.inherits('qx.ui.core.scroll.AbstractScrollArea')
.satisfies(['qx.ui.core.IMultiSelection','qx.ui.form.IModelSelection','qx.ui.form.IForm'])
.mixin(['qx.ui.core.MMultiSelectionHandling','qx.ui.core.MContentPadding','qx.ui.form.MModelSelection','qx.ui.form.MForm'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property hideRoot.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	_applyHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property openMode.
	 * 
	 * For further details take a look at the property definition: {@link #openMode}.
	 * 
	 */
	_applyOpenMode : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property root.
	 * 
	 * For further details take a look at the property definition: {@link #root}.
	 * 
	 */
	_applyRoot : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property rootOpenClose.
	 * 
	 * For further details take a look at the property definition: {@link #rootOpenClose}.
	 * 
	 */
	_applyRootOpenClose : vjo.NEEDS_IMPL,


	/**
	 * Returns the element, to which the content padding should be applied.
	 * 
	 */
	_getContentPaddingTarget : vjo.NEEDS_IMPL,


	/**
	 * Event handler for changeSelection events, which opens all parent folders
	 * of the selected folders.
	 * 
	 */
	_onChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Event handler for key press events. Open and close the current selected
	 * item on key left and right press. Jump to parent on key left if already
	 * closed.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Event handler for click events, which could change a tree item&#8217;s open
	 * state.
	 * 
	 */
	_onOpen : vjo.NEEDS_IMPL,


	/**
	 * Returns the tree&#8217;s only &#8220;external&#8221; child, namely the root node.
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


	/**
	 * Get the widget, which contains the root tree item. This widget must
	 * have a vertical box layout.
	 * 
	 */
	getChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property hideRoot.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	getHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Returns all children of the tree.
	 * 
	 */
	getItems : vjo.NEEDS_IMPL,


	/**
	 * Get the tree item following the given item in the tree hierarchy.
	 * 
	 */
	getNextNodeOf : vjo.NEEDS_IMPL,


	/**
	 * Get the tree item&#8217;s next sibling.
	 * 
	 */
	getNextSiblingOf : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property openMode.
	 * 
	 * For further details take a look at the property definition: {@link #openMode}.
	 * 
	 */
	getOpenMode : vjo.NEEDS_IMPL,


	/**
	 * Get the tree item preceding the given item in the tree hierarchy.
	 * 
	 */
	getPreviousNodeOf : vjo.NEEDS_IMPL,


	/**
	 * Get the tree item&#8217;s previous sibling.
	 * 
	 */
	getPreviousSiblingOf : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property root.
	 * 
	 * For further details take a look at the property definition: {@link #root}.
	 * 
	 */
	getRoot : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property rootOpenClose.
	 * 
	 * For further details take a look at the property definition: {@link #rootOpenClose}.
	 * 
	 */
	getRootOpenClose : vjo.NEEDS_IMPL,


	/**
	 * Returns the tree item, which contains the given widget.
	 * 
	 */
	getTreeItem : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property openMode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #openMode}.
	 * 
	 */
	initOpenMode : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property root
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #root}.
	 * 
	 */
	initRoot : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property rootOpenClose
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #rootOpenClose}.
	 * 
	 */
	initRootOpenClose : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property hideRoot equals true.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	isHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property rootOpenClose equals true.
	 * 
	 * For further details take a look at the property definition: {@link #rootOpenClose}.
	 * 
	 */
	isRootOpenClose : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property root.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #root}.
	 * 
	 */
	resetRoot : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property rootOpenClose.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #rootOpenClose}.
	 * 
	 */
	resetRootOpenClose : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property hideRoot.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	setHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property openMode.
	 * 
	 * For further details take a look at the property definition: {@link #openMode}.
	 * 
	 */
	setOpenMode : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property root.
	 * 
	 * For further details take a look at the property definition: {@link #root}.
	 * 
	 */
	setRoot : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property rootOpenClose.
	 * 
	 * For further details take a look at the property definition: {@link #rootOpenClose}.
	 * 
	 */
	setRootOpenClose : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property hideRoot.
	 * 
	 * For further details take a look at the property definition: {@link #hideRoot}.
	 * 
	 */
	toggleHideRoot : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property rootOpenClose.
	 * 
	 * For further details take a look at the property definition: {@link #rootOpenClose}.
	 * 
	 */
	toggleRootOpenClose : vjo.NEEDS_IMPL
})
.endType();