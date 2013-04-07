/**
 * The stack container puts its child widgets on top of each other and only the
 * topmost widget is visible.
 * 
 * This is used e.g. in the tab view widget. Which widget is visible can be
 * controlled by using the {@link #getSelection} method.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   // create stack container
 *   var stack = new qx.ui.container.Stack();
 * 
 *   // add some children
 *   stack.add(new qx.ui.core.Widget().set({
 *    backgroundColor: "red"
 *   }));
 *   stack.add(new qx.ui.core.Widget().set({
 *    backgroundColor: "green"
 *   }));
 *   stack.add(new qx.ui.core.Widget().set({
 *    backgroundColor: "blue"
 *   }));
 * 
 *   // select green widget
 *   stack.setSelection([stack.getChildren()[1]]);
 * 
 *   this.getRoot().add(stack);
 * 
 * 
 * This example creates an stack with three children. Only the selected &#8220;green&#8221;
 * widget is visible.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.container.Stack')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.core.ISingleSelection')
.mixin(['qx.ui.core.MSingleSelectionHandling','qx.ui.core.MChildrenHandling'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Event handler for changeSelection.
	 * 
	 * Shows the new selected widget and hide the old one.
	 * 
	 */
	__onChangeSelection : vjo.NEEDS_IMPL,


	/**
	 */
	_afterAddChild : vjo.NEEDS_IMPL,


	/**
	 */
	_afterRemoveChild : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property dynamic.
	 * 
	 * For further details take a look at the property definition: {@link #dynamic}.
	 * 
	 */
	_applyDynamic : vjo.NEEDS_IMPL,


	/**
	 * Returns the widget for the selection.
	 * 
	 */
	_getItems : vjo.NEEDS_IMPL,


	/**
	 * Returns if the selection could be empty or not.
	 * 
	 */
	_isAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the given item is selectable.
	 * 
	 */
	_isItemSelectable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property dynamic.
	 * 
	 * For further details take a look at the property definition: {@link #dynamic}.
	 * 
	 */
	getDynamic : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property dynamic
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #dynamic}.
	 * 
	 */
	initDynamic : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property dynamic equals true.
	 * 
	 * For further details take a look at the property definition: {@link #dynamic}.
	 * 
	 */
	isDynamic : vjo.NEEDS_IMPL,


	/**
	 * Go to the next child in the children list.
	 * 
	 */
	next : vjo.NEEDS_IMPL,


	/**
	 * Go to the previous child in the children list.
	 * 
	 */
	previous : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property dynamic.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #dynamic}.
	 * 
	 */
	resetDynamic : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property dynamic.
	 * 
	 * For further details take a look at the property definition: {@link #dynamic}.
	 * 
	 */
	setDynamic : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property dynamic.
	 * 
	 * For further details take a look at the property definition: {@link #dynamic}.
	 * 
	 */
	toggleDynamic : vjo.NEEDS_IMPL
})
.endType();