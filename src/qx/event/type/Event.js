/**
 * Basic event object.
 * 
 * Please note:
 * Event objects are only valid during the event dispatch. After the dispatch
 * event objects are pooled or disposed. If you want to safe a reference to an
 * event instance use the {@link #clone} method.
 * 
 * The interface is modeled after the DOM level 2 event interface:
 * http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface
 */
//>public
vjo.ctype('qx.event.type.Event')
.inherits('qx.core.Object')
.protos({
	/**
	 * Create a clone of the event object, which is not automatically disposed
	 * or pooled after an event dispatch.
	 * 
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Check whether or not the event is a bubbling event. If the event can
	 * bubble the value is true, else the value is false.
	 * 
	 */
	getBubbles : vjo.NEEDS_IMPL,


	/**
	 * Get the event target node whose event listeners are currently being
	 * processed. This is particularly useful during event capturing and
	 * bubbling.
	 * 
	 */
	getCurrentTarget : vjo.NEEDS_IMPL,


	/**
	 * Get whether the default action has been prevented
	 * 
	 */
	getDefaultPrevented : vjo.NEEDS_IMPL,


	/**
	 * Used to indicate which phase of event flow is currently being evaluated.
	 * 
	 */
	getEventPhase : vjo.NEEDS_IMPL,


	/**
	 * Get the original event target. This is only configured
	 * for events which are fired by another event (often when
	 * the target should be reconfigured for another view) e.g.
	 * low-level DOM event to widget event.
	 * 
	 */
	getOriginalTarget : vjo.NEEDS_IMPL,


	/**
	 * Get whether further event propagation has been stopped.
	 * 
	 */
	getPropagationStopped : vjo.NEEDS_IMPL,


	/**
	 * Get the related event target. This is only configured for
	 * events which also had an influences on another element e.g.
	 * mouseover/mouseout, focus/blur, ...
	 * 
	 */
	getRelatedTarget : vjo.NEEDS_IMPL,


	/**
	 * Returns the event target to which the event was originally
	 * dispatched.
	 * 
	 */
	getTarget : vjo.NEEDS_IMPL,


	/**
	 * The time (in milliseconds relative to the epoch) at which the event was created.
	 * 
	 */
	getTimeStamp : vjo.NEEDS_IMPL,


	/**
	 * The name of the event
	 * 
	 */
	getType : vjo.NEEDS_IMPL,


	/**
	 * Initialize the fields of the event. The event must be initialized before
	 * it can be dispatched.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Get whether the event is cancelable
	 * 
	 */
	isCancelable : vjo.NEEDS_IMPL,


	/**
	 * Prevent the default action of cancelable events, e.g. opening the context
	 * menu, ...
	 * 
	 */
	preventDefault : vjo.NEEDS_IMPL,


	/**
	 * Set whether the event bubbles.
	 * 
	 */
	setBubbles : vjo.NEEDS_IMPL,


	/**
	 * Set whether the event is cancelable
	 * 
	 */
	setCancelable : vjo.NEEDS_IMPL,


	/**
	 * Override current target.
	 * 
	 */
	setCurrentTarget : vjo.NEEDS_IMPL,


	/**
	 * Override the event phase
	 * 
	 */
	setEventPhase : vjo.NEEDS_IMPL,


	/**
	 * Override original target.
	 * 
	 */
	setOriginalTarget : vjo.NEEDS_IMPL,


	/**
	 * Override related target.
	 * 
	 */
	setRelatedTarget : vjo.NEEDS_IMPL,


	/**
	 * Override event target.
	 * 
	 */
	setTarget : vjo.NEEDS_IMPL,


	/**
	 * Override the event type
	 * 
	 */
	setType : vjo.NEEDS_IMPL,


	/**
	 * Stops event from all further processing. Execute this when the
	 * current handler should have &#8220;exclusive rights&#8221; to the event
	 * and no further reaction by anyone else should happen.
	 * 
	 */
	stop : vjo.NEEDS_IMPL,


	/**
	 * This method is used to prevent further propagation of an event during event
	 * flow. If this method is called by any event listener the event will cease
	 * propagating through the tree. The event will complete dispatch to all listeners
	 * on the current event target before event flow stops.
	 * 
	 */
	stopPropagation : vjo.NEEDS_IMPL
})
.endType();