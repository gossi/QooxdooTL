/**
 * An extended array class which adds a lot of often used
 * convenience methods to the regular array like remove or
 * contains.
 */
//>public
vjo.ctype('qx.type.Array')
.inherits('qx.type.BaseArray')
.protos({
	/**
	 * Creates a new Array with the given length or the listed items.
	 * 
	 * 
	 * var arr1 = new qx.type.Array(length);
	 * var arr2 = new qx.type.Array(elem0, elem1, ..., elemN);
	 * 
	 * 
	 * 
	 * length: The initial length of the array.
	 * item1, item2. .. itemN:  the items that will make up the newly created array

	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper which checks for the given element and converts that to a
	 * native array if necessary.
	 * 
	 */
	__toPlainArray : vjo.NEEDS_IMPL,


	/**
	 * Append the elements of the given array
	 * 
	 */
	append : vjo.NEEDS_IMPL,


	/**
	 * Returns a clone of the array. Primitive values are copied.
	 * Others are referenced.
	 * 
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Whether the array contains the given element
	 * 
	 */
	contains : vjo.NEEDS_IMPL,


	/**
	 * Insert an element after a given second element
	 * 
	 */
	insertAfter : vjo.NEEDS_IMPL,


	/**
	 * Insert an element at a given position
	 * 
	 */
	insertAt : vjo.NEEDS_IMPL,


	/**
	 * Insert an element before a given second element
	 * 
	 */
	insertBefore : vjo.NEEDS_IMPL,


	/**
	 * Prepend the elements of the given array.
	 * 
	 */
	prepend : vjo.NEEDS_IMPL,


	/**
	 * Remove an element
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Remove all elements
	 * 
	 */
	removeAll : vjo.NEEDS_IMPL,


	/**
	 * Remove an element at the given index
	 * 
	 */
	removeAt : vjo.NEEDS_IMPL
})
.endType();