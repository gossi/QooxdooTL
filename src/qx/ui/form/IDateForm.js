/**
 * Form interface for all form widgets which have date as their primary
 * data type like datechooser&#8217;s.
 */
//>public
vjo.itype('qx.ui.form.IDateForm')
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