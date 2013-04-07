/**
 * This is the root element for a set of {@link qx.html.Element}s.
 * 
 * To make other elements visible these elements must be inserted
 * into an root element at any level.
 * 
 * A root element uses an existing DOM element where is assumed that
 * this element is always visible. In the easiest case, the root element
 * is identical to the document&#8217;s body.
 */
//>public
vjo.ctype('qx.html.Root')
.inherits('qx.html.Element')
.protos({
	/**
	 * Creates a root element
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Sets the element to an already existing node. It will be
	 * assumed that this DOM element is already visible e.g.
	 * like a normal displayed element in the document&#8217;s body.
	 * 
	 */
	useElement : vjo.NEEDS_IMPL
})
.endType();