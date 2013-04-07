/**
 * This interface defines a data structure compatible with the data binding
 * controllers.
 * It defines a minimum of functionality which the controller need to work.
 */
//>public
vjo.itype('qx.data.IListData')
.protos({
	/**
	 * Check if the given item is in the current data structure.
	 * 
	 */
	contains : vjo.NEEDS_IMPL,


	/**
	 * Returns the item at the given index
	 * 
	 */
	getItem : vjo.NEEDS_IMPL,


	/**
	 * Returns the current length of the data structure.
	 * 
	 */
	getLength : vjo.NEEDS_IMPL,


	/**
	 * Sets the given item at the given position in the data structure. A
	 * change event has to be fired.
	 * 
	 */
	setItem : vjo.NEEDS_IMPL,


	/**
	 * Method to remove and add new element to the data. For every remove or
	 * add a change event should be fired.
	 * 
	 */
	splice : vjo.NEEDS_IMPL,


	/**
	 * Returns the list data as native array.
	 * 
	 */
	toArray : vjo.NEEDS_IMPL
})
.endType();