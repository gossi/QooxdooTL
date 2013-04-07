/**
 * Mouse event object.
 * 
 * the interface of this class is based on the DOM Level 2 mouse event
 * interface: http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings-mouseevents
 */
//>public
vjo.ctype('qx.event.type.Mouse')
.inherits('qx.event.type.Dom')
.protos({
	/**
	 */
	_cloneNativeEvent : vjo.NEEDS_IMPL,


	/**
	 * During mouse events caused by the depression or release of a mouse button,
	 * this method can be used to check which mouse button changed state.
	 * 
	 * Only internet explorer can compute the button during mouse move events. For
	 * all other browsers the button only contains sensible data during
	 * &#8220;click&#8221; events like &#8220;click&#8221;, &#8220;dblclick&#8221;, &#8220;mousedown&#8221;, &#8220;mouseup&#8221; or &#8220;contextmenu&#8221;.
	 * 
	 * But still, browsers act different on click:
	 * 
	 * 
	 *  = right mouse button
	 * ^  = middle mouse button
	 * 
	 * Browser | click, dblclick | contextmenu
	 * ---------------------------------------
	 * Firefox |          | ->
	 * Chrome  | 
	 * Safari  | 
	 * IE      | 
	 * Opera   |  (twice)

	 * 
	 */
	getButton : vjo.NEEDS_IMPL,


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
	 * Get a secondary event target related to an UI event. This attribute is
	 * used with the mouseover event to indicate the event target which the
	 * pointing device exited and with the mouseout event to indicate the
	 * event target which the pointing device entered.
	 * 
	 */
	getRelatedTarget : vjo.NEEDS_IMPL,


	/**
	 * Get the horizontal coordinate at which the event occurred relative to
	 * the origin of the screen coordinate system.
	 * 
	 * Note: This value is usually not very useful unless you want to
	 * position a native popup window at this coordinate.
	 * 
	 */
	getScreenLeft : vjo.NEEDS_IMPL,


	/**
	 * Get the vertical coordinate at which the event occurred relative to
	 * the origin of the screen coordinate system.
	 * 
	 * Note: This value is usually not very useful unless you want to
	 * position a native popup window at this coordinate.
	 * 
	 */
	getScreenTop : vjo.NEEDS_IMPL,


	/**
	 * Get the he horizontal coordinate at which the event occurred relative
	 * to the viewport.
	 * 
	 */
	getViewportLeft : vjo.NEEDS_IMPL,


	/**
	 * Get the vertical coordinate at which the event occurred relative
	 * to the viewport.
	 * 
	 */
	getViewportTop : vjo.NEEDS_IMPL,


	/**
	 * Whether the left button is pressed
	 * 
	 */
	isLeftPressed : vjo.NEEDS_IMPL,


	/**
	 * Whether the middle button is pressed
	 * 
	 */
	isMiddlePressed : vjo.NEEDS_IMPL,


	/**
	 * Whether the right button is pressed
	 * 
	 */
	isRightPressed : vjo.NEEDS_IMPL,


	/**
	 */
	stop : vjo.NEEDS_IMPL
})
.endType();