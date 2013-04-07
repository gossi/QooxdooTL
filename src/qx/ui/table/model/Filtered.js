/**
 * A filtered table model to provide support for hiding and filtering table
 * rows. Any rows that match any applied filters will be hidden.
 */
//>public
vjo.ctype('qx.ui.table.model.Filtered')
.inherits('qx.ui.table.model.Simple')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Whether the given string (needle) is in the array (haystack)
	 * 
	 */
	_js_in_array : vjo.NEEDS_IMPL,


	/**
	 * The addBetweenFilter method is used to add a between filter to the
	 * table model.
	 * 
	 */
	addBetweenFilter : vjo.NEEDS_IMPL,


	/**
	 * The addNotRegex method is used to add a regular expression filter to the
	 * table model and filter cells that do not match.
	 * 
	 */
	addNotRegex : vjo.NEEDS_IMPL,


	/**
	 * The addNumericFilter method is used to add a basic numeric filter to
	 * the table model.
	 * 
	 */
	addNumericFilter : vjo.NEEDS_IMPL,


	/**
	 * The addRegex method is used to add a regular expression filter to the
	 * table model.
	 * 
	 */
	addRegex : vjo.NEEDS_IMPL,


	/**
	 * The applyFilters method is called to apply filters to the table model.
	 * 
	 */
	applyFilters : vjo.NEEDS_IMPL,


	/**
	 * Hides a specified number of rows.
	 * 
	 */
	hideRows : vjo.NEEDS_IMPL,


	/**
	 * Return the table to the original state with all rows shown and clears
	 * all filters.
	 * 
	 */
	resetHiddenRows : vjo.NEEDS_IMPL,


	/**
	 */
	setData : vjo.NEEDS_IMPL
})
.endType();