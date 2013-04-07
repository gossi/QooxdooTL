/**
 * Border implementation with two CSS borders. Both borders can be styled
 * independent of each other. This decorator is used to create 3D effects like
 * inset, outset, ridge or groove.
 */
//>public
vjo.ctype('qx.ui.decoration.Double')
.inherits('qx.ui.decoration.Abstract')
.mixin(['qx.ui.decoration.MBackgroundColor','qx.ui.decoration.MDoubleBorder'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_getDefaultInsets : vjo.NEEDS_IMPL,


	/**
	 */
	_isInitialized : vjo.NEEDS_IMPL
})
.endType();