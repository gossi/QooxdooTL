/**
 * An element preconfigured with a decorator. The decorator cannot be changed
 * after creation. This class is used to render the backgrounds, shadows and
 * separators in widgets.
 */
//>public
vjo.ctype('qx.html.Decorator')
.inherits('qx.html.Element')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Get the decorator
	 * 
	 */
	getDecorator : vjo.NEEDS_IMPL,


	/**
	 * Get the decorator&#8217;s id
	 * 
	 */
	getId : vjo.NEEDS_IMPL,


	/**
	 * Get the amount of space, the decoration needs for its border on each
	 * side.
	 * 
	 */
	getInsets : vjo.NEEDS_IMPL,


	/**
	 * Resizes the element respecting the configured borders
	 * to the given width and height. Should automatically
	 * respect the box model of the client to correctly
	 * compute the dimensions.
	 * 
	 */
	resize : vjo.NEEDS_IMPL,


	/**
	 * Applies the given background color to the element
	 * or fallback to the background color defined
	 * by the decoration itself.
	 * 
	 */
	tint : vjo.NEEDS_IMPL
})
.endType();