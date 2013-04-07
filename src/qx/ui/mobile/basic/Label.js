/**
 * The label widget displays a text or HTML content.
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var label = new qx.ui.mobile.basic.Label("Hello World");
 * 
 *   this.getRoot().add(label);
 * 
 * 
 * This example create a widget to display the label.
 */
//>public
vjo.ctype('qx.ui.mobile.basic.Label')
.inherits('qx.ui.mobile.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	_applyValue : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	_applyWrap : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	getWrap : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property value
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	initValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property wrap
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	initWrap : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property wrap equals true.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	isWrap : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property value.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property wrap.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	resetWrap : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	setWrap : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	toggleWrap : vjo.NEEDS_IMPL
})
.endType();