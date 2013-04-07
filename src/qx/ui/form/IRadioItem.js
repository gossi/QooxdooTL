/**
 * Each object, which should be managed by a {@link RadioGroup} have to
 * implement this interface.
 */
//>public
vjo.itype('qx.ui.form.IRadioItem')
.protos({
	/**
	 * Get the radiogroup, which manages this item
	 * 
	 */
	getGroup : vjo.NEEDS_IMPL,


	/**
	 * Get whether the item is checked
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Set the radiogroup, which manages this item
	 * 
	 */
	setGroup : vjo.NEEDS_IMPL,


	/**
	 * Set whether the item is checked
	 * 
	 */
	setValue : vjo.NEEDS_IMPL
})
.endType();