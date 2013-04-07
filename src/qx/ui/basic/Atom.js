/**
 * A multi-purpose widget, which combines a label with an icon.
 * 
 * The intended purpose of qx.ui.basic.Atom is to easily align the common icon-text
 * combination in different ways.
 * 
 * This is useful for all types of buttons, tooltips, ...
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var atom = new qx.ui.basic.Atom("Icon Right", "icon/32/actions/go-next.png");
 *   this.getRoot().add(atom);
 * 
 * 
 * This example creates an atom with the label &#8220;Icon Right&#8221; and an icon.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.basic.Atom')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property center.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	_applyCenter : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property gap.
	 * 
	 * For further details take a look at the property definition: {@link #gap}.
	 * 
	 */
	_applyGap : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	_applyIcon : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property iconPosition.
	 * 
	 * For further details take a look at the property definition: {@link #iconPosition}.
	 * 
	 */
	_applyIconPosition : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	_applyLabel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	_applyRich : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	_applySelectable : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	_applyShow : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Updates the visibility of the icon
	 * 
	 */
	_handleIcon : vjo.NEEDS_IMPL,


	/**
	 * Updates the visibility of the label
	 * 
	 */
	_handleLabel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property center.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	getCenter : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property gap.
	 * 
	 * For further details take a look at the property definition: {@link #gap}.
	 * 
	 */
	getGap : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	getIcon : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconPosition.
	 * 
	 * For further details take a look at the property definition: {@link #iconPosition}.
	 * 
	 */
	getIconPosition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	getLabel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	getRich : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	getShow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property center
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	initCenter : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property gap
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #gap}.
	 * 
	 */
	initGap : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property iconPosition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconPosition}.
	 * 
	 */
	initIconPosition : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property rich
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	initRich : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property show
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	initShow : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property center equals true.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	isCenter : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property rich equals true.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	isRich : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property center.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	resetCenter : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property gap.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #gap}.
	 * 
	 */
	resetGap : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property iconPosition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconPosition}.
	 * 
	 */
	resetIconPosition : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property rich.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	resetRich : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property show.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	resetShow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property center.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	setCenter : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property gap.
	 * 
	 * For further details take a look at the property definition: {@link #gap}.
	 * 
	 */
	setGap : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	setIcon : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconPosition.
	 * 
	 * For further details take a look at the property definition: {@link #iconPosition}.
	 * 
	 */
	setIconPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	setLabel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	setRich : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	setShow : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property center.
	 * 
	 * For further details take a look at the property definition: {@link #center}.
	 * 
	 */
	toggleCenter : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	toggleRich : vjo.NEEDS_IMPL
})
.endType();