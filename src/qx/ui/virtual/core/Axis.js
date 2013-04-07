/**
 * EXPERIMENTAL!
 * 
 * The axis maps virtual screen coordinates to item indexes. By default all
 * items have the same size but it is also possible to give specific items
 * a different size.
 */
//>public
vjo.ctype('qx.ui.virtual.core.Axis')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the range, which contains the position.
	 * 
	 * Complexity: O(log n) (n = number of custom sized cells)
	 * 
	 */
	__findRangeByIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns the range, which contains the position
	 * 
	 * Complexity: O(log n) (n = number of custom sized cells)
	 * 
	 */
	__findRangeByPosition : vjo.NEEDS_IMPL,


	/**
	 * Split the position range into disjunct intervals. Each interval starts
	 * with a custom sized cell. Each position is contained in exactly one range.
	 * The ranges are sorted according to their start position.
	 * 
	 * Complexity: O(n log n) (n = number of custom sized cells)
	 * 
	 */
	__getRanges : vjo.NEEDS_IMPL,


	/**
	 * Get the default size of the items.
	 * 
	 */
	getDefaultItemSize : vjo.NEEDS_IMPL,


	/**
	 * Get the item and the offset into the item at the given position.
	 * 
	 */
	getItemAtPosition : vjo.NEEDS_IMPL,


	/**
	 * Get the number of items in the axis.
	 * 
	 */
	getItemCount : vjo.NEEDS_IMPL,


	/**
	 * Get the start position of the item with the given index.
	 * 
	 */
	getItemPosition : vjo.NEEDS_IMPL,


	/**
	 * Get the size of the item at the given index.
	 * 
	 */
	getItemSize : vjo.NEEDS_IMPL,


	/**
	 * Get an array of item sizes starting with the item at &#8220;startIndex&#8221;. The
	 * sum of all sizes in the returned array is at least &#8220;minSizeSum&#8221;.
	 * 
	 */
	getItemSizes : vjo.NEEDS_IMPL,


	/**
	 * Returns the sum of all cell sizes.
	 * 
	 */
	getTotalSize : vjo.NEEDS_IMPL,


	/**
	 * Reset all custom sizes set with {@link #setItemSize}.
	 * 
	 */
	resetItemSizes : vjo.NEEDS_IMPL,


	/**
	 * Set the default size the items.
	 * 
	 */
	setDefaultItemSize : vjo.NEEDS_IMPL,


	/**
	 * Set the number of items in the axis.
	 * 
	 */
	setItemCount : vjo.NEEDS_IMPL,


	/**
	 * Sets the size of a specific item. This allow item, which have a size
	 * different from the default size.
	 * 
	 */
	setItemSize : vjo.NEEDS_IMPL
})
.endType();