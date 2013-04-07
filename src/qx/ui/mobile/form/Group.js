/**
 * A group widget arranges several widgets visual.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var title = new qx.ui.mobile.form.Title("Group");
 *   var list = new qx.ui.mobile.list.List();
 *   var group = new qx.ui.mobile.form.Group([list]);
 * 
 *   this.getRoot.add(title);
 *   this.getRoot.add(group);
 * 
 * 
 * This example creates a group and adds a list to it.
 */
//>public
vjo.ctype('qx.ui.mobile.form.Group')
.inherits('qx.ui.mobile.container.Composite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Reacts on change of showBorder property.
	 * 
	 */
	_onChangeShowBorder : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showBorder.
	 * 
	 * For further details take a look at the property definition: {@link #showBorder}.
	 * 
	 */
	getShowBorder : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showBorder
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showBorder}.
	 * 
	 */
	initShowBorder : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showBorder equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showBorder}.
	 * 
	 */
	isShowBorder : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showBorder.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showBorder}.
	 * 
	 */
	resetShowBorder : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showBorder.
	 * 
	 * For further details take a look at the property definition: {@link #showBorder}.
	 * 
	 */
	setShowBorder : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showBorder.
	 * 
	 * For further details take a look at the property definition: {@link #showBorder}.
	 * 
	 */
	toggleShowBorder : vjo.NEEDS_IMPL
})
.endType();