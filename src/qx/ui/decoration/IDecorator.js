/**
 * A decorator is responsible for rendering a widget&#8217;s background and
 * border. It is passed the widget&#8217;s decoration element {@link qx.html.Element}
 * and configures it to display the decoration.
 * 
 * To use the decorator first call the {@link #getMarkup} method. This method
 * will return an HTML fragment containing the decoration. After the decoration
 * has been inserted into the DOM e.g. by using innerHTML the
 * {@link #resize} method must be called to give the decoration the proper size.
 * The first parameter of this call is the root DOM element of the decoration.
 * The resize call can be repeated as needed.
 * 
 * It is also possible to alter the background color of an decoration using the
 * {@link #tint} method.
 */
//>public
vjo.itype('qx.ui.decoration.IDecorator')
.protos({
	/**
	 * Get the amount of space, the decoration needs for its border on each
	 * side.
	 * 
	 */
	getInsets : vjo.NEEDS_IMPL,


	/**
	 * Returns the basic markup structure used for this decoration.
	 * This later updated on DOM to resize or tint the element.
	 * 
	 */
	getMarkup : vjo.NEEDS_IMPL,


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