/**
 * Wrapper for browser DOM event handling for each browser window/frame.
 */
//>public
vjo.ctype('qx.event.Manager')
.inherits('Object')
.protos({
	/**
	 * Creates a new instance of the event handler.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * This method is called each time an event listener for one of the
	 * supported events is added using {qx.event.Manager#addListener}.
	 * 
	 */
	__registerAtHandler : vjo.NEEDS_IMPL,


	/**
	 * This method is called each time the an event listener for one of the
	 * supported events is removed by using {qx.event.Manager#removeListener}
	 * and no other event listener is listening on this type.
	 * 
	 */
	__unregisterAtHandler : vjo.NEEDS_IMPL,


	/**
	 * Add an event listener to any valid target. The event listener is passed an
	 * instance of {@link qx.event.type.Event} containing all relevant information
	 * about the event as parameter.
	 * 
	 */
	addListener : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for deleting the internal listener  data structure for
	 * the given targetKey.
	 * 
	 */
	deleteAllListeners : vjo.NEEDS_IMPL,


	/**
	 * Dispatches an event object using the qooxdoo event handler system. The
	 * event will only be visible in event listeners attached using
	 * {@link #addListener}. After dispatching the event object will be pooled
	 * for later reuse or disposed.
	 * 
	 */
	dispatchEvent : vjo.NEEDS_IMPL,


	/**
	 * Dispose the event manager
	 * 
	 */
	dispose : vjo.NEEDS_IMPL,


	/**
	 * Get the event handler class matching the given event target and type
	 * 
	 */
	findHandler : vjo.NEEDS_IMPL,


	/**
	 * Returns all registered listeners.
	 * 
	 */
	getAllListeners : vjo.NEEDS_IMPL,


	/**
	 * Returns an instance of the given dispatcher class for this manager(window).
	 * 
	 */
	getDispatcher : vjo.NEEDS_IMPL,


	/**
	 * Returns an instance of the given handler class for this manager(window).
	 * 
	 */
	getHandler : vjo.NEEDS_IMPL,


	/**
	 * Get a copy of all event listeners for the given combination
	 * of target, event type and phase.
	 * 
	 * This method is especially useful and for event handlers to
	 * to query the listeners registered in the manager.
	 * 
	 */
	getListeners : vjo.NEEDS_IMPL,


	/**
	 * Get the window instance the event manager is responsible for
	 * 
	 */
	getWindow : vjo.NEEDS_IMPL,


	/**
	 * Get the hashcode of the manager&#8217;s window
	 * 
	 */
	getWindowId : vjo.NEEDS_IMPL,


	/**
	 * Check whether there are one or more listeners for an event type
	 * registered at the target.
	 * 
	 */
	hasListener : vjo.NEEDS_IMPL,


	/**
	 * Imports a list of event listeners at once. This only
	 * works for newly created elements as it replaces
	 * all existing data structures.
	 * 
	 * Works with a map of data. Each entry in this map should be a
	 * map again with the keys type, listener,
	 * self, capture and an optional unique.
	 * 
	 * The values are identical to the parameters of {@link #addListener}.
	 * For details please have a look there.
	 * 
	 */
	importListeners : vjo.NEEDS_IMPL,


	/**
	 * Remove all event listeners, which are attached to the given event target.
	 * 
	 */
	removeAllListeners : vjo.NEEDS_IMPL,


	/**
	 * Remove an event listener from an event target.
	 * 
	 */
	removeListener : vjo.NEEDS_IMPL,


	/**
	 * Removes an event listener from an event target by an ID returned by
	 * {@link #addListener}.
	 * 
	 */
	removeListenerById : vjo.NEEDS_IMPL,


	/**
	 * Returns a serialized array of all events attached on the given target.
	 * 
	 */
	serializeListeners : vjo.NEEDS_IMPL,


	/**
	 * This method might be used to temporally remove all events
	 * directly attached to the given target. This do not work
	 * have any effect on bubbling events normally.
	 * 
	 * This is mainly thought for detaching events in IE, before
	 * cloning them. It also removes all leak scenarios
	 * when unloading a document and may be used here as well.
	 * 
	 */
	toggleAttachedEvents : vjo.NEEDS_IMPL
})
.endType();