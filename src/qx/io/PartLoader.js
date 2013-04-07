/**
 * The part loader knows about all generated packages and parts.
 * 
 * It contains functionality to load parts and to retrieve part instances.
 */
//>public
vjo.ctype('qx.io.PartLoader')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Get the part instance of the part with the given name.
	 * 
	 */
	getPart : vjo.NEEDS_IMPL,


	/**
	 * Returns a map of all known parts.
	 * 
	 */
	getParts : vjo.NEEDS_IMPL,


	/**
	 * Checks if a part with the given name is available.
	 * 
	 */
	hasPart : vjo.NEEDS_IMPL,


	/**
	 * Loads one or more parts asynchronously. The callback is called after all
	 * parts and their dependencies are fully loaded. If the parts are already
	 * loaded the callback is called immediately.
	 * 
	 */
	require : vjo.NEEDS_IMPL
})
.endType();