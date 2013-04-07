/**
 * A multi-purpose widget, which combines a label with an icon.
 * 
 * The intended purpose of qx.ui.mobile.basic.Atom is to easily align the common icon-text
 * combination in different ways.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var atom = new qx.ui.mobile.basic.Atom("Icon Right", "icon/32/actions/go-next.png");
 *   this.getRoot().add(atom);
 * 
 * 
 * This example creates an atom with the label &#8220;Icon Right&#8221; and an icon.
 */
//>public
vjo.ctype('qx.ui.mobile.basic.Atom')
.inherits('qx.ui.mobile.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * This function is responsible for creating and adding 2 children controls to the Button widget.
	 * A label and an icon.
	 * 
	 */
	__createChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the opposed position for a given position.
	 * 
	 */
	__getOpposedPosition : vjo.NEEDS_IMPL,


	/**
	 * Updates the gap between icon and label text.
	 * 
	 */
	__updateGap : vjo.NEEDS_IMPL,


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
	 * Applies changes of the property value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	_applyShow : vjo.NEEDS_IMPL,


	/**
	 * Creates the icon widget.
	 * 
	 */
	_createIconWidget : vjo.NEEDS_IMPL,


	/**
	 * Creates the label widget.
	 * 
	 */
	_createLabelWidget : vjo.NEEDS_IMPL,


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
	 * Returns the icon widget.
	 * 
	 */
	getIconWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	getLabel : vjo.NEEDS_IMPL,


	/**
	 * Returns the label widget.
	 * 
	 */
	getLabelWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	getShow : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property show
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	initShow : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	setShow : vjo.NEEDS_IMPL
})
.endType();