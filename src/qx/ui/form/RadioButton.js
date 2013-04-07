/**
 * Radio buttons can be used in radio groups to allow to the user to select
 * exactly one item from a list. Radio groups are established by adding
 * radio buttons to a radio manager {@link qx.ui.form.RadioGroup}.
 * 
 * Example:
 * 
 * 
 *   var container = new qx.ui.container.Composite(new qx.ui.layout.VBox);
 * 
 *   var female = new qx.ui.form.RadioButton("female");
 *   var male = new qx.ui.form.RadioButton("male");
 * 
 *   var mgr = new qx.ui.form.RadioGroup();
 *   mgr.add(female, male);
 * 
 *   container.add(male);
 *   container.add(female);

 */
//>public
vjo.ctype('qx.ui.form.RadioButton')
.inherits('qx.ui.form.Button')
.satisfies(['qx.ui.form.IRadioItem','qx.ui.form.IForm','qx.ui.form.IBooleanForm','qx.ui.form.IModel'])
.mixin(['qx.ui.form.MForm','qx.ui.form.MModelProperty'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * The assigned {@link qx.ui.form.RadioGroup} which handles the switching between registered buttons
	 * 
	 */
	_applyGroup : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	_applyValue : vjo.NEEDS_IMPL,


	/**
	 * Event listener for the &#8220;execute&#8221; event.
	 * 
	 * Sets the property &#8220;checked&#8221; to true.
	 * 
	 */
	_onExecute : vjo.NEEDS_IMPL,


	/**
	 * Event listener for the &#8220;keyPress&#8221; event.
	 * 
	 * Selects the previous RadioButton when pressing &#8220;Left&#8221; or &#8220;Up&#8221; and
	 * Selects the next RadioButton when pressing &#8220;Right&#8221; and &#8220;Down&#8221;
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property group.
	 * 
	 * For further details take a look at the property definition: {@link #group}.
	 * 
	 */
	getGroup : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property group
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #group}.
	 * 
	 */
	initGroup : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property value equals true.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	isValue : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property group.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #group}.
	 * 
	 */
	resetGroup : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property group.
	 * 
	 * For further details take a look at the property definition: {@link #group}.
	 * 
	 */
	setGroup : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	toggleValue : vjo.NEEDS_IMPL
})
.endType();