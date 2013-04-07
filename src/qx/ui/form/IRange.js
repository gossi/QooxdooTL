/**
 * Form interface for all widgets which deal with ranges. The spinner is a good
 * example for a range using widget.
 */
//>public
vjo.itype('qx.ui.form.IRange')
.protos({
	/**
	 * Return the current set maximum of the range.
	 * 
	 */
	getMaximum : vjo.NEEDS_IMPL,


	/**
	 * Return the current set minimum of the range.
	 * 
	 */
	getMinimum : vjo.NEEDS_IMPL,


	/**
	 * Returns the value which will be stepped in a page step in the range.
	 * 
	 */
	getPageStep : vjo.NEEDS_IMPL,


	/**
	 * Returns the value which will be stepped in a single step in the range.
	 * 
	 */
	getSingleStep : vjo.NEEDS_IMPL,


	/**
	 * Set the maximum value of the range.
	 * 
	 */
	setMaximum : vjo.NEEDS_IMPL,


	/**
	 * Set the minimum value of the range.
	 * 
	 */
	setMinimum : vjo.NEEDS_IMPL,


	/**
	 * Sets the value for page steps in the range.
	 * 
	 */
	setPageStep : vjo.NEEDS_IMPL,


	/**
	 * Sets the value for single steps in the range.
	 * 
	 */
	setSingleStep : vjo.NEEDS_IMPL
})
.endType();