/**
 * Default history manager implementation. Either polls for URL fragment
 * identifier (hash) changes or uses the native &#8220;hashchange&#8221; event.
 */
//>internal
vjo.ctype('qx.bom.NativeHistory')
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
	 * Remove hash change listeners
	 * 
	 */
	__detatchListeners : vjo.NEEDS_IMPL,


	/**
	 * hash change event handler
	 * 
	 */
	__onHashChange : vjo.NEEDS_IMPL,


	/**
	 * Browser dependent function to read the current state of the history
	 * 
	 */
	_readState : vjo.NEEDS_IMPL
})
.endType();