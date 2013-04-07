/**
 * All event dispatchers must implement this interface. Event dispatchers must
 * register themselves at the event Manager using
 * {@link qx.event.Registration#addDispatcher}.
 */
//>public
vjo.itype('qx.event.IEventDispatcher')
.protos({
	/**
	 * Whether the dispatcher is responsible for the this event.
	 * 
	 */
	canDispatchEvent : vjo.NEEDS_IMPL,


	/**
	 * This function dispatches the event to the event listeners.
	 * 
	 */
	dispatchEvent : vjo.NEEDS_IMPL
})
.endType();