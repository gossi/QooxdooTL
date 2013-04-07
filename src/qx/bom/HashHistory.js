/**
 * History manager implementation for IE greater 7. IE reloads iframe
 * content on history actions even just hash value changed. This
 * implementation forwards history states (hashes) to a helper iframe.
 */
//>internal
vjo.ctype('qx.bom.HashHistory')
.inherits('qx.bom.History')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Attach hash change listeners
	 * 
	 */
	__attachListeners : vjo.NEEDS_IMPL,


	/**
	 * IMPORTANT NOTE FOR IE:
	 * Setting the source before adding the iframe to the document.
	 * Otherwise IE will bring up a &#8220;Unsecure items&#8230;&#8221; warning in SSL mode
	 * 
	 */
	__createIframe : vjo.NEEDS_IMPL,


	/**
	 * Remove hash change listeners
	 * 
	 */
	__detatchListeners : vjo.NEEDS_IMPL,


	/**
	 * Initializes the iframe
	 * 
	 */
	__initIframe : vjo.NEEDS_IMPL,


	/**
	 * hash change event handler
	 * 
	 */
	__onHashChange : vjo.NEEDS_IMPL,


	/**
	 * Waits for the IFrame being loaded. Once the IFrame is loaded
	 * the callback is called with the provided context.
	 * 
	 */
	__waitForIFrame : vjo.NEEDS_IMPL,


	/**
	 * Returns the fragment identifier of the top window URL. For gecko browsers we
	 * have to use a regular expression to avoid encoding problems.
	 * 
	 */
	_getHash : vjo.NEEDS_IMPL,


	/**
	 * Browser dependent function to read the current state of the history
	 * 
	 */
	_readState : vjo.NEEDS_IMPL,


	/**
	 * Sets the fragment identifier of the window URL
	 * 
	 */
	_setHash : vjo.NEEDS_IMPL,


	/**
	 * Save a state into the browser history.
	 * 
	 */
	_writeState : vjo.NEEDS_IMPL,


	/**
	 */
	addToHistory : vjo.NEEDS_IMPL
})
.endType();