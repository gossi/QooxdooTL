/**
 * The AbstractItem serves as a common superclass for the {@link
 * qx.ui.tree.core.AbstractTreeItem} and {@link qx.ui.tree.VirtualTreeItem} classes.
 */
//>public abstract
vjo.ctype('qx.ui.tree.core.AbstractItem')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.form.IModel')
.mixin('qx.ui.form.MModelProperty')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Get user-defined value of &#8220;icon&#8221; property
	 * 
	 */
	__getUserValueIcon : vjo.NEEDS_IMPL,


	/**
	 * Get user-defined value of &#8220;iconOpened&#8221; property
	 * 
	 */
	__getUserValueIconOpened : vjo.NEEDS_IMPL,


	/**
	 * Set source of icon child control
	 * 
	 */
	__setIconSource : vjo.NEEDS_IMPL,


	/**
	 * This method configures the tree item by adding its sub widgets like
	 * label, icon, open symbol, ...
	 * 
	 * This method must be overridden by sub classes.
	 * 
	 */
	_addWidgets : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	_applyIcon : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property iconOpened.
	 * 
	 * For further details take a look at the property definition: {@link #iconOpened}.
	 * 
	 */
	_applyIconOpened : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property indent.
	 * 
	 * For further details take a look at the property definition: {@link #indent}.
	 * 
	 */
	_applyIndent : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	_applyLabel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property open.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	_applyOpen : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property openSymbolMode.
	 * 
	 * For further details take a look at the property definition: {@link #openSymbolMode}.
	 * 
	 */
	_applyOpenSymbolMode : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Event handler, which listens to open state changes of the open button
	 * 
	 */
	_onChangeOpen : vjo.NEEDS_IMPL,


	/**
	 * Whether the open symbol should be shown
	 * 
	 */
	_shouldShowOpenSymbol : vjo.NEEDS_IMPL,


	/**
	 * Update the indentation of the tree item.
	 * 
	 */
	_updateIndent : vjo.NEEDS_IMPL,


	/**
	 * Adds the icon widget to the item&#8217;s horizontal box layout. If the icon
	 * widget has been added before, it is removed from its old position and
	 * added to the end of the layout.
	 * 
	 */
	addIcon : vjo.NEEDS_IMPL,


	/**
	 * Adds the label to the item&#8217;s horizontal box layout. If the label
	 * has been added before, it is removed from its old position and
	 * added to the end of the layout.
	 * 
	 */
	addLabel : vjo.NEEDS_IMPL,


	/**
	 * Adds the open button to the item&#8217;s horizontal box layout. If the open
	 * button has been added before, it is removed from its old position and
	 * added to the end of the layout.
	 * 
	 */
	addOpenButton : vjo.NEEDS_IMPL,


	/**
	 * Adds the spacer used to render the indentation to the item&#8217;s horizontal
	 * box layout. If the spacer has been added before, it is removed from its
	 * old position and added to the end of the layout.
	 * 
	 */
	addSpacer : vjo.NEEDS_IMPL,


	/**
	 * Adds a sub widget to the tree item&#8217;s horizontal box layout.
	 * 
	 */
	addWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	getIcon : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconOpened.
	 * 
	 * For further details take a look at the property definition: {@link #iconOpened}.
	 * 
	 */
	getIconOpened : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property indent.
	 * 
	 * For further details take a look at the property definition: {@link #indent}.
	 * 
	 */
	getIndent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	getLabel : vjo.NEEDS_IMPL,


	/**
	 * Computes the item&#8217;s nesting level. If the item is not part of a tree
	 * this function will return null.
	 * 
	 */
	getLevel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property open.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	getOpen : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property openSymbolMode.
	 * 
	 * For further details take a look at the property definition: {@link #openSymbolMode}.
	 * 
	 */
	getOpenSymbolMode : vjo.NEEDS_IMPL,


	/**
	 * Whether the item has any children
	 * 
	 */
	hasChildren : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property icon
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	initIcon : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconOpened
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconOpened}.
	 * 
	 */
	initIconOpened : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property indent
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #indent}.
	 * 
	 */
	initIndent : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property label
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	initLabel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property open
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	initOpen : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property openSymbolMode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #openSymbolMode}.
	 * 
	 */
	initOpenSymbolMode : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property open equals true.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	isOpen : vjo.NEEDS_IMPL,


	/**
	 * Whether the tree item can be opened.
	 * 
	 */
	isOpenable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property icon.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	resetIcon : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconOpened.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconOpened}.
	 * 
	 */
	resetIconOpened : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property indent.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #indent}.
	 * 
	 */
	resetIndent : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property label.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	resetLabel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property open.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	resetOpen : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property openSymbolMode.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #openSymbolMode}.
	 * 
	 */
	resetOpenSymbolMode : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	setIcon : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconOpened.
	 * 
	 * For further details take a look at the property definition: {@link #iconOpened}.
	 * 
	 */
	setIconOpened : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property indent.
	 * 
	 * For further details take a look at the property definition: {@link #indent}.
	 * 
	 */
	setIndent : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	setLabel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property open.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	setOpen : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property openSymbolMode.
	 * 
	 * For further details take a look at the property definition: {@link #openSymbolMode}.
	 * 
	 */
	setOpenSymbolMode : vjo.NEEDS_IMPL,


	/**
	 */
	syncWidget : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property open.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	toggleOpen : vjo.NEEDS_IMPL
})
.endType();