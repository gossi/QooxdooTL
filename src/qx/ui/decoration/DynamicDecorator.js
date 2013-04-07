/**
 * This class is an abstract base calls and used by
 * {@link qx.theme.manager.Decoration}. It&#8217;s main purpose is to combine the
 * included mixins into one working decorator.
 */
//>public abstract
vjo.ctype('qx.ui.decoration.DynamicDecorator')
.inherits('qx.ui.decoration.Abstract')
.protos({
	/**
	 */
	_getDefaultInsets : vjo.NEEDS_IMPL,


	/**
	 * Collects all the style information of the decorators which is necessary
	 * to create the markup.
	 * 
	 */
	_getStyles : vjo.NEEDS_IMPL,


	/**
	 */
	_isInitialized : vjo.NEEDS_IMPL,


	/**
	 * Returns the styles of the decorator as a map with property names written
	 * in javascript style (e.g. fontWeight instead of font-weight).
	 * 
	 */
	getStyles : vjo.NEEDS_IMPL
})
.endType();