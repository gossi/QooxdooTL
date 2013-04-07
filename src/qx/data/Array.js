/**
 * The data array is a special array used in the data binding context of
 * qooxdoo. It does not extend the native array of JavaScript but its a wrapper
 * for it. All the native methods are included in the implementation and it
 * also fires events if the content or the length of the array changes in
 * any way. Also the .length property is available on the array.
 */
//>public
vjo.ctype('qx.data.Array')
.inherits('qx.core.Object')
.satisfies('qx.data.IListData')
.mixin('qx.data.marshal.MEventBubbling')
.protos({
	/**
	 * Creates a new instance of an array.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper to update the event propagation for a range of items.
	 * 
	 */
	__updateEventPropagation : vjo.NEEDS_IMPL,


	/**
	 * Internal function which updates the length property of the array.
	 * Every time the length will be updated, a {@link #changeLength} data
	 * event will be fired.
	 * 
	 */
	__updateLength : vjo.NEEDS_IMPL,


	/**
	 * Append the items of the given array.
	 * 
	 */
	append : vjo.NEEDS_IMPL,


	/**
	 * Concatenates the current and the given array into a new one.
	 * 
	 */
	concat : vjo.NEEDS_IMPL,


	/**
	 * Check if the given item is in the current array.
	 * 
	 */
	contains : vjo.NEEDS_IMPL,


	/**
	 * Return a copy of the given arr
	 * 
	 */
	copy : vjo.NEEDS_IMPL,


	/**
	 * Check whether the given array has the same content as this.
	 * Checks only the equality of the arrays&#8217; content.
	 * 
	 */
	equals : vjo.NEEDS_IMPL,


	/**
	 * Invokes the given function for every item in the array.
	 * 
	 */
	forEach : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoDisposeItems.
	 * 
	 * For further details take a look at the property definition: {@link #autoDisposeItems}.
	 * 
	 */
	getAutoDisposeItems : vjo.NEEDS_IMPL,


	/**
	 * Replacement function for the getting of the array value.
	 * array0 should be array.getItem(0).
	 * 
	 */
	getItem : vjo.NEEDS_IMPL,


	/**
	 * This method returns the current length stored under .length on each
	 * array.
	 * 
	 */
	getLength : vjo.NEEDS_IMPL,


	/**
	 * Returns the index of the item in the array. If the item is not in the
	 * array, -1 will be returned.
	 * 
	 */
	indexOf : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoDisposeItems
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoDisposeItems}.
	 * 
	 */
	initAutoDisposeItems : vjo.NEEDS_IMPL,


	/**
	 * Insert an element into the array after a given item.
	 * 
	 */
	insertAfter : vjo.NEEDS_IMPL,


	/**
	 * Insert an element at a given position.
	 * 
	 */
	insertAt : vjo.NEEDS_IMPL,


	/**
	 * Insert an item into the array before a given item.
	 * 
	 */
	insertBefore : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property autoDisposeItems equals true.
	 * 
	 * For further details take a look at the property definition: {@link #autoDisposeItems}.
	 * 
	 */
	isAutoDisposeItems : vjo.NEEDS_IMPL,


	/**
	 * Returns the array as a string using the given connector string to
	 * connect the values.
	 * 
	 */
	join : vjo.NEEDS_IMPL,


	/**
	 * Returns the highest value in the given array.
	 * Supports numeric values only.
	 * 
	 */
	max : vjo.NEEDS_IMPL,


	/**
	 * Returns the lowest value in the array. Supports
	 * numeric values only.
	 * 
	 */
	min : vjo.NEEDS_IMPL,


	/**
	 * Removes and returns the last element of the array.
	 * An change event will be fired.
	 * 
	 */
	pop : vjo.NEEDS_IMPL,


	/**
	 * Adds an element at the end of the array.
	 * 
	 */
	push : vjo.NEEDS_IMPL,


	/**
	 * Remove the given item.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Remove all elements from the array.
	 * 
	 */
	removeAll : vjo.NEEDS_IMPL,


	/**
	 * Remove an element from the array at the given index.
	 * 
	 */
	removeAt : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoDisposeItems.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoDisposeItems}.
	 * 
	 */
	resetAutoDisposeItems : vjo.NEEDS_IMPL,


	/**
	 * Reverses the order of the array. An change event will be fired.
	 * 
	 */
	reverse : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property autoDisposeItems.
	 * 
	 * For further details take a look at the property definition: {@link #autoDisposeItems}.
	 * 
	 */
	setAutoDisposeItems : vjo.NEEDS_IMPL,


	/**
	 * Replacement function for the setting of an array value.
	 * array0 = &#8220;a&#8221; should be array.setItem(0, &#8220;a&#8221;).
	 * A change event will be fired if the value changes. Setting the same
	 * value again will not lead to a change event.
	 * 
	 */
	setItem : vjo.NEEDS_IMPL,


	/**
	 * Removes the first element of the array and returns it. An change event
	 * will be fired.
	 * 
	 */
	shift : vjo.NEEDS_IMPL,


	/**
	 * Returns a new array based on the range specified by the parameters.
	 * 
	 */
	slice : vjo.NEEDS_IMPL,


	/**
	 * Sorts the array. If a function is given, this will be used to
	 * compare the items. changeBubble event will only be fired,
	 * if sorting result differs from original array.
	 * 
	 */
	sort : vjo.NEEDS_IMPL,


	/**
	 * Method to remove and add new elements to the array. For every remove or
	 * add an event will be fired.
	 * 
	 */
	splice : vjo.NEEDS_IMPL,


	/**
	 * Returns the sum of all values in the array. Supports
	 * numeric values only.
	 * 
	 */
	sum : vjo.NEEDS_IMPL,


	/**
	 * Returns the list data as native array. Beware of the fact that the
	 * internal representation will be returnd and any manipulation of that
	 * can cause a misbehavior of the array. This method should only be used for
	 * debugging purposes.
	 * 
	 */
	toArray : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property autoDisposeItems.
	 * 
	 * For further details take a look at the property definition: {@link #autoDisposeItems}.
	 * 
	 */
	toggleAutoDisposeItems : vjo.NEEDS_IMPL,


	/**
	 * Returns the toString of the original Array
	 * 
	 */
	toString : vjo.NEEDS_IMPL,


	/**
	 * Adds the given items to the beginning of the array. For every element,
	 * a change event will be fired.
	 * 
	 */
	unshift : vjo.NEEDS_IMPL
})
.endType();