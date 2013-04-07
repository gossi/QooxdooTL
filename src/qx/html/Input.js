/**
 * A Input wrap any valid HTML input element and make it accessible
 * through the normalized qooxdoo element interface.
 */
//>public
vjo.ctype('qx.html.Input')
.inherits('qx.html.Element')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_applyProperty : vjo.NEEDS_IMPL,


	/**
	 */
	_createDomElement : vjo.NEEDS_IMPL,


	/**
	 * Get the current value.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Gets the text wrap behavior of a text area element.
	 * 
	 * This property uses the style property &#8220;wrap&#8221; (IE) respectively &#8220;whiteSpace&#8221;
	 * 
	 */
	getWrap : vjo.NEEDS_IMPL,


	/**
	 * Sets the value of the input element.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the text wrap behavior of a text area element.
	 * 
	 * This property uses the style property &#8220;wrap&#8221; (IE) respectively &#8220;whiteSpace&#8221;
	 * 
	 */
	setWrap : vjo.NEEDS_IMPL
})
.endType();