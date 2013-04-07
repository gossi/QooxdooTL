/**
 * A basic decorator featuring background colors and simple borders based on
 * CSS styles.
 */
//>public
vjo.ctype('qx.ui.decoration.Single')
.inherits('qx.ui.decoration.Abstract')
.mixin(['qx.ui.decoration.MBackgroundImage','qx.ui.decoration.MBackgroundColor','qx.ui.decoration.MSingleBorder'])
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