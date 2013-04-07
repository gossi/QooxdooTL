/**
 * The SelectBox
 * 
 * an example, how to use the SelectBox:
 * Example
 * 
 * 
 *     var page1 = new qx.ui.mobile.page.Page();
 *     page1.addListener("initialize", function()
 *     {
 *       var sel = new qx.ui.mobile.form.SelectBox();
 *       page1.add(sel);
 *       var model = new qx.data.Array(["item1","item2"]);
 *       sel.setModel(model);
 *       model.push("item3");
 * 
 *       var but = new qx.ui.mobile.form.Button("setSelection");
 *       page1.add(but);
 *       but.addListener("tap", function(){
 *         sel.setSelection("item3");
 *       }, this);
 * 
 *       var title = new qx.ui.mobile.form.Title("item2");
 *       title.bind("value",sel,"value");
 *       sel.bind("value",title,"value");
 *       page1.add(title);
 *     },this);
 * 
 *   page1.show();
 *  
 */
//>public
vjo.ctype('qx.ui.mobile.form.SelectBox')
.inherits('qx.ui.mobile.core.Widget')
.satisfies(['qx.ui.form.IForm','qx.ui.form.IModel'])
.mixin(['qx.ui.mobile.form.MValue','qx.ui.form.MForm','qx.ui.mobile.form.MText','qx.ui.mobile.form.MState'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Refreshs selection dialogs model, and shows it.
	 * 
	 */
	__showSelectionDialog : vjo.NEEDS_IMPL,


	/**
	 * Sets the model property to the new value
	 * 
	 */
	_applyModel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property nullable.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	_applyNullable : vjo.NEEDS_IMPL,


	/**
	 */
	_createContainerElement : vjo.NEEDS_IMPL,


	/**
	 * Creates the menu dialog. Override this to customize the widget.
	 * 
	 */
	_createSelectionDialog : vjo.NEEDS_IMPL,


	/**
	 */
	_getTagName : vjo.NEEDS_IMPL,


	/**
	 * Get the text value of this
	 * It is called by setValue method of qx.ui.mobile.form.MValue mixin.
	 * 
	 */
	_getValue : vjo.NEEDS_IMPL,


	/**
	 * Gets the selectedIndex out of change selection event and renders view.
	 * 
	 */
	_onChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Renders the selectbox. Override this if you would like to display the
	 * values of the select box in a different way than the default.
	 * 
	 */
	_render : vjo.NEEDS_IMPL,


	/**
	 * Sets the selected text value of this select box.
	 * 
	 */
	_setValue : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property nullable.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	getNullable : vjo.NEEDS_IMPL,


	/**
	 * Returns the selected index of the element
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property model
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	initModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property nullable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	initNullable : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property nullable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	isNullable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property model.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	resetModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property nullable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	resetNullable : vjo.NEEDS_IMPL,


	/**
	 * Set the ClearButton label of the selection dialog.
	 * 
	 */
	setClearButtonLabel : vjo.NEEDS_IMPL,


	/**
	 * Sets the dialog title on the selection dialog.
	 * 
	 */
	setDialogTitle : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property nullable.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	setNullable : vjo.NEEDS_IMPL,


	/**
	 * Sets the selected index of the element.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property nullable.
	 * 
	 * For further details take a look at the property definition: {@link #nullable}.
	 * 
	 */
	toggleNullable : vjo.NEEDS_IMPL
})
.endType();