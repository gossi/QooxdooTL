/**
 * Implements an iFrame based history manager for IE 6/7/8.
 * 
 * Creates a hidden iFrame and uses document.write to store entries in the
 * history browser&#8217;s stack.
 */
//>internal
vjo.ctype('qx.bom.IframeHistory')
.inherits('qx.bom.History')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper function to clear the write state timer.
	 * 
	 */
	__clearWriteSateTimer : vjo.NEEDS_IMPL,


	/**
	 * IMPORTANT NOTE FOR IE:
	 * Setting the source before adding the iframe to the document.
	 * Otherwise IE will bring up a &#8220;Unsecure items&#8230;&#8221; warning in SSL mode
	 * 
	 */
	__createIframe : vjo.NEEDS_IMPL,


	/**
	 * Initializes the iframe
	 * 
	 */
	__initIframe : vjo.NEEDS_IMPL,


	/**
	 * Initialize the polling timer
	 * 
	 */
	__initTimer : vjo.NEEDS_IMPL,


	/**
	 * Checks whether the given location state is the current one.
	 * 
	 */
	__isCurrentLocationState : vjo.NEEDS_IMPL,


	/**
	 * Hash change listener.
	 * 
	 */
	__onHashChange : vjo.NEEDS_IMPL,


	/**
	 * Stores the given location state.
	 * 
	 */
	__storeLocationState : vjo.NEEDS_IMPL,


	/**
	 * Waits for the IFrame being loaded. Once the IFrame is loaded
	 * the callback is called with the provided context.
	 * 
	 */
	__waitForIFrame : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	_applyState : vjo.NEEDS_IMPL,


	/**
	 */
	_onHistoryLoad : vjo.NEEDS_IMPL,


	/**
	 * Get state from the iframe
	 * 
	 */
	_readState : vjo.NEEDS_IMPL,


	/**
	 */
	_setHash : vjo.NEEDS_IMPL,


	/**
	 */
	_setInitialState : vjo.NEEDS_IMPL,


	/**
	 * Helper function to set state property. This will only be called
	 * by _onHistoryLoad. It determines, that no apply of state will be called.
	 * 
	 */
	_setState : vjo.NEEDS_IMPL,


	/**
	 * Store state to the iframe
	 * 
	 */
	_writeState : vjo.NEEDS_IMPL,


	/**
	 */
	addToHistory : vjo.NEEDS_IMPL
})
.endType();