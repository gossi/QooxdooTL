/**
 * The blocker element is used to block interaction with the application.
 * 
 * It is usually transparent or semi-transparent and blocks all events from
 * the underlying elements.
 */
//>public
vjo.ctype('qx.html.Blocker')
.inherits('qx.html.Element')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Refreshes the cursor by setting it to null and then to the
	 * old value.
	 * 
	 */
	__refreshCursor : vjo.NEEDS_IMPL,


	/**
	 * Stop the event propagation from the passed event.
	 * 
	 */
	_stopPropagation : vjo.NEEDS_IMPL
})
.endType();