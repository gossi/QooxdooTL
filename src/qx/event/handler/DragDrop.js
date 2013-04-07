/**
 * Event handler, which supports drag events on DOM elements.
 */
//>public
vjo.ctype('qx.event.handler.DragDrop')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Clean up event listener and structures when a drag was ended without ever starting into session mode
	 * (e.g. not reaching the required offset before)
	 * 
	 */
	__clearInit : vjo.NEEDS_IMPL,


	/**
	 * Detects the current action and stores it under the private
	 * field __currentAction. Also fires the event
	 * dragchange on every modification.
	 * 
	 */
	__detectAction : vjo.NEEDS_IMPL,


	/**
	 * Finds next draggable parent of the given element. Maybe the element itself as well.
	 * 
	 * Looks for the attribute qxDraggable with the value on.
	 * 
	 */
	__findDraggable : vjo.NEEDS_IMPL,


	/**
	 * Finds next droppable parent of the given element. Maybe the element itself as well.
	 * 
	 * Looks for the attribute qxDroppable with the value on.
	 * 
	 */
	__findDroppable : vjo.NEEDS_IMPL,


	/**
	 * Wrapper for {@link qx.event.Registration#fireEvent} for drag&amp;drop events
	 * needed in this class.
	 * 
	 */
	__fireEvent : vjo.NEEDS_IMPL,


	/**
	 * Rebuilds the internal data storage used during a drag&amp;drop session
	 * 
	 */
	__rebuildStructures : vjo.NEEDS_IMPL,


	/**
	 * Event listener for root&#8217;s keydown event
	 * 
	 */
	_onKeyDown : vjo.NEEDS_IMPL,


	/**
	 * Event listener for root&#8217;s keypress event
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Event listener for root&#8217;s keyup event
	 * 
	 */
	_onKeyUp : vjo.NEEDS_IMPL,


	/**
	 * Event listener for root&#8217;s mousedown event
	 * 
	 */
	_onMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Event listener for root&#8217;s mousemove event
	 * 
	 */
	_onMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Event listener for root&#8217;s mouseout event
	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Event listener for root&#8217;s mouseover event
	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 * Event listener for root&#8217;s mouseup event
	 * 
	 */
	_onMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Event listener for window&#8217;s blur event
	 * 
	 */
	_onWindowBlur : vjo.NEEDS_IMPL,


	/**
	 * Registers a supported action. One of move,
	 * copy or alias.
	 * 
	 */
	addAction : vjo.NEEDS_IMPL,


	/**
	 * Adds data of the given type to the internal storage. The data
	 * is available until the dragend event is fired.
	 * 
	 */
	addData : vjo.NEEDS_IMPL,


	/**
	 * Registers a supported type
	 * 
	 */
	addType : vjo.NEEDS_IMPL,


	/**
	 * Cleans up a drag&amp;drop session when dragstart was fired before.
	 * 
	 */
	clearSession : vjo.NEEDS_IMPL,


	/**
	 * Returns the currently selected action (by user keyboard modifiers)
	 * 
	 */
	getCurrentAction : vjo.NEEDS_IMPL,


	/**
	 * Returns the type which was requested last.
	 * 
	 */
	getCurrentType : vjo.NEEDS_IMPL,


	/**
	 * Returns the data of the given type during the drop event
	 * on the drop target. This method fires a droprequest at
	 * the drag target which should be answered by calls to {@link #addData}.
	 * 
	 */
	getData : vjo.NEEDS_IMPL,


	/**
	 * Returns if a drag session is currently active
	 * 
	 */
	isSessionActive : vjo.NEEDS_IMPL,


	/**
	 * Whether the current drag target supports the given action
	 * 
	 */
	supportsAction : vjo.NEEDS_IMPL,


	/**
	 * Whether the current drag target supports the given type
	 * 
	 */
	supportsType : vjo.NEEDS_IMPL
})
.endType();