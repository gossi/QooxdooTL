/**
 * The Radio button for mobile.
 * 
 * Example
 * 
 * 
 *    var form = new qx.ui.mobile.form.Form();
 * 
 *    var radio1 = new qx.ui.mobile.form.RadioButton();
 *    var radio2 = new qx.ui.mobile.form.RadioButton();
 *    var radio3 = new qx.ui.mobile.form.RadioButton();
 * 
 *    var group = new qx.ui.mobile.form.RadioGroup(radio1, radio2, radio3);
 * 
 *    form.add(radio1, "Germany");
 *    form.add(radio2, "UK");
 *    form.add(radio3, "USA");
 * 
 *    this.getRoot.add(new qx.ui.mobile.form.renderer.Single(form));

 */
//>public
vjo.ctype('qx.ui.mobile.form.RadioButton')
.inherits('qx.ui.mobile.form.Input')
.mixin('qx.ui.mobile.form.MValue')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Event handler, when CheckBox appears on screen.
	 * 
	 */
	__onAppear : vjo.NEEDS_IMPL,


	/**
	 * The assigned {@link qx.ui.form.RadioGroup} which handles the switching between registered buttons
	 * 
	 */
	_applyGroup : vjo.NEEDS_IMPL,


	/**
	 */
	_getType : vjo.NEEDS_IMPL,


	/**
	 * Gets the value [true/false] of this radio button.
	 * It is called by getValue method of qx.ui.mobile.form.MValue mixin
	 * 
	 */
	_getValue : vjo.NEEDS_IMPL,


	/**
	 * Reacts on tap on radio button.
	 * 
	 */
	_onTap : vjo.NEEDS_IMPL,


	/**
	 * Sets the value [true/false] of this radio button.
	 * It is called by setValue method of qx.ui.mobile.form.MValue mixin
	 * 
	 */
	_setValue : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property group.
	 * 
	 * For further details take a look at the property definition: {@link #group}.
	 * 
	 */
	getGroup : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property group.
	 * 
	 * For further details take a look at the property definition: {@link #group}.
	 * 
	 */
	setGroup : vjo.NEEDS_IMPL
})
.endType();