/**
 * The AbstractTreeItem serves as a common superclass for the {@link
 * qx.ui.tree.TreeFile} and {@link qx.ui.tree.TreeFolder} classes.
 */
//>public abstract
vjo.ctype('qx.ui.tree.core.AbstractTreeItem')
.inherits('qx.ui.tree.core.AbstractItem')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds the item&#8217;s children container to the parent&#8217;s children container.
	 * 
	 */
	__addChildrenToParent : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property open.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	_applyOpen : vjo.NEEDS_IMPL,


	/**
	 */
	_shouldShowOpenSymbol : vjo.NEEDS_IMPL,


	/**
	 */
	_updateIndent : vjo.NEEDS_IMPL,


	/**
	 * Adds the passed tree items to the end of this item&#8217;s children list.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Add a tree item to this item after the existing child before.
	 * 
	 */
	addAfter : vjo.NEEDS_IMPL,


	/**
	 * Adds the tree item to the current item, at the given index.
	 * 
	 */
	addAt : vjo.NEEDS_IMPL,


	/**
	 * Add a tree item as the first child of this item.
	 * 
	 */
	addAtBegin : vjo.NEEDS_IMPL,


	/**
	 * Add a tree item to this item before the existing child before.
	 * 
	 */
	addBefore : vjo.NEEDS_IMPL,


	/**
	 */
	addState : vjo.NEEDS_IMPL,


	/**
	 * Get all child items.
	 * 
	 * Note: Don not modify the returned array, since this function does not
	 * return a copy!
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the widget, which acts as container for the child items.
	 * This widget must have a vertical box layout.
	 * 
	 */
	getChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns all children of the folder.
	 * 
	 */
	getItems : vjo.NEEDS_IMPL,


	/**
	 */
	getLevel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property parent.
	 * 
	 * For further details take a look at the property definition: {@link #parent}.
	 * 
	 */
	getParent : vjo.NEEDS_IMPL,


	/**
	 * Get the children container of the item&#8217;s parent. This function will return
	 * null, if the item does not have a parent or is not the root
	 * item.
	 * 
	 */
	getParentChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the tree the tree item is connected to. If the item is not part of
	 * a tree null will be returned.
	 * 
	 */
	getTree : vjo.NEEDS_IMPL,


	/**
	 */
	hasChildren : vjo.NEEDS_IMPL,


	/**
	 * Whether the tree item has a children container
	 * 
	 */
	hasChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property parent
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #parent}.
	 * 
	 */
	initParent : vjo.NEEDS_IMPL,


	/**
	 * Adds this item and recursively all sub items to the widget queue to
	 * update the indentation.
	 * 
	 */
	recursiveAddToWidgetQueue : vjo.NEEDS_IMPL,


	/**
	 * Removes the passed tree items from this item.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Remove all child items from this item.
	 * 
	 */
	removeAll : vjo.NEEDS_IMPL,


	/**
	 * Remove the child with the given child index.
	 * 
	 */
	removeAt : vjo.NEEDS_IMPL,


	/**
	 */
	removeState : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property parent.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #parent}.
	 * 
	 */
	resetParent : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property parent.
	 * 
	 * For further details take a look at the property definition: {@link #parent}.
	 * 
	 */
	setParent : vjo.NEEDS_IMPL
})
.endType();