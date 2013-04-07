/**
 * Basic authentication.
 */
//>public
vjo.ctype('qx.io.request.authentication.Basic')
.inherits('qx.core.Object')
.satisfies('qx.io.request.authentication.IAuthentication')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Headers to include for basic authentication.
	 * 
	 */
	getAuthHeaders : vjo.NEEDS_IMPL
})
.endType();