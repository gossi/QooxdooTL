/**
 * Form interface for all form widgets which use a numeric value as their
 * primary data type like a spinner.
 */
//>public
vjo.itype('qx.ui.form.INumberForm')
.protos({
	/**
	 * The element&#8217;s user set value.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Resets the element&#8217;s value to its initial value.
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the element&#8217;s value.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL
})
.endType();