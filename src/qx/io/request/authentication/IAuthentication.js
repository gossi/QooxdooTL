/**
 * Interface of an authentication delegate.
 */
//>public
vjo.itype('qx.io.request.authentication.IAuthentication')
.protos({
	/**
	 * Headers to include in request for authentication purposes.
	 * 
	 */
	getAuthHeaders : vjo.NEEDS_IMPL
})
.endType();