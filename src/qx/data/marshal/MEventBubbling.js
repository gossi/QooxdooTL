/**
 * Mixin used for the bubbling events. If you want to use this in your own model
 * classes, be sure that every property will call the
 * {@link #_applyEventPropagation} function on every change.
 */
//>public
vjo.mtype('qx.data.marshal.MEventBubbling')
.protos({
	/**
	 * Listener responsible for formating the name and firing the change event
	 * for the changed property.
	 * 
	 */
	__changePropertyListener : vjo.NEEDS_IMPL,


	/**
	 * Apply function for every property created with the
	 * {@link qx.data.marshal.Json} marshaler. It fires and
	 * {@link #changeBubble} event on every change. It also adds the chaining
	 * listener if possible which is necessary for the bubbling of the events.
	 * 
	 */
	_applyEventPropagation : vjo.NEEDS_IMPL,


	/**
	 * Registers for the given parameters the changeBubble listener, if
	 * possible. It also removes the old listener, if an old item with
	 * a changeBubble event is given.
	 * 
	 */
	_registerEventChaining : vjo.NEEDS_IMPL
})
.endType();