/**
 * A very simple decorator featuring background images and colors. No
 * border is supported.
 */
//>public
vjo.ctype('qx.ui.decoration.Background')
.inherits('qx.ui.decoration.Abstract')
.mixin(['qx.ui.decoration.MBackgroundImage','qx.ui.decoration.MBackgroundColor'])
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