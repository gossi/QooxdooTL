/**
 * Event object class for drag events
 */
//>public
vjo.ctype('qx.event.type.Drag')
.inherits('qx.event.type.Event')
.protos({
	/**
	 * Used during dragstart listener to
	 * inform the manager about supported drop actions.
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
	 * Used during dragstart listener to
	 * inform the manager about supported data types.
	 * 
	 */
	addType : vjo.NEEDS_IMPL,


	/**
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Returns the currently selected action. Depends on the
	 * supported actions of the source target and the modification
	 * keys pressed by the user.
	 * 
	 * Used in the droprequest listener.
	 * 
	 */
	getCurrentAction : vjo.NEEDS_IMPL,


	/**
	 * Returns the type which was requested last, to be used
	 * in the droprequest listener.
	 * 
	 */
	getCurrentType : vjo.NEEDS_IMPL,


	/**
	 * Returns the data of the given type. Used in the drop listener.
	 * 
	 */
	getData : vjo.NEEDS_IMPL,


	/**
	 * Get the horizontal position at which the event occurred relative to the
	 * left of the document. This property takes into account any scrolling of
	 * the page.
	 * 
	 */
	getDocumentLeft : vjo.NEEDS_IMPL,


	/**
	 * Get the vertical position at which the event occurred relative to the
	 * top of the document. This property takes into account any scrolling of
	 * the page.
	 * 
	 */
	getDocumentTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the drag&amp;drop event handler responsible for the target
	 * 
	 */
	getManager : vjo.NEEDS_IMPL,


	/**
	 * Initialize the fields of the event. The event must be initialized before
	 * it can be dispatched.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Stops the drag&amp;drop session and fires a dragend event.
	 * 
	 */
	stopSession : vjo.NEEDS_IMPL,


	/**
	 * Whether the given action is supported by the drag
	 * target (source target).
	 * 
	 * This is used in the event listeners for dragover
	 * or dragdrop.
	 * 
	 */
	supportsAction : vjo.NEEDS_IMPL,


	/**
	 * Whether the given type is supported by the drag
	 * target (source target).
	 * 
	 * This is used in the event listeners for dragover
	 * or dragdrop.
	 * 
	 */
	supportsType : vjo.NEEDS_IMPL
})
.endType();