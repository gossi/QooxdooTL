/**
 * Manages font-face definitions, making sure that each rule is only applied
 * once.
 */
//>public
vjo.ctype('qx.bom.webfonts.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds a font-face rule to the document
	 * 
	 */
	__addRule : vjo.NEEDS_IMPL,


	/**
	 * IE 6 and 7 omit the trailing quote after the format name when
	 * querying cssText. This needs to be fixed before cssText is replaced
	 * or all rules will be invalid and no web fonts will work any more.
	 * 
	 */
	__fixCssText : vjo.NEEDS_IMPL,


	/**
	 * Processes the next item in the queue
	 * 
	 */
	__flushQueue : vjo.NEEDS_IMPL,


	/**
	 * Assembles the body of a font-face rule for a single webFont.
	 * 
	 */
	__getRule : vjo.NEEDS_IMPL,


	/**
	 * Returns the full src value for a given font URL depending on the type
	 * 
	 */
	__getSourceForFormat : vjo.NEEDS_IMPL,


	/**
	 * Uses a naive regExp match to determine the format of each defined source
	 * file for a webFont. Returns a map with the format names as keys and the
	 * corresponding source URLs as values.
	 * 
	 */
	__getSourcesMap : vjo.NEEDS_IMPL,


	/**
	 * Removes the font-face declaration if a font could not be validated
	 * 
	 */
	__onFontChangeStatus : vjo.NEEDS_IMPL,


	/**
	 * Removes the font-face declaration for the given font-family from the
	 * stylesheet
	 * 
	 */
	__removeRule : vjo.NEEDS_IMPL,


	/**
	 * Does the actual work of adding stylesheet rules and triggering font
	 * validation
	 * 
	 */
	__require : vjo.NEEDS_IMPL,


	/**
	 * Returns the preferred font format(s) for the currently used browser. Some
	 * browsers support multiple formats, e.g. WOFF and TTF or WOFF and EOT. In
	 * those cases, WOFF is considered the preferred format.
	 * 
	 */
	getPreferredFormats : vjo.NEEDS_IMPL,


	/**
	 * Removes a font&#8217;s font-face definition from the style sheet. This means
	 * the font will no longer be available and any elements using it will
	 * fall back to the their regular font-families.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Removes the styleSheet element used for all web font definitions from the
	 * document. This means all web fonts declared by the manager will no longer
	 * be available and elements using them will fall back to their regular
	 * font-families
	 * 
	 */
	removeStyleSheet : vjo.NEEDS_IMPL,


	/**
	 * Adds the necessary font-face rule for a web font to the document. Also
	 * creates a web font Validator ({@link qx.bom.webfonts.Validator}) that
	 * checks if the webFont was applied correctly.
	 * 
	 */
	require : vjo.NEEDS_IMPL
})
.endType();