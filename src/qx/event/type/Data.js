/**
 * Event object for data holding event or data changes.
 */
//>public
vjo.ctype('qx.event.type.Data')
.inherits('qx.event.type.Event')
.protos({
	/**
	 * Get a copy of this object
	 * 
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * The new data of the event sending this data event.
	 * The return data type is the same as the event data type.
	 * 
	 */
	getData : vjo.NEEDS_IMPL,


	/**
	 * The old data of the event sending this data event.
	 * The return data type is the same as the event data type.
	 * 
	 */
	getOldData : vjo.NEEDS_IMPL,


	/**
	 * Initializes an event object.
	 * 
	 */
	init : vjo.NEEDS_IMPL
})
.endType();