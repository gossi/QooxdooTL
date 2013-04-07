/**
 * Abstract base class for HTML based cell renderer.
 * 
 * HTML cell renderer are used to construct an HTML string, which is used to
 * render the cell.
 * 
 * EXPERIMENTAL!
 */
//>public abstract
vjo.ctype('qx.ui.virtual.cell.Abstract')
.inherits('qx.core.Object')
.satisfies('qx.ui.virtual.cell.ICell')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Get the element attributes for the cell
	 * 
	 */
	getAttributes : vjo.NEEDS_IMPL,


	/**
	 * Get cell&#8217;S HTML content
	 * 
	 */
	getContent : vjo.NEEDS_IMPL,


	/**
	 * Get the css classes for the cell
	 * 
	 */
	getCssClasses : vjo.NEEDS_IMPL,


	/**
	 * Get the cell&#8217;s insets. Insets are the sum of the cell&#8217;s padding and
	 * border width.
	 * 
	 */
	getInsets : vjo.NEEDS_IMPL,


	/**
	 * Get the CSS styles for the cell
	 * 
	 */
	getStyles : vjo.NEEDS_IMPL
})
.endType();