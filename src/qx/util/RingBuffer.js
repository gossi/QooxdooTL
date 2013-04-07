/**
 * An memory container which stores arbitrary data up to a maximum number of
 * entries. When new entries come in an the maximum is reached, the oldest
 * entries are deleted.
 * 
 * A mark feature also exists which can be used to remember a point in time.
 * When retrieving entriues, it is possible to get only those entries
 * after the marked time. This is useful if data from the buffer is extracted
 * and processed. Whenever this happens, a mark() call can be used so that the
 * next extraction will only get new data.
 */
//>public
vjo.ctype('qx.util.RingBuffer')
.inherits('Object')
.protos({
	/**
	 * Constructor.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds a number to an ringbuffer index. Does a modulus calculation,
	 * i. e. if the index leaves the ringbuffer space it will wrap around to
	 * the other end of the ringbuffer.
	 * 
	 */
	__addToIndex : vjo.NEEDS_IMPL,


	/**
	 * Adds a single entry
	 * 
	 */
	addEntry : vjo.NEEDS_IMPL,


	/**
	 * Clears all entries
	 * 
	 */
	clear : vjo.NEEDS_IMPL,


	/**
	 * Removes the current mark position
	 * 
	 */
	clearMark : vjo.NEEDS_IMPL,


	/**
	 * Returns all stored entries. Mark is ignored.
	 * 
	 */
	getAllEntries : vjo.NEEDS_IMPL,


	/**
	 * Returns entries which have been added previously.
	 * 
	 */
	getEntries : vjo.NEEDS_IMPL,


	/**
	 * Get the maximum number of entries to hold
	 * 
	 */
	getMaxEntries : vjo.NEEDS_IMPL,


	/**
	 * Remembers the current position in the ring buffer
	 * 
	 */
	mark : vjo.NEEDS_IMPL,


	/**
	 * Set the maximum number of messages to hold. If null the number of
	 * messages is not limited.
	 * 
	 * Warning: Changing this property will clear the events logged so far.
	 * 
	 */
	setMaxEntries : vjo.NEEDS_IMPL
})
.endType();