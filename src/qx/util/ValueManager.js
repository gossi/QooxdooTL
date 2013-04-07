/**
 * Abstract base class for all managers of themed values.
 */
//>public abstract
vjo.ctype('qx.util.ValueManager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the dynamics map.
	 * 
	 */
	_getDynamic : vjo.NEEDS_IMPL,


	/**
	 * Sets the dynamics map.
	 * 
	 */
	_setDynamic : vjo.NEEDS_IMPL,


	/**
	 * Whether a value is interpreted dynamically
	 * 
	 */
	isDynamic : vjo.NEEDS_IMPL,


	/**
	 * Returns the dynamically interpreted result for the incoming value,
	 * (if available), otherwise returns the original value
	 * 
	 */
	resolve : vjo.NEEDS_IMPL,


	/**
	 * Returns the dynamically interpreted result for the incoming value
	 * 
	 */
	resolveDynamic : vjo.NEEDS_IMPL
})
.endType();