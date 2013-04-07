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
vjo.ctype('qx.lang.RingBuffer')
.inherits('qx.util.RingBuffer')
.protos({
	/**
	 * Constructor.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();