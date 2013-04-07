/**
 * Representation of a form. A form widget can contain one or more {@link Row} widgets.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var title = new qx.ui.mobile.form.Title("Group");
 *   var form = new qx.ui.mobile.form.Form();
 *   form.add(new qx.ui.mobile.form.TextField(), "Username: ");
 * 
 *   this.getRoot.add(title);
 *   this.getRoot.add(new qx.ui.mobile.form.renderer.Single(form));
 * 
 * 
 * This example creates a form and adds a row with a text field in it.
 */
//>public
vjo.ctype('qx.ui.mobile.form.Form')
.inherits('qx.ui.form.Form')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_createResetter : vjo.NEEDS_IMPL,


	/**
	 * Gets the item with the given group and rowIndex.
	 * 
	 */
	_getItemByIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns the invalid items of the form, which were determined by {@link qx.ui.mobile.form.Form#validate} before.
	 * It returns an empty array if no items are invalid.
	 * 
	 */
	getInvalidItems : vjo.NEEDS_IMPL,


	/**
	 * Makes a row invisible, identified by its group and row index.
	 * 
	 */
	hideRow : vjo.NEEDS_IMPL,


	/**
	 * setter for the renderer private variable
	 * 
	 */
	setRenderer : vjo.NEEDS_IMPL,


	/**
	 * Makes a row visible, identified by its group and row index.
	 * 
	 */
	showRow : vjo.NEEDS_IMPL,


	/**
	 * Validates the form using the
	 * {@link qx.ui.form.validation.Manager#validate} method.
	 * 
	 */
	validate : vjo.NEEDS_IMPL
})
.endType();