/**
 * Transports requests to a server using an IFRAME.
 * 
 * This class should not be used directly by client programmers.
 */
//>public
vjo.ctype('qx.io.remote.transport.Iframe')
.inherits('qx.io.remote.transport.Abstract')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Converting complete state to numeric value and update state property
	 * 
	 */
	_onload : vjo.NEEDS_IMPL,


	/**
	 * Converting named readyState to numeric value and update state property
	 * 
	 */
	_onreadystatechange : vjo.NEEDS_IMPL,


	/**
	 * Switches the readystate by setting the internal state.
	 * 
	 */
	_switchReadyState : vjo.NEEDS_IMPL,


	/**
	 * Returns the length of the content as fetched thus far.
	 * This method needs implementation (returns always 0).
	 * 
	 */
	getFetchedLength : vjo.NEEDS_IMPL,


	/**
	 * Returns the body node of the used iframe.
	 * 
	 */
	getIframeBody : vjo.NEEDS_IMPL,


	/**
	 * Returns the document node of the used iframe.
	 * 
	 */
	getIframeDocument : vjo.NEEDS_IMPL,


	/**
	 * Returns the iframe content as HTML.
	 * 
	 */
	getIframeHtmlContent : vjo.NEEDS_IMPL,


	/**
	 * Returns the iframe content (innerHTML) as text.
	 * 
	 */
	getIframeTextContent : vjo.NEEDS_IMPL,


	/**
	 * Returns the DOM window object of the used iframe.
	 * 
	 */
	getIframeWindow : vjo.NEEDS_IMPL,


	/**
	 * Returns the content of the response
	 * 
	 */
	getResponseContent : vjo.NEEDS_IMPL,


	/**
	 * Returns the value of the given response header.
	 * 
	 * This method is not implemented at the moment and returns always &#8220;null&#8221;.
	 * 
	 */
	getResponseHeader : vjo.NEEDS_IMPL,


	/**
	 * Provides an hash of all response headers.
	 * 
	 * This method is not implemented at the moment and returns an empty map.
	 * 
	 */
	getResponseHeaders : vjo.NEEDS_IMPL,


	/**
	 * Returns the current status code of the request if available or -1 if not.
	 * This method needs implementation (returns always 200).
	 * 
	 */
	getStatusCode : vjo.NEEDS_IMPL,


	/**
	 * Provides the status text for the current request if available and null otherwise.
	 * This method needs implementation (returns always an empty string)
	 * 
	 */
	getStatusText : vjo.NEEDS_IMPL,


	/**
	 * Sends a request with the use of a form.
	 * 
	 */
	send : vjo.NEEDS_IMPL,


	/**
	 * Sets a request header with the given value.
	 * 
	 * This method is not implemented at the moment.
	 * 
	 */
	setRequestHeader : vjo.NEEDS_IMPL
})
.endType();