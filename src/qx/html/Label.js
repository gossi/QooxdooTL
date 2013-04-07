/**
 * A cross browser label instance with support for rich HTML and text labels.
 * 
 * Text labels supports ellipsis to reduce the text width.
 * 
 * The mode can be changed through the method {@link #setRich}
 * which accepts a boolean value. The default mode is &#8220;text&#8221; which is
 * a good choice because it has a better performance.
 */
//>public
vjo.ctype('qx.html.Label')
.inherits('qx.html.Element')
.protos({
	/**
	 */
	_applyProperty : vjo.NEEDS_IMPL,


	/**
	 */
	_copyData : vjo.NEEDS_IMPL,


	/**
	 */
	_createDomElement : vjo.NEEDS_IMPL,


	/**
	 * Get the current content.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Toggles between rich HTML mode and pure text mode.
	 * 
	 */
	setRich : vjo.NEEDS_IMPL,


	/**
	 * Sets the HTML/text content depending on the content mode.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL
})
.endType();