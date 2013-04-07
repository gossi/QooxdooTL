/**
 * This mixin offers basic event handling capabilities. It includes the
 * commonly known methods for managing event listeners and firing events.
 */
//>public
vjo.mtype('qx.core.MEvent')
.protos({
	/**
	 * Add event listener to this object.
	 * 
	 */
	addListener : vjo.NEEDS_IMPL,


	/**
	 * Add event listener to this object, which is only called once. After the
	 * listener is called the event listener gets removed.
	 * 
	 */
	addListenerOnce : vjo.NEEDS_IMPL,


	/**
	 * Dispatch an event on this object
	 * 
	 */
	dispatchEvent : vjo.NEEDS_IMPL,


	/**
	 * Creates and dispatches an non-bubbling data event on this object.
	 * 
	 */
	fireDataEvent : vjo.NEEDS_IMPL,


	/**
	 * Creates and dispatches an event on this object.
	 * 
	 */
	fireEvent : vjo.NEEDS_IMPL,


	/**
	 * Create an event object and dispatch it on this object.
	 * The event dispatched with this method does never bubble! Use only if you
	 * are sure that bubbling is not required.
	 * 
	 */
	fireNonBubblingEvent : vjo.NEEDS_IMPL,


	/**
	 * Check if there are one or more listeners for an event type.
	 * 
	 */
	hasListener : vjo.NEEDS_IMPL,


	/**
	 * Remove event listener from this object
	 * 
	 */
	removeListener : vjo.NEEDS_IMPL,


	/**
	 * Removes an event listener from an event target by an id returned by
	 * {@link #addListener}
	 * 
	 */
	removeListenerById : vjo.NEEDS_IMPL
})
.endType();