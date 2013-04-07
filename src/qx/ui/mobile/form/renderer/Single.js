/**
 * Single renderer is a class used to render forms into a mobile page.
 * It displays a label above or next to each form element.
 */
//>public
vjo.ctype('qx.ui.mobile.form.renderer.Single')
.inherits('qx.ui.mobile.form.renderer.AbstractRenderer')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds an row group footer.
	 * 
	 */
	_addGroupFooterRow : vjo.NEEDS_IMPL,


	/**
	 * Adds a row with the name of a group of elements
	 * When you want to group certain form elements, this methods implements
	 * the way the header of that group is presented.
	 * 
	 */
	_addGroupHeader : vjo.NEEDS_IMPL,


	/**
	 * Adds an row group header.
	 * 
	 */
	_addGroupHeaderRow : vjo.NEEDS_IMPL,


	/**
	 * Adds a label and it according widget in one line (row).
	 * 
	 */
	_addInOneLine : vjo.NEEDS_IMPL,


	/**
	 * Wraps the given item with a {@link qx.ui.mobile.container.ScrollComposite} and
	 * calls _addInSeparateLines() with the composite as item.
	 * 
	 */
	_addInScrollComposite : vjo.NEEDS_IMPL,


	/**
	 * Adds a label and the widgets in two separate lines (rows).
	 * 
	 */
	_addInSeparateLines : vjo.NEEDS_IMPL,


	/**
	 * Adds a separation line into the form.
	 * 
	 */
	_addSeparationRow : vjo.NEEDS_IMPL,


	/**
	 */
	_getTagName : vjo.NEEDS_IMPL,


	/**
	 * Determines whether the given item can be display in one line
	 * or whether a separate line for the text label is needed.
	 * 
	 */
	_isOneLineWidget : vjo.NEEDS_IMPL,


	/**
	 */
	addButton : vjo.NEEDS_IMPL,


	/**
	 */
	addItems : vjo.NEEDS_IMPL,


	/**
	 * Hides a single item of this form
	 * 
	 */
	hideItem : vjo.NEEDS_IMPL,


	/**
	 */
	resetForm : vjo.NEEDS_IMPL,


	/**
	 */
	showErrorForItem : vjo.NEEDS_IMPL,


	/**
	 * Shows a single item of this form
	 * 
	 */
	showItem : vjo.NEEDS_IMPL
})
.endType();