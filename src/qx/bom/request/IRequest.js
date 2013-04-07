/**
 * Interface of a low-level transport compatible with
 * {@link qx.io.request.AbstractRequest}.
 * 
 * Based on interface specified in
 * XmlHttpRequest. Also
 * borrows some methods as described in
 * XmlHttpRequest2.
 */
//>public
vjo.itype('qx.bom.request.IRequest')
.protos({
	/**
	 * Abort request
	 * 
	 */
	abort : vjo.NEEDS_IMPL,


	/**
	 * Get all response headers from response.
	 * 
	 */
	getAllResponseHeaders : vjo.NEEDS_IMPL,


	/**
	 * Get a single response header from response.
	 * 
	 */
	getResponseHeader : vjo.NEEDS_IMPL,


	/**
	 * Event handler for event fired when request is aborted.
	 * 
	 */
	onabort : vjo.NEEDS_IMPL,


	/**
	 * Event handler for event fired on a network error.
	 * 
	 */
	onerror : vjo.NEEDS_IMPL,


	/**
	 * Event handler for event fired on successful retrieval.
	 * 
	 */
	onload : vjo.NEEDS_IMPL,


	/**
	 * Event handler for event fired on retrieval.
	 * 
	 */
	onloadend : vjo.NEEDS_IMPL,


	/**
	 * Event handler for event fired at every state change.
	 * 
	 */
	onreadystatechange : vjo.NEEDS_IMPL,


	/**
	 * Event handler for event fired when timeout interval has passed.
	 * 
	 */
	ontimeout : vjo.NEEDS_IMPL,


	/**
	 * Initializes (prepares) request.
	 * 
	 */
	open : vjo.NEEDS_IMPL,


	/**
	 * Sends request.
	 * 
	 */
	send : vjo.NEEDS_IMPL,


	/**
	 * Sets a request header to be used by the request.
	 * 
	 */
	setRequestHeader : vjo.NEEDS_IMPL
})
.endType();